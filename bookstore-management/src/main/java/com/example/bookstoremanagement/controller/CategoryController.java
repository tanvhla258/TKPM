package com.example.bookstoremanagement.controller;

import com.example.bookstoremanagement.domain.Book;
import com.example.bookstoremanagement.domain.Category;
import com.example.bookstoremanagement.dto.BookDTO;
import com.example.bookstoremanagement.dto.CategoryDTO;
import com.example.bookstoremanagement.mapping.CategoryMapper;
import com.example.bookstoremanagement.response.Response;
import com.example.bookstoremanagement.response.ResponseAPI;
import com.example.bookstoremanagement.service.CategoryService;
import com.google.common.base.Preconditions;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;
    private final CategoryMapper categoryMapper;
    private final String CATEGORY_DETAILS_MISSING_MSG = "Category's detail missing";
    @PostMapping("add")
    public Response addCategory(@RequestBody CategoryDTO categoryDTO){
        Preconditions.checkState(Objects.nonNull(categoryDTO), CATEGORY_DETAILS_MISSING_MSG);
        Category category = categoryMapper.toEntity(categoryDTO);
        return ResponseAPI.positiveResponse(categoryService.addCategory(category));
    }

    @GetMapping("list/all")
    public List<CategoryDTO> getAll(){
        List<Category> categories = categoryService.getAll();
        List<CategoryDTO> categoryDTOList = categoryMapper.toDtoList(categories);
        return categoryDTOList;
    }
}
