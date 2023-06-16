package com.example.bookstoremanagement.dto;

import com.example.bookstoremanagement.domain.Note;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReceiptNoteDTO extends NoteDTO {
    private CustomerDTO customer;
    private Double totalCost;
}
