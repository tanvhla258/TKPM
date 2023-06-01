package com.example.bookstoremanagement.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table
@Builder
public class Invoice {
    @Id
    private Long id;
    @Column(name = "customer_id")
    private Long customerId;
    @Column(name = "creation_date")
    private LocalDateTime creationDate;
}
