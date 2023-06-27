package com.example.bookstoremanagement.dto;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class BookDeliveryNoteBookIdDTO {
    private Long bookId;
    private Long note_id;
}
