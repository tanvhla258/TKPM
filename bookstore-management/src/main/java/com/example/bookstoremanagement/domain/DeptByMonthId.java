package com.example.bookstoremanagement.domain;


import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.checkerframework.checker.units.qual.C;

import java.io.Serializable;
import java.time.LocalDate;

@Embeddable
@Getter
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class DeptByMonthId implements Serializable {
    @Column(name = "month")
    private Integer month;
    @Column(name = "year")
    private Integer year;
    @Column(name = "customer_id")
    private Long customerId;
}
