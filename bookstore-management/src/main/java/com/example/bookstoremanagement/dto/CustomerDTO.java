package com.example.bookstoremanagement.dto;

import lombok.Data;

@Data
public class CustomerDTO {
    private Long id;
    private String name;
    private String phoneNumber;
    private String address;
    private String email;
}
