package com.example.bookstoremanagement.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
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
//    private Long customerId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
//    @MapsId("customerId")
    @JsonIgnore
    private Customer customer;

    @OneToMany(mappedBy = "invoice", cascade = {CascadeType.REMOVE, CascadeType.MERGE}, fetch = FetchType.EAGER)
    private Set<BookInvoice> bookInvoices;

}
