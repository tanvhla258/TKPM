package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.DeptByMonth;
import com.example.bookstoremanagement.domain.ReceiptNote;
import com.example.bookstoremanagement.exception.ReceiptNoteNotFoundException;
import com.example.bookstoremanagement.repository.CustomerRepository;
import com.example.bookstoremanagement.repository.ReceiptNoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReceiptNoteServiceImpl implements ReceiptNoteService{
    private final ReceiptNoteRepository receiptNoteRepository;
    private final CustomerRepository customerRepository;
    @Override
    public Page<ReceiptNote> fetchReceiptNotesByPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return receiptNoteRepository.findAll(pageable);
    }

    @Override
    public List<ReceiptNote> getAll() {
        return null;
    }

    @Override
    public ReceiptNote addReceiptNote(ReceiptNote receiptNote) {
        List<DeptByMonth> deptByMonthOfCustomer = customerRepository
                .getDeptByMonthFromDate(receiptNote.getCustomer().getId(), receiptNote.getCreationDate());
        for(DeptByMonth month: deptByMonthOfCustomer){
            month.setDept(month.getDept() + receiptNote.getTotalCost());
        }
        return receiptNoteRepository.save(receiptNote);
    }

    @Override
    public ReceiptNote updateReceiptNote(Long id, ReceiptNote receiptNote) {
        ReceiptNote foundReceiptNote = getReceiptNoteById(id);
        List<DeptByMonth> foundDept = customerRepository
                .getDeptByMonthFromDate(foundReceiptNote.getCustomer().getId(), foundReceiptNote.getCreationDate());
        for(DeptByMonth month: foundDept){
            month.setDept(month.getDept() - foundReceiptNote.getTotalCost());
        }
        foundReceiptNote.setCustomer(receiptNote.getCustomer());
        foundReceiptNote.setCreationDate(receiptNote.getCreationDate());
        foundReceiptNote.setTotalCost(receiptNote.getTotalCost());
        List<DeptByMonth> newDepth = customerRepository
                .getDeptByMonthFromDate(receiptNote.getCustomer().getId(), receiptNote.getCreationDate());
        for(DeptByMonth month: newDepth){
            month.setDept(month.getDept() + receiptNote.getTotalCost());
        }
        return receiptNoteRepository.save(foundReceiptNote);
    }

    @Override
    public void deleteReceiptNote(Long id) {
        ReceiptNote foundReceiptNote = getReceiptNoteById(id);
        List<DeptByMonth> foundDept = customerRepository
                .getDeptByMonthFromDate(foundReceiptNote.getCustomer().getId(), foundReceiptNote.getCreationDate());
        for(DeptByMonth month: foundDept){
            month.setDept(month.getDept() - foundReceiptNote.getTotalCost());
        }
        receiptNoteRepository.delete(foundReceiptNote);
    }

    @Override
    public ReceiptNote getReceiptNoteById(Long id) {
        return receiptNoteRepository.findById(id).orElseThrow(() -> new ReceiptNoteNotFoundException("Receipt Note not found!"));
    }

}
