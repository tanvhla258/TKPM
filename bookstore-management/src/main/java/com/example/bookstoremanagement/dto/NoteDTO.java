package com.example.bookstoremanagement.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public abstract class NoteDTO {
    protected Long id;
    protected LocalDate creationDate;
}
