package com.example.bookstoremanagement.dto;

import com.example.bookstoremanagement.domain.Note;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class ReceiptNoteDTO extends NoteDTO {
    private CustomerDTO customer;
    private Double totalCost;
}
