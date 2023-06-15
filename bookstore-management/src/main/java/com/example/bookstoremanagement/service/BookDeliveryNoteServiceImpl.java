package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.*;
import com.example.bookstoremanagement.exception.BookDeliveryNoteNotFoundException;
import com.example.bookstoremanagement.repository.BookDeliveryNoteRepository;
import com.example.bookstoremanagement.repository.BookRepository;
import com.example.bookstoremanagement.repository.CategoryRepository;
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
        updateBookInventoryByMonth(bookDeliveryNote);
        return deliveryNoteRepository.save(bookDeliveryNote);
    }

    @Override
    public BookDeliveryNote updateBookDeliveryNote(Long id, BookDeliveryNote bookDeliveryNote) {
        BookDeliveryNote foundNote = getBookDeliveryNoteById(id);
        for(BookDeliveryNoteBook bookDeliveryNoteBook: foundNote.getDeliveryNoteBooks()){
            Book book  = bookDeliveryNoteBook.getBook();
            Book foundBook = bookRepository.findBookByFields(book.getTitle(), book.getCategory().getId(), book.getAuthor());
            if(foundBook == null){
                continue;
            }
            List<InventoryByMonth> inventories = bookRepository
                    .getInventoryFromYearMonth(foundBook.getId(), bookDeliveryNote.getCreationDate());
            for(InventoryByMonth i: inventories){
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
            Category foundCategory = book.getCategory();
            if(foundCategory.getId() == null){
                foundCategory = categoryRepository.save(foundCategory);
            }
            book.setCategory(foundCategory);
//            Book foundBook = bookRepository.findBookByFields(book.getBook());
            Book foundBook = bookRepository.findBookByFields(book.getTitle(), book.getCategory().getId(), book.getAuthor());
            if(foundBook == null){
                book = bookRepository.saveAndFlush(book);
                int fromMonth = creationDate.getMonthValue();
                int fromYear = creationDate.getYear();
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
                for(InventoryByMonth i: foundBook.getInventoryByMonthSet()){
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
            Book foundBook = bookRepository.findBookByFields(book.getBook());
            if(foundBook != null){
                List<InventoryByMonth> inventories = bookRepository
                        .getInventoryFromYearMonth(foundBook.getId(), foundNote.getCreationDate());
                for(InventoryByMonth i: inventories){
                    i.setQuantity(i.getQuantity() - book.getQuantity());
                }
            }
        }
        deliveryNoteRepository.delete(foundNote);
    }

    @Override
    public BookDeliveryNote getBookDeliveryNoteById(Long id) {
        return deliveryNoteRepository.findById(id).orElseThrow(() -> new BookDeliveryNoteNotFoundException("Book delivery note not found"));
    }
}
