package com.example.bookstoremanagement.config;

import com.example.bookstoremanagement.domain.DeptByMonth;
import com.example.bookstoremanagement.domain.InventoryByMonth;
import com.example.bookstoremanagement.repository.BookRepository;
import com.example.bookstoremanagement.repository.DeptByMonthRepository;
import com.example.bookstoremanagement.repository.InventoryByMonthRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Configuration
@EnableScheduling
@RequiredArgsConstructor
public class BookstoreConfig {
    private final Logger logger = LoggerFactory.getLogger(BookstoreConfig.class);
    private final InventoryByMonthRepository inventoryRepository;
    private final DeptByMonthRepository deptRepository;
    @Scheduled(cron = "0 0 0 1 * *")
    public void updateInventoryEveryMonth(){
        logger.info("Perform scheduling");
        updateNewMonthInventory();
        updateNewMonthDept();
    }

    private void updateNewMonthInventory(){
        LocalDate now = LocalDate.now();
        LocalDate earlier = now.minusMonths(1);
        int currentMonth  = now.getMonthValue();
        int currentYear = now.getYear();

        int earlierMonth = earlier.getMonthValue();
        int earlierYear = earlier.getYear();

        List<InventoryByMonth> inventories = inventoryRepository.getInventoriesByMonth(earlierMonth, earlierYear);
        List<InventoryByMonth> newMonthSet = new ArrayList<>();
        for(InventoryByMonth inventory: inventories){
            InventoryByMonth newInventory = inventory
                    .toBuilder()
                    .id(inventory.getId()
                            .toBuilder()
                            .month(currentMonth)
                            .year(currentYear)
                            .build())
                    .build();
            newMonthSet.add(newInventory);
        }
        inventoryRepository.saveAll(newMonthSet);
    }

    private void updateNewMonthDept(){
        LocalDate now = LocalDate.now();
        LocalDate earlier = now.minusMonths(1);
        int currentMonth  = now.getMonthValue();
        int currentYear = now.getYear();

        int earlierMonth = earlier.getMonthValue();
        int earlierYear = earlier.getYear();

        List<DeptByMonth> deptByMonths = deptRepository.getDeptByMonthsByMonth(earlierMonth, earlierYear);
        for(DeptByMonth dept: deptByMonths){
            DeptByMonth newDept = dept
                    .toBuilder()
                    .id(dept
                            .getId()
                            .toBuilder()
                            .month(currentMonth)
                            .year(currentYear)
                            .build())
                    .build();
            deptByMonths.add(dept);
        }

        deptRepository.saveAll(deptByMonths);
    }
}
