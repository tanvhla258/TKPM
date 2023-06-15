package com.example.bookstoremanagement.controller;

import com.example.bookstoremanagement.dto.ReceiptNoteDTO;
import com.example.bookstoremanagement.response.Response;
import org.springframework.web.bind.annotation.*;

@RestController("receipt")
public class ReceiptNoteController {
    @PostMapping("add")
    public Response addReceiptNote(@RequestBody ReceiptNoteDTO receiptNoteDTO){
        return null;
    }
    @PutMapping("update")
    public Response updateReceiptNote(@RequestParam(value = "id") Long id,
                                      @RequestBody ReceiptNoteDTO receiptNoteDTO){
        return null;
    }

    @DeleteMapping("remove/{id}")
    public Response removeReceiptNote(@PathVariable("id") Long id){
        return null;
    }
}
