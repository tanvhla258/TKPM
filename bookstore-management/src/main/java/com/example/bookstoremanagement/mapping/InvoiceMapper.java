package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.Invoice;
import com.example.bookstoremanagement.dto.InvoiceDTO;
import org.mapstruct.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Named("InvoiceMapper")
@Mapper(componentModel = "spring", uses = {BookInvoiceMapper.class, NoteMapper.class, CustomerMapper.class, CategoryMapper.class, CustomerMapper.class})
public interface InvoiceMapper {

    @IterableMapping(elementTargetType = InvoiceDTO.class)
    default List<InvoiceDTO> toDtoList(List<Invoice> list){
        return list.stream().map(this::toDto).collect(Collectors.toList());
    }

    Invoice toEntity(InvoiceDTO dto);

    Set<InvoiceDTO> toDtoSet(Set<Invoice> set);

    Set<Invoice> toSet(Set<InvoiceDTO> set);

    List<Invoice> toList(List<InvoiceDTO> list);

    @Named("toDto")
    @Mappings({
            @Mapping(target = "bookInvoices", qualifiedByName = {"BookInvoiceSetIgnoreInvoice"})
    })
    InvoiceDTO toDto(Invoice entity);


    @Named("toDtoWithoutBookInvoices")
    @Mappings({
            @Mapping(target = "bookInvoices", ignore = true)
    })
    InvoiceDTO toDtoWithoutBookInvoices(Invoice entity);

}
