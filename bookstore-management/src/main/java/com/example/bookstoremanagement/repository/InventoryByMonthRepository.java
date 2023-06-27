package com.example.bookstoremanagement.repository;

import com.example.bookstoremanagement.domain.InventoryByMonth;
import com.example.bookstoremanagement.domain.InventoryByMonthId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InventoryByMonthRepository extends JpaRepository<InventoryByMonth, InventoryByMonthId> {

    @Query(value = "select * from inventory_by_month " +
            "where month = ?1 and year = ?2", nativeQuery = true)
    List<InventoryByMonth> getInventoriesByMonth(int month, int year);
}
