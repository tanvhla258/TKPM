package com.example.bookstoremanagement.controller;

import com.example.bookstoremanagement.domain.Book;
import com.example.bookstoremanagement.dto.BookDTO;
import com.example.bookstoremanagement.mapping.BookMapper;
import com.example.bookstoremanagement.response.Response;
import com.example.bookstoremanagement.response.ResponseAPI;
import com.example.bookstoremanagement.service.BookService;
import com.google.common.base.Preconditions;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("books")
public class BookController {
    private final BookService bookService;
    private final BookMapper bookMapper;
    private static final String BOOK_DETAILS_MISSING_MSG = "Book's details must be specified";
    private static final String BOOK_ID_MISSING_MSG = "Book's id must be specified";
    @GetMapping("list")
    public Page<BookDTO> getBooksByPage(@RequestParam(value = "page") Integer page,
                                        @RequestParam(value = "size") Integer size){
        Page<Book> books = bookService.fetchBooksByPage(page, size);
        return new PageImpl<>(bookMapper.toDtoList(books.getContent()), books.getPageable(), books.getTotalElements());
    }
    @GetMapping("list/all")
    public List<BookDTO> getAll(){
        List<Book> books = bookService.getAll();
        List<BookDTO> bookDTOS = bookMapper.toDtoList(books);
        return bookDTOS;
    }
    @PostMapping("add")
    public Response addBook(@RequestBody BookDTO bookDTO){
        Preconditions.checkState(Objects.nonNull(bookDTO), BOOK_DETAILS_MISSING_MSG);
        Book book = bookMapper.toEntity(bookDTO);
        return ResponseAPI.positiveResponse(bookService.addBook(book));
    }
    @PutMapping("update")
    public Response updateBook(@RequestParam(value = "id") Long id,
                               @RequestBody BookDTO bookDTO){
        Preconditions.checkState(Objects.nonNull(id), BOOK_ID_MISSING_MSG);
        Preconditions.checkState(Objects.nonNull(bookDTO), BOOK_DETAILS_MISSING_MSG);
        Book book = bookMapper.toEntity(bookDTO);
        return ResponseAPI.positiveResponse(bookService.updateBook(id, book));
    }
//    @GetMapping(value = "search", params = {"title", "page", "size"})
//    public Page<BookDTO> getBooksByTitle(@RequestParam(value = "title") String title,
//                                         @RequestParam(value = "page")Integer page,
//                                         @RequestParam(value = "size")Integer size){
//        Page<Book> bookPage = bookService.fetchBooksByTitle(title, page, size);
//        return new PageImpl<>(bookMapper.toDtoList(bookPage.getContent()), bookPage.getPageable(), bookPage.getTotalElements());
//    }
//    @GetMapping(value = "search", params = {"category", "page", "size"})
//    public Page<BookDTO> getBooksByCategory(@RequestParam(value = "category") String category,
//                                         @RequestParam(value = "page")Integer page,
//                                         @RequestParam(value = "size")Integer size){
//        Page<Book> bookPage = bookService.fetchBooksByCategory(category, page, size);
//        return new PageImpl<>(bookMapper.toDtoList(bookPage.getContent()), bookPage.getPageable(), bookPage.getTotalElements());
//    }
    @GetMapping(value = "search")
    public Page<BookDTO> getBooksByTitleAndCategory(@RequestParam(value = "title", required = false) String title,
                                                    @RequestParam(value = "category", required = false) Integer category,
                                                    @RequestParam(value = "page") Integer page,
                                                    @RequestParam(value = "size") Integer size){
        Page<Book> bookPage = null;
        if(category != null && title != null){
            bookPage = bookService.fetchBooksByTitleAndCategory(title, category, page, size);
        }
        else if(category != null){
            bookPage = bookService.fetchBooksByCategory(category, page, size);
        }
        else if(title != null){
            bookPage = bookService.fetchBooksByTitle(title, page, size);
        }
        else{
            bookPage = bookService.fetchBooksByPage(page, size);
        }
        return new PageImpl<>(bookMapper.toDtoList(bookPage.getContent()), bookPage.getPageable(), bookPage.getTotalElements());
    }

}
