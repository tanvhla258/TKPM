package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.DeptByMonthId;
import com.example.bookstoremanagement.dto.DeptByMonthIdDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DeptByMonthIdMapper extends BaseMapper<DeptByMonthId, DeptByMonthIdDTO> {
}
