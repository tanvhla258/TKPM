package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.Category;
import com.example.bookstoremanagement.dto.CategoryDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CategoryMapper extends BaseMapper<Category, CategoryDTO> {
}
