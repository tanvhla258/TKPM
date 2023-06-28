package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.*;
import com.example.bookstoremanagement.exception.BookNotFoundException;
import com.example.bookstoremanagement.exception.CustomerNotFoundException;
import com.example.bookstoremanagement.exception.InvoiceNotFoundException;
import com.example.bookstoremanagement.repository.BookRepository;
import com.example.bookstoremanagement.repository.CustomerRepository;
import com.example.bookstoremanagement.repository.InvoiceRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Slf4j
@Service
@RequiredArgsConstructor
public class InvoiceServiceImpl implements InvoiceService{
    private final InvoiceRepository invoiceRepository;
    private final BookRepository bookRepository;
    private final CustomerRepository customerRepository;
    @Override
    public Page<Invoice> fetchInvoicesByPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return invoiceRepository.findAll(pageable);
    }

    @Override
    public List<Invoice> getAll() {
        return null;
    }

    @Override
    public Invoice addInvoice(Invoice invoice) {
        Customer customer = invoice.getCustomer();
        LocalDate current = LocalDate.now();
        Set<DeptByMonth> dept = new HashSet<>();
        dept.add(DeptByMonth
                .builder()
                .dept(0D)
                .customer(customer)
                .id(DeptByMonthId
                        .builder()
                        .month(current.getMonthValue())
                        .year(current.getYear())
                        .build())
                .build());
        customer.setDept(dept);
        customer = customerRepository.save(customer);
        invoice.setCustomer(customer);
        for(BookInvoice bookInvoice: invoice.getBookInvoices()){
            bookInvoice.setInvoice(invoice);
            bookInvoice.setId(new BookInvoiceId(bookInvoice.getBook().getId()));
        }
        invoice = invoiceRepository.save(invoice);
//        for(BookInvoice bookInvoice: invoice.getBookInvoices()){
//            bookInvoice.getId().setInvoiceId(invoice.getId());
//        }
        Double totalCost = calculateTotalCost(invoice);
        subtractAndSaveBookQuantity(invoice);
        saveDeptByMonthForCustomer(invoice, totalCost);
        return saveInvoice(invoice);
    }

    //Calculate total cost
    private Double calculateTotalCost(Invoice invoice){
        double totalCost = 0;
        for(BookInvoice bookInvoice: invoice.getBookInvoices()){
            totalCost += bookInvoice.getUnitPrice() * bookInvoice.getQuantity();
        }
        return totalCost;
    }
    //Subtract quantity in inventory the month it takes
    private void subtractAndSaveBookQuantity(Invoice invoice){
        int fromMonth = invoice.getCreationDate().getMonthValue();
        int fromYear = invoice.getCreationDate().getYear();
        for(BookInvoice bookInvoice: invoice.getBookInvoices()){
            Book book = bookInvoice.getBook();

            ///
            book = bookRepository.findById(book.getId()).orElseThrow(()->new BookNotFoundException("Book not found!"));
            ///

            Set<InventoryByMonth> filtedSet =
                    InventoryByMonth.filterByMonthYear(book.getInventoryByMonthSet(), fromMonth, fromYear);
            filtedSet.forEach(i -> {
                i.setQuantity(i.getQuantity() - bookInvoice.getQuantity());
            });
            bookRepository.save(book);
        }
    }
    //Save depth by month for customer
    private void saveDeptByMonthForCustomer(Invoice invoice, Double totalCost){
        Customer customer = invoice.getCustomer();
        LocalDate creationDate = invoice.getCreationDate();
        int fromMonth = creationDate.getMonthValue();
        int fromYear = creationDate.getYear();
        LocalDate currentDate = LocalDate.now();
        int toMonth = currentDate.getMonthValue();
        int toYear = currentDate.getYear();
        if(customer.getId() == null){
            //insert new customer
            customer = customerRepository.save(customer);
//            customer.setDept(new HashSet<>());
            Set<DeptByMonth> deptByMonthSet = new HashSet<>();
            while (fromYear < toYear || (fromYear == toYear && fromMonth <= toMonth)){
                DeptByMonth newDeptByMonth = DeptByMonth.builder()
                        .id(DeptByMonthId.builder()
                                .month(fromMonth)
                                .year(fromYear)
                                .customerId(customer.getId()).build())
                        .customer(customer)
                        .dept(totalCost).build();
                deptByMonthSet.add(newDeptByMonth);
                if (fromMonth == 12) {
                    fromMonth = 1;
                    fromYear++;
                } else {
                    fromMonth++;
                }
            }
            customer.setDept(deptByMonthSet);
        }
        else{
            Customer foundCustomer = customerRepository.findById(customer.getId()).orElseThrow(() ->
                    new CustomerNotFoundException("Customer not found!"));
            for(DeptByMonth i: DeptByMonth.filterByMonthYear(foundCustomer.getDept(), fromMonth, fromYear)){
                i.setDept(i.getDept() + totalCost);
            }
            customer = foundCustomer;
        }
        invoice.setCustomer(customer);
    }
    //Save invoice note
    private Invoice saveInvoice(Invoice invoice){
        return invoiceRepository.save(invoice);
    }

    @Override
    public Invoice updateInvoice(Long id, Invoice invoice) {
        Invoice foundInvoice = getInvoiceById(id);
        //revert dept
        revertDeptAddingByInvoice(foundInvoice, calculateTotalCost(foundInvoice));
        //revert quantity
        revertAndSaveBookQuantity(foundInvoice);

        foundInvoice.setCreationDate(invoice.getCreationDate());
        foundInvoice.setCustomer(invoice.getCustomer());
        foundInvoice.setBookInvoices(invoice.getBookInvoices());
        //save dept
        saveDeptByMonthForCustomer(foundInvoice, calculateTotalCost(invoice));
        //add quantity
        subtractAndSaveBookQuantity(foundInvoice);
        return invoiceRepository.save(foundInvoice);
    }

    @Override
    public void deleteInvoice(Long id) {
        Invoice foundInvoice = getInvoiceById(id);
        revertAndSaveBookQuantity(foundInvoice);
        revertDeptAddingByInvoice(foundInvoice, calculateTotalCost(foundInvoice));
        invoiceRepository.deleteById(id);
    }

    private void revertAndSaveBookQuantity(Invoice invoice){
        int fromMonth = invoice.getCreationDate().getMonthValue();
        int fromYear = invoice.getCreationDate().getYear();
        for(BookInvoice bookInvoice: invoice.getBookInvoices()){
            Book book = bookInvoice.getBook();
            Set<InventoryByMonth> filtedSet =
                    InventoryByMonth.filterByMonthYear(book.getInventoryByMonthSet(), fromMonth, fromYear);
            filtedSet.forEach(i -> {
                i.setQuantity(i.getQuantity() + bookInvoice.getQuantity());
            });
            bookRepository.save(book);
        }
    }
    //Save depth by month for customer
    private void revertDeptAddingByInvoice(Invoice invoice, Double totalCost){
        Customer customer = invoice.getCustomer();
        LocalDate creationDate = invoice.getCreationDate();
        int fromMonth = creationDate.getMonthValue();
        int fromYear = creationDate.getYear();
        if(customer.getId() != null){
            Customer foundCustomer = customerRepository.findById(customer.getId()).orElseThrow(() ->
                    new CustomerNotFoundException("Customer not found!"));
            for(DeptByMonth i: DeptByMonth.filterByMonthYear(foundCustomer.getDept(), fromMonth, fromYear)){
                i.setDept(i.getDept() - totalCost);
            }
            customer = foundCustomer;
        }
        invoice.setCustomer(customer);
    }

    @Override
    public Invoice getInvoiceById(Long id) {
        return invoiceRepository.findById(id).orElseThrow(() -> new InvoiceNotFoundException("Invoice not found for parameter " + "{id="+id+"}"));

//        return invoiceRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Invoice not found for parameter " + "{id="+id+"}"));
    }
}
