package com.example.bookstoremanagement.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "customers")
public class Customer {
    @Id
    private Long id;
    @Column(name="fullname")
    private String fullName;
    @Column(name = "phone_number")
    private String phoneNumber;
    @Column
    private String address;
    @Column
    private String email;
    @Column
    private Double dept;
}
