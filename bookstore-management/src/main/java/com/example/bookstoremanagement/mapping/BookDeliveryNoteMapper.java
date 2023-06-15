package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.BookDeliveryNote;
import com.example.bookstoremanagement.dto.BookDeliveryNoteDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BookDeliveryNoteMapper extends BaseMapper<BookDeliveryNote, BookDeliveryNoteDTO>{

}
