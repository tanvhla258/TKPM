package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "inventory_by_month")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class InventoryByMonth {
    @EmbeddedId
    private InventoryByMonthId id;
    @Column
    private Integer quantity;

//    @OneToMany
//    @JoinColumns({
//            @JoinColumn(name = "book_id", referencedColumnName = "id", insertable = false, updatable = false)
//    })
//    private Book book;
    @ManyToOne(fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @MapsId("bookId")
    @JoinColumn(name = "book_id")
    private Book book;

    public static Set<InventoryByMonth> filterByMonthYear(Set<InventoryByMonth> inventory, int fromMonth, int fromYear){
        Set<InventoryByMonth> filteredSet = new HashSet<>();
        LocalDate currentDate = LocalDate.now();
        int currentYear = currentDate.getYear();
        int currentMonth = currentDate.getMonthValue();

        for(InventoryByMonth i: inventory){
            if(i.getId().getYear() < currentYear || (i.getId().getYear() == currentYear && i.getId().getMonth() <= currentMonth)){
                if(i.getId().getYear() > fromYear || (i.getId().getYear() == fromYear && i.getId().getMonth() >= fromMonth)){
                    filteredSet.add(i);
                }
            }
        }
        return filteredSet;
    }
}
