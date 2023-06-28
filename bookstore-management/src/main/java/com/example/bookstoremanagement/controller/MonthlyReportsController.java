package com.example.bookstoremanagement.controller;

import com.example.bookstoremanagement.domain.AgingReport;
import com.example.bookstoremanagement.domain.InventoryReport;
import com.example.bookstoremanagement.service.MonthlyReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("report")
@RequiredArgsConstructor
@CrossOrigin
public class MonthlyReportsController {
    private final MonthlyReportService service;

    @GetMapping("inventory")
    public List<InventoryReport> getInventoryReportMonth(@RequestParam("month") Integer month, @RequestParam("year") Integer year){
        return service.fetchInventoryReportsByMonth(month, year);
    }

    @GetMapping("aging")
    public List<AgingReport> getAgingReportByMonth(@RequestParam("month") Integer month, @RequestParam("year") Integer year){
        return service.fetchAgingReportsByMonth(month, year);
    }
}
