package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.Customer;
import com.example.bookstoremanagement.dto.CustomerDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CustomerMapper extends BaseMapper<Customer, CustomerDTO> {
}
