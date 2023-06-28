package com.example.bookstoremanagement.dto;

import lombok.*;

import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class CustomerDTO {
    private Long id;
    private String fullName;
    private String phoneNumber;
    private String address;
    private String email;
    private Set<DeptByMonthDTO> dept;
}
