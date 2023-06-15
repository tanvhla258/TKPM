package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.AgingReport;
import com.example.bookstoremanagement.domain.InventoryReport;

import java.util.List;

public class MonthlyReportServiceImpl implements MonthlyReportService{
    @Override
    public List<InventoryReport> fetchInventoryReportsByMonth(Integer month) {
        return null;
    }

    @Override
    public List<AgingReport> fetchAgingReportsByMonth(Integer month) {
        return null;
    }
}
