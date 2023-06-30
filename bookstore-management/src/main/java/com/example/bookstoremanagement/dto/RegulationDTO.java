package com.example.bookstoremanagement.dto;

import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class RegulationDTO {
    private Long id;
    private String title;
    private Integer value;
}
