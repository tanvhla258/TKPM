package com.example.bookstoremanagement.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReceiptNoteDTO {
    private CustomerDTO customer;
    private Double totalCost;
}
