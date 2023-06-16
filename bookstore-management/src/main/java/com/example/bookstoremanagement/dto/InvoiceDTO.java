package com.example.bookstoremanagement.dto;

import com.example.bookstoremanagement.domain.BookInvoice;
import com.example.bookstoremanagement.domain.Customer;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InvoiceDTO extends NoteDTO{
    private CustomerDTO customer;
    private Set<BookInvoiceDTO> bookInvoiceSet;
}
