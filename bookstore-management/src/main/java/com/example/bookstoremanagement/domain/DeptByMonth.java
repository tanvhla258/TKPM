package com.example.bookstoremanagement.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.TreeMap;

@Entity
@Table(name = "dept_by_month")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder(toBuilder = true)
public class DeptByMonth {
    @EmbeddedId
    private DeptByMonthId id;
//    @JoinColumns({
//            @JoinColumn(name = "customer_id", referencedColumnName = "id", insertable = false, updatable = false)
//    })
    @ManyToOne
    @MapsId("customerId")
    @JsonIgnore
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

    public static TreeMap<Integer, DeptByMonth> getDeptByMonthAndPrevious(Set<DeptByMonth> dept, int month, int year){
        TreeMap<Integer, DeptByMonth> mapOf2Dept = new TreeMap<>();
        for(DeptByMonth i: dept){
            if(i.getId().getMonth() == month - 1 && i.getId().getYear() == year){
                mapOf2Dept.put(0, i);
            }
            if(i.getId().getMonth() == month && i.getId().getYear() == year){
                mapOf2Dept.put(1, i);
                return mapOf2Dept;
            }
        }
        return null;
    }
}
