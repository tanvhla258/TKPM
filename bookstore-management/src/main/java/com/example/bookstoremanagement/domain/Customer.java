package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
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
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(name="fullname")
    private String fullName;
    @Column(name = "phone_number")
    private String phoneNumber;
    @Column
    private String address;
    @Column
    private String email;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "customer")
    private DeptByMonth dept;
}
