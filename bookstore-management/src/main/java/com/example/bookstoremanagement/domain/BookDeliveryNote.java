package com.example.bookstoremanagement.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

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
    @OneToMany(mappedBy = "deliveryNote", cascade = {CascadeType.MERGE, CascadeType.REMOVE, CascadeType.PERSIST}, fetch = FetchType.EAGER)
    private Set<BookDeliveryNoteBook> deliveryNoteBooks;
}
