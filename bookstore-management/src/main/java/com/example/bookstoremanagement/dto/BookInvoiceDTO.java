package com.example.bookstoremanagement.dto;

import com.example.bookstoremanagement.domain.BookInvoiceId;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class BookInvoiceDTO { //childer
    private BookInvoiceIdDTO id;
    private InvoiceDTO invoice;
    private BookDTO book;
    private Integer quantity;
    private Double unitPrice;
}
