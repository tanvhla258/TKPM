package com.example.bookstoremanagement.dto;

import com.example.bookstoremanagement.domain.BookDeliveryNoteBook;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class BookDeliveryNoteBookDTO {
    private BookDeliveryNoteBookIdDTO id;
//    private BookDeliveryNoteDTO deliveryNote;
    private BookDTO book;
    private Integer quantity;
}
