package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Table(name = "receipt_notes")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@PrimaryKeyJoinColumn(name = "note_id")
public class ReceiptNote extends Note {

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
    @Column(name = "total_cost")
    private Double totalCost;
}
