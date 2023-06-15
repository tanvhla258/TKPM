package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column
    private String name;
}
