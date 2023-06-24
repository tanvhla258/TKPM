package com.example.bookstoremanagement.controller;

import com.example.bookstoremanagement.domain.AgingReport;
import com.example.bookstoremanagement.domain.InventoryReport;
import com.example.bookstoremanagement.service.MonthlyReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("report")
@RequiredArgsConstructor
public class MonthlyReportsController {
    private final MonthlyReportService service;

    @GetMapping("inventory")
    public List<InventoryReport> getInventoryReportyMonth(@RequestParam("month") Integer month, @RequestParam("yeaR") Integer year){
        return service.fetchInventoryReportsByMonth(month, year);
    }

    @GetMapping("aging")
    public List<AgingReport> getAgingReportByMonth(@RequestParam("month") Integer month, @RequestParam("yeaR") Integer year){
        return service.fetchAgingReportsByMonth(month, year);
    }
}
