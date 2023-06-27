package com.example.bookstoremanagement.dto;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class InventoryByMonthDTO {
    private InventoryByMonthIdDTO id;
    private Integer quantity;
}
