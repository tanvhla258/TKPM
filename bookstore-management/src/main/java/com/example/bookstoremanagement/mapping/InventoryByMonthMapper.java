package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.InventoryByMonth;
import com.example.bookstoremanagement.dto.InventoryByMonthDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface InventoryByMonthMapper extends BaseMapper<InventoryByMonth, InventoryByMonthDTO> {
}
