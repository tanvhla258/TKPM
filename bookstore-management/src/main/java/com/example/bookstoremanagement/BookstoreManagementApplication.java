package com.example.bookstoremanagement;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@SpringBootApplication
//@EnableScheduling
public class BookstoreManagementApplication {
    Logger logger = LoggerFactory.getLogger(BookstoreManagementApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(BookstoreManagementApplication.class, args);
    }
//    @Scheduled(cron = "*/2 * * * * *")
//    public void updateInventoryEveryMonth(){
//        logger.info("Perform scheduling");
//    }
}
