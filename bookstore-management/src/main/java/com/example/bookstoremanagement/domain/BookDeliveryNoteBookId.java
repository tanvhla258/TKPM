package com.example.bookstoremanagement.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BookDeliveryNoteBookId implements Serializable {
    @Column
    private Long bookId;
    @Column
    private Long noteId;
}
