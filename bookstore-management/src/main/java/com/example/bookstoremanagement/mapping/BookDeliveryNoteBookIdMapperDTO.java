package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.BookDeliveryNoteBookId;
import com.example.bookstoremanagement.dto.BookDeliveryNoteBookIdDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BookDeliveryNoteBookIdMapperDTO extends BaseMapper<BookDeliveryNoteBookId, BookDeliveryNoteBookIdDTO> {
}
