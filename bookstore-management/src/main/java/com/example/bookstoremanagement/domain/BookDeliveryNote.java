package com.example.bookstoremanagement.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "book_delivery_notes")
@PrimaryKeyJoinColumn(name = "note_id")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class BookDeliveryNote extends Note {
    @Column(name = "shipper_name")
    private String shipperName;
    @OneToMany(mappedBy = "deliveryNote", cascade = CascadeType.ALL)
    private Set<BookDeliveryNoteBook> deliveryNoteBooks;
}
