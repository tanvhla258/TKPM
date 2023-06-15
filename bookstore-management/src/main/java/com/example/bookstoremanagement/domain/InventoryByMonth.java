package com.example.bookstoremanagement.domain;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

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
}
