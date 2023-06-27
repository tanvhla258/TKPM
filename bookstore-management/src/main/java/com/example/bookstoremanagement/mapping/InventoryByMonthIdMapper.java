package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.InventoryByMonthId;
import com.example.bookstoremanagement.dto.InventoryByMonthIdDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface InventoryByMonthIdMapper extends BaseMapper<InventoryByMonthId, InventoryByMonthIdDTO> {
}
