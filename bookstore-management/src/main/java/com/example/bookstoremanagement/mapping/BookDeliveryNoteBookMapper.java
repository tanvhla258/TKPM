package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.BookDeliveryNoteBook;
import com.example.bookstoremanagement.dto.BookDeliveryNoteBookDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BookDeliveryNoteBookMapper extends BaseMapper<BookDeliveryNoteBook, BookDeliveryNoteBookDTO> {

}
