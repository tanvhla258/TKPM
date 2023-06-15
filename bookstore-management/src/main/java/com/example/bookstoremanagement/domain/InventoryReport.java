package com.example.bookstoremanagement.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InventoryReport {
    private String title;
    private Integer beginningInventory;
    private Integer endingInventory;
    private Integer incurred;
}
