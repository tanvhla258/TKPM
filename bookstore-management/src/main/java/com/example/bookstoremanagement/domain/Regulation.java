package com.example.bookstoremanagement.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Table(name = "regulations")
@Builder
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Regulation{
    @Id
    private Long id;
    private String title;
    private Integer value;
}
