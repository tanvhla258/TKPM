package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.ReceiptNote;
import com.example.bookstoremanagement.dto.ReceiptNoteDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReceiptNoteMapper extends BaseMapper<ReceiptNote, ReceiptNoteDTO> {
}
