package com.example.bookstoremanagement.controller;

import com.example.bookstoremanagement.domain.BookDeliveryNote;
import com.example.bookstoremanagement.domain.Invoice;
import com.example.bookstoremanagement.dto.InvoiceDTO;
import com.example.bookstoremanagement.mapping.InvoiceMapper;
import com.example.bookstoremanagement.response.Response;
import com.example.bookstoremanagement.response.ResponseAPI;
import com.example.bookstoremanagement.service.InvoiceService;
import com.google.common.base.Preconditions;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequiredArgsConstructor
@RequestMapping("invoices")
public class InvoiceController {
    private static final String INVOICE_DETAILS_MISSING_MSG = "Invoice's details must be specified";
    private static final String INVOICE_ID_MISSING_MSG = "Invoice's id must be specified";
    private final InvoiceService invoiceService;
    private final InvoiceMapper invoiceMapper;

    @GetMapping("list")
    public Page<InvoiceDTO> getInvoicesByPage(@RequestParam("page") int page,
                                              @RequestParam("size") int size){
        Page<Invoice> invoices = invoiceService.fetchInvoicesByPage(page, size);
        return new PageImpl<>(invoiceMapper.toDtoList(invoices.getContent()), invoices.getPageable(), invoices.getTotalElements());
    }

    @PostMapping("add")
    public Response addInvoice(@RequestBody InvoiceDTO invoiceDTO){
        //Check precision state
        Preconditions.checkState(Objects.nonNull(invoiceDTO), INVOICE_DETAILS_MISSING_MSG);

        Invoice invoice = invoiceMapper.toEntity(invoiceDTO);
        return ResponseAPI.positiveResponse(invoiceMapper.toDto(invoiceService.addInvoice(invoice)));
    }

    @PostMapping("update")
    public Response updateInvoice(@RequestParam Long id, @RequestBody InvoiceDTO invoiceDTO){
        //Check precision state
        Preconditions.checkState(Objects.nonNull(id), INVOICE_ID_MISSING_MSG);
        Preconditions.checkState(Objects.nonNull(invoiceDTO), INVOICE_DETAILS_MISSING_MSG);

        Invoice invoice = invoiceMapper.toEntity(invoiceDTO);
        return ResponseAPI.positiveResponse(invoiceService.updateInvoice(id, invoice));
    }

    @PutMapping("remove/{id}")
    public Response removeInvoice(@PathVariable("id") Long id){
        //Check precision state
        Preconditions.checkState(Objects.nonNull(id), INVOICE_ID_MISSING_MSG);

        invoiceService.deleteInvoice(id);
        return ResponseAPI.emptyPositiveResponse();
    }
}
