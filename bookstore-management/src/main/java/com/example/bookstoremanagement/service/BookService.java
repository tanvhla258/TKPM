package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.Book;
import org.springframework.data.domain.Page;

import java.util.List;

public interface BookService {
    Page<Book> fetchBooksByPage(Integer page, Integer size);
    List<Book> getAll();
    Book getBookById(Long id);
    Book addBook(Book book);
    Book updateBook(Long id, Book book);
    void deleteBook(Long id);
    Page<Book> fetchBooksByTitle(String title, Integer page, Integer size);
    Page<Book> fetchBooksByCategory(Integer category, Integer page, Integer size);
    Page<Book> fetchBooksByTitleAndCategory(String title, Integer category, Integer page, Integer size);
}
