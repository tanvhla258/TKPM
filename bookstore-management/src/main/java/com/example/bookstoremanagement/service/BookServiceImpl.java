package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.Book;
import com.example.bookstoremanagement.exception.BookNotFoundException;
import com.example.bookstoremanagement.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService{
    private final BookRepository repository;

    @Override
    @Transactional(readOnly = true)
    public Page<Book> fetchBooksByPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return repository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Book> getAll(){
        return repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Book getBookById(Long id) {
        return repository.findById(id).orElseThrow(()-> new BookNotFoundException("Book not found"));
    }

    @Override
    @Transactional(rollbackFor = {Exception.class})
    public Book addBook(Book book) {
        return repository.save(book);
    }

    @Override
    @Transactional(rollbackFor = {Exception.class})
    public Book updateBook(Long id, Book book) {
        Book foundBook = getBookById(id);
        foundBook.setCategory(book.getCategory());
        foundBook.setAuthor(book.getAuthor());
        foundBook.setTitle(book.getTitle());
//        foundBook.setInventory(book.getInventory());
        foundBook.setInventoryByMonthSet(book.getInventoryByMonthSet());
        return repository.save(foundBook);
    }

    @Override
    @Transactional(rollbackFor = {Exception.class})
    public void deleteBook(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Page<Book> fetchBooksByTitle(String title, Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return repository.findByTitle(title, pageable);
    }

    @Override
    public Page<Book> fetchBooksByCategory(Integer category, Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return repository.findByCategory(category, pageable);
    }

    @Override
    public Page<Book> fetchBooksByTitleAndCategory(String title, Integer category, Integer page, Integer size){
        Pageable pageable = PageRequest.of(page, size);
        return repository.findByTitleAndCategory(title, category, pageable);
    }
}
