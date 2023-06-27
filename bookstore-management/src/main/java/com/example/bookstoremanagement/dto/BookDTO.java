package com.example.bookstoremanagement.dto;

import com.example.bookstoremanagement.domain.InventoryByMonth;
import lombok.*;

import javax.validation.constraints.NotNull;
import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class BookDTO {
    @NotNull(message = "Book's id cannot be null")
    private Long id;
    @NotNull(message = "Book's title cannot be null")
    private String title;
    @NotNull(message = "Book's category cannot be null")
    private CategoryDTO category;
    @NotNull(message = "Book's author cannot be null")
    private String author;
    @NotNull(message = "Book's quantity cannot be null")
    private Set<InventoryByMonthDTO> inventoryByMonthDTOSet;
}
