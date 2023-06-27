package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.Invoice;
import com.example.bookstoremanagement.dto.InvoiceDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {BookInvoiceMapper.class, NoteMapper.class})
public interface InvoiceMapper extends BaseMapper<Invoice, InvoiceDTO> {
}
