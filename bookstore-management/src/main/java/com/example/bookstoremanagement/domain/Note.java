package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "notes")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Note {
    @Id
    protected Long id;
    @Column(name="creation_name")
    protected LocalDate creationDate;
}
