package com.example.bookstoremanagement.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@PrimaryKeyJoinColumn(name = "note_id")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table (name = "invoices")
@Setter
@Getter
public class Invoice extends Note{
    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("customerId")
    @JoinColumn(name = "customer_id")
    @JsonIgnore
    private Customer customer;

    @OneToMany(mappedBy = "invoice", cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Set<BookInvoice> bookInvoices;
}
