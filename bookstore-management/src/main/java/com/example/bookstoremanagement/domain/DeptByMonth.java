package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "dept_by_month")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DeptByMonth {
    @EmbeddedId
    private DeptByMonthId id;
    @JoinColumns({
            @JoinColumn(name = "customer_id", referencedColumnName = "id", insertable = false, updatable = false)
    })
    @OneToOne
    private Customer customer;
    @Column
    private Double dept;
}
