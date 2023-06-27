package com.example.bookstoremanagement.dto;

import com.example.bookstoremanagement.domain.Book;
import lombok.*;

import java.time.LocalDate;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class InventoryByMonthIdDTO {
    private Long bookId;
    private Integer year;
    private Integer month;
}
