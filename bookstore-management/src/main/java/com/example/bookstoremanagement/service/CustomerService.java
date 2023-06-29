package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.Customer;

import java.util.List;

public interface CustomerService {
    List<Customer> getAll();
    Customer addCustomer(Customer customer);
    Customer findCustomerByPhoneNumber(String phoneNumber);
}
