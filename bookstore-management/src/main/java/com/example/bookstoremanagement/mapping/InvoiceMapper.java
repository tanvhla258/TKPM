package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.Invoice;
import com.example.bookstoremanagement.dto.InvoiceDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Named;

@Named("InvoiceMapper")
@Mapper(componentModel = "spring", uses = {BookInvoiceMapper.class, NoteMapper.class, CustomerMapper.class})
public interface InvoiceMapper extends BaseMapper<Invoice, InvoiceDTO> {
    @Override
    @Named("toDto")
    @Mappings({
            @Mapping(target = "bookInvoices", qualifiedByName = {"BookInvoiceMapper", "toDtoWithoutInvoice"})
    })
    InvoiceDTO toDto(Invoice entity);


    @Named("toDtoWithoutBookInvoices")
    @Mappings({
            @Mapping(target = "bookInvoices", ignore = true)
    })
    InvoiceDTO toDtoWithoutBookInvoices(Invoice entity);

}
