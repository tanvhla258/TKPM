package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.ReceiptNote;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ReceiptNoteService {
    Page<ReceiptNote> fetchReceiptNotesByPage(Integer page, Integer size);
    List<ReceiptNote> getAll();
    ReceiptNote addReceiptNote(ReceiptNote receiptNote);
    ReceiptNote updateReceiptNote(Long id, ReceiptNote receiptNote);
    void deleteReceiptNote(Long id);
    ReceiptNote getReceiptNoteById(Long id);
}
