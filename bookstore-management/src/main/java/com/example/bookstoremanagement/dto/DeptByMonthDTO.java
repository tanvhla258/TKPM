package com.example.bookstoremanagement.dto;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class DeptByMonthDTO {
    private DeptByMonthIdDTO id;
    private Double dept;
}

