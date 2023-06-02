package com.example.bookstoremanagement.domain;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BockTicketBook {

    @EmbeddedId
    private BookTicketBookId id;
    @ManyToOne
    @MapsId("ticketId")
    @JoinColumn(name = "ticket_id")
    private Ticket ticket;
    @ManyToOne
    @MapsId("bookId")
    @JoinColumn(name = "book_id")
    private Book book;
    @Column
    private Integer quantity;
}
