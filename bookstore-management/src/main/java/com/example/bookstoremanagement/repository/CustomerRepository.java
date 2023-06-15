package com.example.bookstoremanagement.repository;

import com.example.bookstoremanagement.domain.Customer;
import com.example.bookstoremanagement.domain.DeptByMonth;
import jdk.jfr.Registered;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    @Query(value = "select * from dept_by_month as dbm" +
            "join customer as c on dbm.customer_id = c.id" +
            "where c.id = ?1 and dbm.year_month >= ?2", nativeQuery = true)
    List<DeptByMonth> getDeptByMonthFromDate(Long id, LocalDate from);
}
