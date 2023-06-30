package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.BookInvoice;
import com.example.bookstoremanagement.dto.BookInvoiceDTO;
import org.mapstruct.*;

import java.util.Set;

@Named("BookInvoiceMapper")
@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = {InvoiceMapper.class})
public interface BookInvoiceMapper extends BaseMapper<BookInvoice, BookInvoiceDTO> {
    @Override
    @Named("toDto")
    @Mappings({

    })
    BookInvoiceDTO toDto(BookInvoice entity);

    @Named("toDtoWithoutInvoice")
    @Mappings({
            @Mapping(target = "invoice", ignore = true)
    })
    BookInvoiceDTO toDtoWithoutInvoice(BookInvoice entity);

    @Override
    Set<BookInvoiceDTO> toDtoSet(Set<BookInvoice> set);

    @Named("BookInvoiceSetIgnoreInvoice")
    @IterableMapping(qualifiedByName = "toDtoWithoutInvoice")
    Set<BookInvoiceDTO> toDtoSetWithoutInvoice(Set<BookInvoice> set);
}
