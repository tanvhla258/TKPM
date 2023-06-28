package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.DeptByMonth;
import com.example.bookstoremanagement.dto.DeptByMonthDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {DeptByMonthIdMapper.class})
public interface DeptByMonthMapper extends BaseMapper<DeptByMonth, DeptByMonthDTO> {
}
