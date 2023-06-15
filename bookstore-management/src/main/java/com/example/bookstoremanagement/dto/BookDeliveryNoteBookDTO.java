package com.example.bookstoremanagement.dto;

import com.example.bookstoremanagement.domain.BookDeliveryNoteBook;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookDeliveryNoteBookDTO {
    private BookDeliveryNoteBookIdDTO id;
//    private BookDeliveryNoteDTO deliveryNote;
    private BookDTO book;
    private Integer quantity;
}
