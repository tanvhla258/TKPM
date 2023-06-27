package com.example.bookstoremanagement.dto;

import com.example.bookstoremanagement.domain.BookInvoice;
import com.example.bookstoremanagement.domain.Customer;
import lombok.*;

import java.time.LocalDate;
import java.util.Set;
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class InvoiceDTO extends NoteDTO{
    private CustomerDTO customer;
    private Set<BookInvoiceDTO> bookInvoices;
}
