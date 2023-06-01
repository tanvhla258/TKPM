package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "book_ticket")
@PrimaryKeyJoinColumn(name = "ticket_id")
@AllArgsConstructor
@NoArgsConstructor
public class BookTicket extends Ticket{
    @Column(name = "shipper_name")
    private String shipperName;
}
