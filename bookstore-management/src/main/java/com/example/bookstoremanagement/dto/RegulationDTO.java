package com.example.bookstoremanagement.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegulationDTO {
    private Long id;
    private String title;
    private Integer value;
}
