package com.example.bookstoremanagement.dto;

import lombok.*;

import java.time.LocalDate;

@Data
public abstract class NoteDTO {
    protected Long id;
    protected LocalDate creationDate;
}
