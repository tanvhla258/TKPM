package com.example.bookstoremanagement.repository;

import com.example.bookstoremanagement.domain.Customer;
import com.example.bookstoremanagement.domain.DeptByMonth;
import jdk.jfr.Registered;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    @Query(value = "select * from dept_by_month as dbm" +
            "join customer as c on dbm.customer_id = c.id" +
            "where c.id = ?1 and dbm.month >= ?2 and dbm.year >= ?3", nativeQuery = true)
    Set<DeptByMonth> getDeptByMonthFromDate(Long id, Integer fromMonth, Integer fromYear);
}
