package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.Regulation;
import com.example.bookstoremanagement.dto.RegulationDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RegulationMapper extends BaseMapper<Regulation, RegulationDTO> {
}
