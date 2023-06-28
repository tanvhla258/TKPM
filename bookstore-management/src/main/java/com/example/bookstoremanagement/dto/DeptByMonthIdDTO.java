package com.example.bookstoremanagement.dto;

import jakarta.persistence.Column;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class DeptByMonthIdDTO {
    private Integer month;
    private Integer year;
    private Long customerId;
}
