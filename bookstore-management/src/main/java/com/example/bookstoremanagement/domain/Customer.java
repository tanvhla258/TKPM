package com.example.bookstoremanagement.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.checkerframework.common.aliasing.qual.Unique;

import java.util.Set;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "customers")
public class Customer {
    @Id
    @SequenceGenerator(name = "customers_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "customers_seq")
    private Long id;
    @Column(name="fullname")
    private String fullName;
    @Column(name = "phone_number", unique = true)
    private String phoneNumber;
    @Column
    private String address;
    @Column
    private String email;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customer", fetch = FetchType.EAGER)
    private Set<DeptByMonth> dept;

    @OneToMany(mappedBy = "customer")
    private Set<Invoice> invoices;
}
