package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.Regulation;
import org.springframework.stereotype.Service;

import java.util.List;

public interface RegulationService {
    List<Regulation> getAll();
    List<Regulation> updateRegulations(List<Regulation> regulations);
    Regulation getById(Long id);
    Regulation updateRegulation(Long id, Integer value);
}
