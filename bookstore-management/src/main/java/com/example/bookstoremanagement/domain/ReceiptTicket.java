package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Table(name = "receipt_ticket")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@PrimaryKeyJoinColumn(name = "ticket_id")
public class ReceiptTicket extends Ticket{

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
    @Column(name = "total_cost")
    private Double totalCost;
}
