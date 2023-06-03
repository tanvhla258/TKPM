package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table
@PrimaryKeyJoinColumn(name = "note_id")
@AllArgsConstructor
@NoArgsConstructor
public class BookDeliveryNote extends Note {
    @Column(name = "shipper_name")
    private String shipperName;
}
