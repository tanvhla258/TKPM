package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.AgingReport;
import com.example.bookstoremanagement.domain.InventoryReport;

import java.util.List;

public interface MonthlyReportService {
    List<InventoryReport> fetchInventoryReportsByMonth(Integer month);
    List<AgingReport> fetchAgingReportsByMonth(Integer month);
}
