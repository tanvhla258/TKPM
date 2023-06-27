package com.example.bookstoremanagement.dto;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class BookInvoiceIdDTO {
    private Long bookId;
    private Long invoiceId;
}
