package com.example.bookstoremanagement.dto;

import com.example.bookstoremanagement.domain.BookDeliveryNoteBook;
import lombok.*;

import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class BookDeliveryNoteDTO extends NoteDTO {
    private String shipperName;
    private Set<BookDeliveryNoteBookDTO> deliveryNoteBooks;
}
