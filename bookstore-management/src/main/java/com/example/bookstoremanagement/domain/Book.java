package com.example.bookstoremanagement.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "books")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Book {
    @Id
    @SequenceGenerator(name = "customers_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column
    private String title;
    @JoinColumn(name = "category_id")
    @ManyToOne
    private Category category;
    @Column
    private String author;
    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<InventoryByMonth> inventoryByMonthSet;
//    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.MERGE}, mappedBy = "books")
//    @JsonIgnore
//    private Set<BookDeliveryNote> deliveryNotes = new HashSet<>();
    @OneToMany(mappedBy = "book")
    private Set<BookDeliveryNoteBook> deliveryNoteBooks;
    @OneToMany(mappedBy = "book")
    private Set<BookInvoice> bookInvoices;
}
