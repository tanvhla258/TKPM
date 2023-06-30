package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
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
    @SequenceGenerator(name = "regulations_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "regulations_seq")
    private Long id;
    private String title;
    private Integer value;
}
