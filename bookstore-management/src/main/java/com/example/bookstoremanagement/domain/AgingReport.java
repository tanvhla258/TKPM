package com.example.bookstoremanagement.domain;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AgingReport {
    private String customerName;
    private Double initialDept;
    private Double finalDept;
    private Double incurred;
}
