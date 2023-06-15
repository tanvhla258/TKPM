package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@PrimaryKeyJoinColumn(name = "note_id")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table (name = "invoices")
@Builder
@Setter
@Getter
public class Invoice extends Note{
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL)
    private Set<BookInvoice> bookInvoices;
}
