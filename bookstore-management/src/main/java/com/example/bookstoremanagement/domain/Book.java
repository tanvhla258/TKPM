package com.example.bookstoremanagement.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "books")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column
    private String title;
    @JoinColumn(name = "category_id")
    @ManyToOne
    private Category category;
//    @Column
//    private String category;
    @Column
    private String author;
    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
    private Set<InventoryByMonth> inventoryByMonthSet;
//    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.MERGE}, mappedBy = "books")
//    @JsonIgnore
//    private Set<BookDeliveryNote> deliveryNotes = new HashSet<>();
    @OneToMany(mappedBy = "book")
    private Set<BookDeliveryNoteBook> deliveryNoteBooks;
    @OneToMany(mappedBy = "book")
    private Set<BookInvoice> bookInvoices;
}
