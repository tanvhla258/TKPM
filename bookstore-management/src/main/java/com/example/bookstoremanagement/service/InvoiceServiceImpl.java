package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.Book;
import com.example.bookstoremanagement.domain.BookInvoice;
import com.example.bookstoremanagement.domain.Invoice;
import com.example.bookstoremanagement.exception.InvoiceNotFoundException;
import com.example.bookstoremanagement.repository.BookRepository;
import com.example.bookstoremanagement.repository.InvoiceRepository;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.log4j.Log4j;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class InvoiceServiceImpl implements InvoiceService{
    private final InvoiceRepository repository;
    private final BookRepository bookRepository;
    @Override
    public Page<Invoice> fetchInvoicesByPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return repository.findAll(pageable);
    }

    @Override
    public List<Invoice> getAll() {
        return null;
    }

    @Override
    public Invoice addInvoice(Invoice invoice) {
        for(BookInvoice bookInvoice: invoice.getBookInvoices()){
            Book foundBook = bookRepository.findBookByFields(bookInvoice.getBook());
//            foundBook.setQuantity(foundBook.getQuantity() - bookInvoice.getQuantity());
        }
        return repository.save(invoice);
    }

    @Override
    public Invoice updateInvoice(Long id, Invoice invoice) {
        Invoice foundInvoice = getInvoiceById(id);
        foundInvoice.setCreationDate(invoice.getCreationDate());
        foundInvoice.setCustomer(invoice.getCustomer());
        return repository.save(foundInvoice);
    }

    @Override
    public void deleteInvoice(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Invoice getInvoiceById(Long id) {
        return repository.findById(id).orElseThrow(() -> new InvoiceNotFoundException("Invoice not found"));
    }
}
