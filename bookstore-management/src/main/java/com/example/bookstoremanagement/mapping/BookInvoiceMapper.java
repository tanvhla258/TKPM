package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.BookInvoice;
import com.example.bookstoremanagement.dto.BookInvoiceDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BookInvoiceMapper extends BaseMapper<BookInvoice, BookInvoiceDTO> {

}
