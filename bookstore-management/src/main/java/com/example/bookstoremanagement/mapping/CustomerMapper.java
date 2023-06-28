package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.Customer;
import com.example.bookstoremanagement.domain.DeptByMonth;
import com.example.bookstoremanagement.dto.CustomerDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {DeptByMonthMapper.class})
public interface CustomerMapper extends BaseMapper<Customer, CustomerDTO> {
}
