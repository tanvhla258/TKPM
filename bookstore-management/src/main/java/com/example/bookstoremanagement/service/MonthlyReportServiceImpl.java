package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.*;
import com.example.bookstoremanagement.repository.BookRepository;
import com.example.bookstoremanagement.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.TreeMap;

@Service
@RequiredArgsConstructor
public class MonthlyReportServiceImpl implements MonthlyReportService{
    private final CustomerRepository customerRepository;
    private final BookRepository bookRepository;

    @Override
    public List<InventoryReport> fetchInventoryReportsByMonth(Integer month, Integer year) {
        List<InventoryReport> reports = new ArrayList<>();
        List<Book> books = bookRepository.findAll();
        for(Book book: books){
            TreeMap<Integer, InventoryByMonth> map =
                    InventoryByMonth.getInventoryByMonthAndPrevious(book.getInventoryByMonthSet(), month, year);
            if(map == null){
                continue;
            }
            int beginningInventory = 0;
            int endingInventory = map.get(1).getQuantity();
            if(map.get(0) != null){
                beginningInventory = map.get(0).getQuantity();
            }
            InventoryReport inventoryReport = InventoryReport
                    .builder()
                    .title(book.getTitle())
                    .beginningInventory(beginningInventory)
                    .endingInventory(endingInventory)
                    .incurred(endingInventory - beginningInventory)
                    .build();
            reports.add(inventoryReport);
        }
        return reports;
    }

    @Override
    public List<AgingReport> fetchAgingReportsByMonth(Integer month, Integer year) {
        List<AgingReport> reports = new ArrayList<>();
        List<Customer> customers = customerRepository.findAll();
        for(Customer customer: customers){
            if(customer.getId() == 11){
                int a = 1;
            }
            TreeMap<Integer, DeptByMonth> map =
                    DeptByMonth.getDeptByMonthAndPrevious(customer.getDept(), month, year);
            if(map == null){
                continue;
            }
            double initialDept = 0;
            Double finalDept = map.get(1).getDept();
            if(map.get(0) != null){
                initialDept = map.get(0).getDept();
            }
            AgingReport agingReport = AgingReport
                    .builder()
                    .customerName(customer.getFullName())
                    .initialDept(initialDept)
                    .finalDept(finalDept)
                    .incurred(finalDept - initialDept)
                    .build();
            reports.add(agingReport);
        }
        return reports;
    }
}
