package com.example.bookstoremanagement.controller;

import com.example.bookstoremanagement.domain.Book;
import com.example.bookstoremanagement.domain.Regulation;
import com.example.bookstoremanagement.dto.BookDTO;
import com.example.bookstoremanagement.dto.RegulationDTO;
import com.example.bookstoremanagement.mapping.RegulationMapper;
import com.example.bookstoremanagement.repository.RegulationRepository;
import com.example.bookstoremanagement.response.Response;
import com.example.bookstoremanagement.response.ResponseAPI;
import com.example.bookstoremanagement.service.RegulationService;
import com.google.common.base.Preconditions;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("regulations")
@CrossOrigin
@RequiredArgsConstructor
public class RegulationController {
    private final RegulationService regulationService;
    private final RegulationMapper regulationMapper;
//    private final String REGULATION_ID_MISSING_MSG = "Regulation's id must be specified";
    private final String REGULATION_DETAILS_MISSING_MSG = "Regulation's details must be specified";
    @PostMapping("update")
    public Response updateRegulations(@RequestBody List<RegulationDTO> regulationDTO){
//        Preconditions.checkState(Objects.nonNull(id), REGULATION_ID_MISSING_MSG);
        Preconditions.checkState(Objects.nonNull(regulationDTO), REGULATION_DETAILS_MISSING_MSG);
        List<Regulation> regulation = regulationMapper.toList(regulationDTO);
        return ResponseAPI.positiveResponse(regulationService.updateRegulations(regulation));
    }
}
