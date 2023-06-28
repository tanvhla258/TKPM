package com.example.bookstoremanagement.controller;

import com.example.bookstoremanagement.domain.ReceiptNote;
import com.example.bookstoremanagement.dto.ReceiptNoteDTO;
import com.example.bookstoremanagement.mapping.ReceiptNoteMapper;
import com.example.bookstoremanagement.response.Response;
import com.example.bookstoremanagement.response.ResponseAPI;
import com.example.bookstoremanagement.service.ReceiptNoteService;
import com.google.common.base.Preconditions;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;


@RestController
@RequestMapping("receipts")
@RequiredArgsConstructor
public class ReceiptNoteController {
    private static final String RECEIPT_DETAILS_MISSING_MSG = "Receipt's details must be specified";
    private static final String RECEIPT_ID_MISSING_MSG = "Receipt's id must be specified";
    private final ReceiptNoteService receiptNoteService;
    private final ReceiptNoteMapper receiptNoteMapper;
    @GetMapping("list")
    public Page<ReceiptNoteDTO> getReceiptNoteByPage(@RequestParam("page") int page,@RequestParam("size") int size){
        Page<ReceiptNote> receiptNotes = receiptNoteService.fetchReceiptNotesByPage(page, size);
        return new PageImpl<>(receiptNoteMapper.toDtoList(receiptNotes.getContent()), receiptNotes.getPageable(), receiptNotes.getTotalElements());
    }
    @PostMapping("add")
    public Response addReceiptNote(@RequestBody ReceiptNoteDTO receiptNoteDTO){
        Preconditions.checkState(Objects.nonNull(receiptNoteDTO), RECEIPT_DETAILS_MISSING_MSG);

        ReceiptNote receiptNote = receiptNoteMapper.toEntity(receiptNoteDTO);
        receiptNote = receiptNoteService.addReceiptNote(receiptNote);
        ReceiptNoteDTO receiptNoteDTO1 = receiptNoteMapper.toDto(receiptNote);
        return ResponseAPI.positiveResponse(receiptNoteDTO1);
    }
    @PutMapping("update")
    public Response updateReceiptNote(@RequestParam(value = "id") Long id,
                                      @RequestBody ReceiptNoteDTO receiptNoteDTO){
        Preconditions.checkState(Objects.nonNull(id), RECEIPT_ID_MISSING_MSG);
        Preconditions.checkState(Objects.nonNull(receiptNoteDTO), RECEIPT_DETAILS_MISSING_MSG);

        ReceiptNote receiptNote = receiptNoteMapper.toEntity(receiptNoteDTO);
        return ResponseAPI.positiveResponse(receiptNoteService.updateReceiptNote(id, receiptNote));
    }

    @DeleteMapping("remove/{id}")
    public Response removeReceiptNote(@PathVariable("id") Long id){
        Preconditions.checkState(Objects.nonNull(id), RECEIPT_ID_MISSING_MSG);
        receiptNoteService.deleteReceiptNote(id);
        return ResponseAPI.emptyPositiveResponse();
    }
}
