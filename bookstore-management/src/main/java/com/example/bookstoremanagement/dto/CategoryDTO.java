package com.example.bookstoremanagement.dto;

import lombok.*;
import org.checkerframework.checker.units.qual.A;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class CategoryDTO {
    private Long id;
    private String name;
}
