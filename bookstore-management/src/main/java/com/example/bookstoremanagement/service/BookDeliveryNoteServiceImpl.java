package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.*;
import com.example.bookstoremanagement.exception.BookDeliveryNoteNotFoundException;
import com.example.bookstoremanagement.exception.QuantityOfBookInventoryWhenDeliveryMoreThanRegulationException;
import com.example.bookstoremanagement.exception.QuantityOfDeliveryBookLessThanRegulationException;
import com.example.bookstoremanagement.exception.RegulationNotFoundException;
import com.example.bookstoremanagement.repository.BookDeliveryNoteRepository;
import com.example.bookstoremanagement.repository.BookRepository;
import com.example.bookstoremanagement.repository.CategoryRepository;
import com.example.bookstoremanagement.repository.RegulationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class BookDeliveryNoteServiceImpl implements BookDeliveryNoteService{
    private final BookDeliveryNoteRepository deliveryNoteRepository;
    private final BookRepository bookRepository;
    private final CategoryRepository categoryRepository;
    private final RegulationRepository regulationRepository;
    @Override
    public Page<BookDeliveryNote> fetchNotesByPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return deliveryNoteRepository.findAll(pageable);
    }

    @Override
    public List<BookDeliveryNote> getAll() {
        return deliveryNoteRepository.findAll();
    }

    @Override
    public BookDeliveryNote addBookDeliveryNote(BookDeliveryNote bookDeliveryNote) {
        checkRegulation(bookDeliveryNote);
        updateBookInventoryByMonth(bookDeliveryNote);
        return deliveryNoteRepository.save(bookDeliveryNote);
    }

    private void checkRegulation(BookDeliveryNote bookDeliveryNote){
//        Check regulation
//        Quantity of entering book more than regulation
        Integer check = regulationRepository.findById(0L).orElseThrow(() -> new RegulationNotFoundException("Regulation not found")).getValue();
        for(BookDeliveryNoteBook bookDeliveryNoteBook: bookDeliveryNote.getDeliveryNoteBooks()){
            if(bookDeliveryNoteBook.getQuantity() < check){
                throw new QuantityOfDeliveryBookLessThanRegulationException(check);
            }
        }
//         Current quantity of book less than regulation
        check = regulationRepository.findById(1L).orElseThrow(() -> new RegulationNotFoundException("Regulation not found")).getValue();
        for(BookDeliveryNoteBook bookDeliveryNoteBook: bookDeliveryNote.getDeliveryNoteBooks()){
            Book inBook = bookDeliveryNoteBook.getBook();
            Book foundBook = bookRepository.findBookByFields(inBook.getTitle(), inBook.getCategory().getId(), inBook.getAuthor());
            if(foundBook != null){
                int inMonth = bookDeliveryNote.getCreationDate().getMonthValue();
                int inYear = bookDeliveryNote.getCreationDate().getYear();
                InventoryByMonth inventory = InventoryByMonth.getInventoryByMonth(foundBook.getInventoryByMonthSet(), inMonth, inYear);
                if(inventory != null && inventory.getQuantity() > check){
                    throw new QuantityOfBookInventoryWhenDeliveryMoreThanRegulationException(check);
                }
            }
        }
    }


    @Override
    public BookDeliveryNote updateBookDeliveryNote(Long id, BookDeliveryNote bookDeliveryNote) {
        checkRegulation(bookDeliveryNote);
        BookDeliveryNote foundNote = getBookDeliveryNoteById(id);
        for(BookDeliveryNoteBook bookDeliveryNoteBook: foundNote.getDeliveryNoteBooks()){
            Book book  = bookDeliveryNoteBook.getBook();
            Book foundBook = bookRepository.findBookByFields(book.getTitle(), book.getCategory().getId(), book.getAuthor());
            if(foundBook == null){
                continue;
            }
            for(InventoryByMonth i: InventoryByMonth.filterByMonthYear(foundBook.getInventoryByMonthSet(), bookDeliveryNote.getCreationDate().getMonthValue(), bookDeliveryNote.getCreationDate().getYear())){
                i.setQuantity(i.getQuantity() - bookDeliveryNoteBook.getQuantity());
            }
        }
        updateBookInventoryByMonth(bookDeliveryNote);
        foundNote.setCreationDate(bookDeliveryNote.getCreationDate());
        foundNote.setShipperName(bookDeliveryNote.getShipperName());
        foundNote.setDeliveryNoteBooks(bookDeliveryNote.getDeliveryNoteBooks());
        return deliveryNoteRepository.save(foundNote);
    }

    private BookDeliveryNote updateBookInventoryByMonth(BookDeliveryNote bookDeliveryNote) {
        LocalDate creationDate = bookDeliveryNote.getCreationDate();
        for(BookDeliveryNoteBook bookDeliveryNoteBook: bookDeliveryNote.getDeliveryNoteBooks()){
            bookDeliveryNoteBook.setId(new BookDeliveryNoteBookId());
            bookDeliveryNoteBook.setDeliveryNote(bookDeliveryNote);
            Book book = bookDeliveryNoteBook.getBook();
//            Category foundCategory = book.getCategory();
////            if(foundCategory.getId() == null){
////                foundCategory = categoryRepository.save(foundCategory);
////            }
//            book.setCategory(foundCategory);
//            Book foundBook = bookRepository.findBookByFields(book.getBook());
            Book foundBook = bookRepository.findBookByFields(book.getTitle(), book.getCategory().getId(), book.getAuthor());
            int fromMonth = creationDate.getMonthValue();
            int fromYear = creationDate.getYear();
            if(foundBook == null){
                book = bookRepository.saveAndFlush(book);
                LocalDate currentDate = LocalDate.now();
                int toMonth = currentDate.getMonthValue();
                int toYear = currentDate.getYear();
                book.setInventoryByMonthSet(new HashSet<>());
                while (fromYear < toYear || (fromYear == toYear && fromMonth <= toMonth)){
                    InventoryByMonth month = InventoryByMonth
                            .builder()
                            .id(InventoryByMonthId
                                            .builder()
                                            .bookId(book.getId())
                                            .month(fromMonth)
                                            .year(fromYear)
                                            .build())
                            .quantity(bookDeliveryNoteBook.getQuantity())
                            .book(book)
                            .build();
                    book.getInventoryByMonthSet().add(month);
                    if (fromMonth == 12) {
                        fromMonth = 1;
                        fromYear++;
                    } else {
                        fromMonth++;
                    }
                }
            }
            else{
                book = foundBook;
                Set<InventoryByMonth> foundInventoryByMonthSet = InventoryByMonth.filterByMonthYear(foundBook.getInventoryByMonthSet(), fromMonth, fromYear);

                int firstMonthFound = foundInventoryByMonthSet.stream().findFirst().get().getId().getMonth();
                int firstYearFound = foundInventoryByMonthSet.stream().findFirst().get().getId().getYear();
                if(firstMonthFound < fromMonth && firstYearFound < fromYear){
                    while (firstYearFound < fromYear || (firstYearFound == fromYear && firstMonthFound < fromMonth)){
                        InventoryByMonth month = InventoryByMonth
                                .builder()
                                .id(InventoryByMonthId
                                        .builder()
                                        .bookId(book.getId())
                                        .month(fromMonth)
                                        .year(fromYear)
                                        .build())
                                .quantity(0)
                                .book(book)
                                .build();
                        foundInventoryByMonthSet.add(month);
                        if (fromMonth == 12) {
                            fromMonth = 1;
                            fromYear++;
                        } else {
                            fromMonth++;
                        }
                    }
                }
                for(InventoryByMonth i: foundInventoryByMonthSet){
                    i.setQuantity(i.getQuantity() + bookDeliveryNoteBook.getQuantity());
                }
            }
            bookDeliveryNoteBook.getId().setBookId(book.getId());
            bookRepository.save(book);
            bookDeliveryNoteBook.setBook(book);
        }
        return deliveryNoteRepository.saveAndFlush(bookDeliveryNote);
    }

    @Override
    public void deleteBookDeliveryNote(Long id) {
        BookDeliveryNote foundNote = getBookDeliveryNoteById(id);
        for(BookDeliveryNoteBook book: foundNote.getDeliveryNoteBooks()){
            Book foundBook = bookRepository.findBookByFields(book.getBook().getTitle(), book.getBook().getCategory().getId(), book.getBook().getAuthor());
            if(foundBook != null){
                for(InventoryByMonth i: InventoryByMonth.filterByMonthYear(foundBook.getInventoryByMonthSet(), foundNote.getCreationDate().getMonthValue(), foundNote.getCreationDate().getYear())){
                    i.setQuantity(i.getQuantity() - book.getQuantity());
                }
                bookRepository.save(foundBook);
            }
        }
        deliveryNoteRepository.delete(foundNote);
    }

    @Override
    public BookDeliveryNote getBookDeliveryNoteById(Long id) {
        return deliveryNoteRepository.findById(id).orElseThrow(() -> new BookDeliveryNoteNotFoundException("Book delivery note not found"));
    }
}
