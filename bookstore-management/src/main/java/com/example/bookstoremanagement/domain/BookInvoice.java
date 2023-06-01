package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "book_invoice")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookInvoice {
    @EmbeddedId
    private BookInvoiceId id;

    @ManyToOne
    @MapsId("bookId")
    @JoinColumn(name = "book_id")
    private Book book;

    @ManyToOne
    @MapsId("invoiceId")
    @JoinColumn(name = "invoice_id")
    private Invoice invoice;

    @Column
    private Integer quantity;

    @Column(name = "unit_price")
    private Double unitPrice;
}
