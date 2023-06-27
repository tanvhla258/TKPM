package com.example.bookstoremanagement.repository;

import com.example.bookstoremanagement.domain.DeptByMonth;
import com.example.bookstoremanagement.domain.DeptByMonthId;
import com.example.bookstoremanagement.domain.InventoryByMonth;
import com.example.bookstoremanagement.domain.InventoryByMonthId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DeptByMonthRepository extends JpaRepository<DeptByMonth, DeptByMonthId> {

    @Query(value = "select * from dept_by_month" +
            "where month = ?1" +
            "and year = ?2", nativeQuery = true)
    List<DeptByMonth> getDeptByMonthsByMonth(int month, int year);
}
