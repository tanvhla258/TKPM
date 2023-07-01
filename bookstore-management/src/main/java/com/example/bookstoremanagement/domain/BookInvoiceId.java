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
    private Long bookId;
    private Long invoiceId;

    public BookInvoiceId(Long bookId){
        this.bookId = bookId;
    }

    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
