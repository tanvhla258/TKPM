package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.Regulation;
import com.example.bookstoremanagement.exception.RegulationNotFoundException;
import com.example.bookstoremanagement.repository.RegulationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RegulationServiceImpl implements RegulationService {
    private final RegulationRepository regulationRepository;
    @Override
    public List<Regulation> getAll() {
        return regulationRepository.findAll();
    }

    @Override
    public List<Regulation> updateRegulations(List<Regulation> regulations) {
        List<Regulation> foundRegulations = new ArrayList<>();
        for(Regulation regulation: regulations){
            Regulation foundRegulation = getById(regulation.getId());
            regulation.setValue(regulation.getValue());
            foundRegulations.add(foundRegulation);
        }
        return regulationRepository.saveAll(foundRegulations);
    }

    @Override
    public Regulation getById(Long id) {
        return regulationRepository.findById(id).orElseThrow(() -> new RegulationNotFoundException("Regulation not found!"));
    }

    @Override
    public Regulation updateRegulation(Long id, Integer value) {
        Regulation foundRegulation = getById(id);
        foundRegulation.setValue(value);
        return regulationRepository.save(foundRegulation);
    }
}
