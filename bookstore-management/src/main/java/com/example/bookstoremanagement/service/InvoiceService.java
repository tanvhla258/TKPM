package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.Invoice;
import org.springframework.data.domain.Page;

import java.util.List;

public interface InvoiceService {
    Page<Invoice> fetchInvoicesByPage(Integer page, Integer size);
    List<Invoice> getAll();
    Invoice addInvoice(Invoice invoice);
    Invoice updateInvoice(Long id, Invoice invoice);
    void deleteInvoice(Long id);
    Invoice getInvoiceById(Long id);
}
