package com.example.bookstoremanagement.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Embeddable
@AllArgsConstructor
@NoArgsConstructor
public class BookInvoiceId implements Serializable {
    @Column(name = "book_id")
    private Long bookId;
    @Column(name = "invoice_id")
    private Long invoiceId;
}
