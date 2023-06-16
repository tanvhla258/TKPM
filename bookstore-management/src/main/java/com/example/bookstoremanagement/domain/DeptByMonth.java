package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "dept_by_month")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class DeptByMonth {
    @EmbeddedId
    private DeptByMonthId id;
//    @JoinColumns({
//            @JoinColumn(name = "customer_id", referencedColumnName = "id", insertable = false, updatable = false)
//    })
    @ManyToOne
    @MapsId("customerId")
    @JoinColumn(name = "customer_id")
    private Customer customer;
    @Column
    private Double dept;

    public static Set<DeptByMonth> filterByMonthYear(Set<DeptByMonth> deptByMonthSet, int fromMonth, int fromYear){
        Set<DeptByMonth> filteredSet = new HashSet<>();
        LocalDate currentDate = LocalDate.now();
        int currentYear = currentDate.getYear();
        int currentMonth = currentDate.getMonthValue();

        for(DeptByMonth i: deptByMonthSet){
            if(i.getId().getYear() < currentYear || (i.getId().getYear() == currentYear && i.getId().getMonth() <= currentMonth)){
                if(i.getId().getYear() > fromYear || (i.getId().getYear() == fromYear && i.getId().getMonth() >= fromMonth)){
                    filteredSet.add(i);
                }
            }
        }
        return filteredSet;
    }
}
