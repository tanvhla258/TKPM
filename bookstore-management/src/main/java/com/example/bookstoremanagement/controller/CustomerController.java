package com.example.bookstoremanagement.controller;

import com.example.bookstoremanagement.domain.Customer;
import com.example.bookstoremanagement.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("customers")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;
    @GetMapping("list/all")
    public List<Customer> getAll(){
        return customerService.getAll();
    }
}
