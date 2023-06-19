package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.Customer;
import com.example.bookstoremanagement.domain.DeptByMonth;
import com.example.bookstoremanagement.domain.ReceiptNote;
import com.example.bookstoremanagement.exception.CustomerNotFoundException;
import com.example.bookstoremanagement.exception.ReceiptNoteNotFoundException;
import com.example.bookstoremanagement.repository.CustomerRepository;
import com.example.bookstoremanagement.repository.ReceiptNoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
        //TODO: subtract dept for customer from note's creation date
        subtractCustomerDept(receiptNote);
        //TODO: save receipt note
        saveReceiptNote(receiptNote);
        return receiptNoteRepository.save(receiptNote);
    }

    private void subtractCustomerDept(ReceiptNote receiptNote){
        LocalDate creationDate = receiptNote.getCreationDate();
        int fromMonth = creationDate.getMonthValue();
        int fromYear = creationDate.getYear();
        Customer customer = customerRepository.findById(receiptNote.getCustomer().getId())
                .orElseThrow(() -> new CustomerNotFoundException("Customer not found"));
        Set<DeptByMonth> deptByMonthSet = DeptByMonth.filterByMonthYear(customer.getDept(), fromMonth, fromYear);
        deptByMonthSet.forEach(i -> {
            i.setDept(i.getDept() - receiptNote.getTotalCost());
        });
        customerRepository.save(customer);
    }

    private void revertCustomerDept(ReceiptNote receiptNote){
        LocalDate creationDate = receiptNote.getCreationDate();
        int fromMonth = creationDate.getMonthValue();
        int fromYear = creationDate.getYear();
        Customer customer = customerRepository.findById(receiptNote.getCustomer().getId())
                .orElseThrow(() -> new CustomerNotFoundException("Customer not found"));
        Set<DeptByMonth> deptByMonthSet = DeptByMonth.filterByMonthYear(customer.getDept(), fromMonth, fromYear);
        deptByMonthSet.forEach(i -> {
            i.setDept(i.getDept() + receiptNote.getTotalCost());
        });
        customerRepository.save(customer);
    }


    private ReceiptNote saveReceiptNote(ReceiptNote receiptNote){
        return receiptNoteRepository.save(receiptNote);
    }

    @Override
    public ReceiptNote updateReceiptNote(Long id, ReceiptNote receiptNote) {
        //first initializing
        ReceiptNote foundReceiptNote = getReceiptNoteById(id);
        revertCustomerDept(foundReceiptNote);
        //update creation date
        foundReceiptNote.setCreationDate(receiptNote.getCreationDate());
        //update customer
        foundReceiptNote.setCustomer(receiptNote.getCustomer());
        //update total cost
        subtractCustomerDept(receiptNote);
        return receiptNoteRepository.save(foundReceiptNote);
    }

    @Override
    public void deleteReceiptNote(Long id) {
        ReceiptNote foundReceiptNote = getReceiptNoteById(id);
        revertCustomerDept(foundReceiptNote);
        receiptNoteRepository.delete(foundReceiptNote);
    }

    @Override
    public ReceiptNote getReceiptNoteById(Long id) {
        return receiptNoteRepository.findById(id).orElseThrow(() -> new ReceiptNoteNotFoundException("Receipt Note not found!"));
    }

}
