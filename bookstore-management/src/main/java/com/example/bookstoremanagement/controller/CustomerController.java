package com.example.bookstoremanagement.controller;

import com.example.bookstoremanagement.domain.Book;
import com.example.bookstoremanagement.domain.Customer;
import com.example.bookstoremanagement.dto.BookDTO;
import com.example.bookstoremanagement.dto.CustomerDTO;
import com.example.bookstoremanagement.mapping.CustomerMapper;
import com.example.bookstoremanagement.response.Response;
import com.example.bookstoremanagement.response.ResponseAPI;
import com.example.bookstoremanagement.service.CustomerService;
import com.google.common.base.Preconditions;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("customers")
@RequiredArgsConstructor
@CrossOrigin
public class CustomerController {

    private final CustomerService customerService;
    private final CustomerMapper customerMapper;
    private final String CUSTOMER_DETAILS_MISSING_MSG = "Customer's detail must be specified";
    @GetMapping("list/all")
    public List<Customer> getAll(){
        return customerService.getAll();
    }

    @PostMapping("add")
    public Response addCustomer(@RequestBody CustomerDTO customerDTO){
        Preconditions.checkState(Objects.nonNull(customerDTO), CUSTOMER_DETAILS_MISSING_MSG);
        Customer customer = customerMapper.toEntity(customerDTO);
        return ResponseAPI.positiveResponse(customerService.addCustomer(customer));
    }

    @GetMapping("search")
    public Customer findCustomerByPhoneNumber(@RequestParam String phoneNumber){
        return customerService.findCustomerByPhoneNumber(phoneNumber);
    }
}
