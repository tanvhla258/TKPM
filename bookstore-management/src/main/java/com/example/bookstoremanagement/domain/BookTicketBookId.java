package com.example.bookstoremanagement.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Embeddable
@AllArgsConstructor
@NoArgsConstructor
public class BookTicketBookId implements Serializable {
    @Column
    private Long bookId;
    @Column
    private Long ticketId;
}
