package com.example.bookstoremanagement.repository;

import com.example.bookstoremanagement.domain.Regulation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegulationRepository extends JpaRepository<Regulation, Long> {

}
