package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.InventoryByMonth;
import com.example.bookstoremanagement.dto.InventoryByMonthDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {InventoryByMonthIdMapper.class})
public interface InventoryByMonthMapper extends BaseMapper<InventoryByMonth, InventoryByMonthDTO> {
    @Override
    @Mapping(target = "id", source = "id")
    InventoryByMonthDTO toDto(InventoryByMonth entity);
}
