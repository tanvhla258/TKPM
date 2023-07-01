package com.example.bookstoremanagement.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("bookId")
    @JoinColumn(name = "book_id")
    @JsonIgnore
    private Book book;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("invoiceId")
    @JsonIgnore
    @JoinColumn(name = "invoice_id")
    private Invoice invoice;
    @Column
    private Integer quantity;

    @Column(name = "unit_price")
    private Double unitPrice;

}
