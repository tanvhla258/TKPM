package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "notes")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    protected Long id;
    @Column(name="creation_date")
    protected LocalDate creationDate;
}
