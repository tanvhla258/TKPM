package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.BookDeliveryNote;
import org.springframework.data.domain.Page;

import java.util.List;

public interface BookDeliveryNoteService {
    Page<BookDeliveryNote> fetchNotesByPage(Integer page, Integer size);
    List<BookDeliveryNote> getAll();
    BookDeliveryNote addBookDeliveryNote(BookDeliveryNote bookDeliveryNote);
    BookDeliveryNote updateBookDeliveryNote(Long id, BookDeliveryNote bookDeliveryNote);
    void deleteBookDeliveryNote(Long id);
    BookDeliveryNote getBookDeliveryNoteById(Long id);
}
