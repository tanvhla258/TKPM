package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.Book;
import com.example.bookstoremanagement.domain.InventoryByMonth;
import com.example.bookstoremanagement.dto.BookDTO;
import com.example.bookstoremanagement.dto.InventoryByMonthDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;


@Mapper(componentModel = "spring", uses = {InventoryByMonthMapper.class})
public interface BookMapper extends BaseMapper<Book, BookDTO> {
    @Override
    @Mapping(target = "inventoryByMonthDTOSet", source = "inventoryByMonthSet")
    BookDTO toDto(Book entity);
}
