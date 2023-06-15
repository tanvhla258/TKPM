package com.example.bookstoremanagement.repository;

import com.example.bookstoremanagement.domain.BookDeliveryNote;
import com.example.bookstoremanagement.domain.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookDeliveryNoteRepository extends JpaRepository<BookDeliveryNote, Long> {

}
