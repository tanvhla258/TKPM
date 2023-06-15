package com.example.bookstoremanagement.dto;

import com.example.bookstoremanagement.domain.BookDeliveryNoteBook;
import lombok.Data;

import java.util.Set;

@Data
public class BookDeliveryNoteDTO extends NoteDTO {
    private String shipperName;
    private Set<BookDeliveryNoteBookDTO> deliveryNoteBooks;
}
