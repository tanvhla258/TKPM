package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.Book;
import com.example.bookstoremanagement.dto.BookDTO;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface BookMapper extends BaseMapper<Book, BookDTO> { }
