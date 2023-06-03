package com.example.bookstoremanagement.dto;

import lombok.Data;

@Data
public class BookDeliveryNoteDTO extends NoteDTO {
    private String shipperName;
}
