package com.example.bookstoremanagement.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
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
    @Column
    private Long customerId;
    @Column(name = "total_cost")
    private Double totalCost;
}
