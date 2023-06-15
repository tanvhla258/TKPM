package com.example.bookstoremanagement.repository;

import com.example.bookstoremanagement.domain.ReceiptNote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReceiptNoteRepository extends JpaRepository<ReceiptNote, Long> {

}
