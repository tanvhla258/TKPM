package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.Category;
import com.example.bookstoremanagement.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService{
    private final CategoryRepository repository;
    @Override
    public List<Category> getAll() {
        return repository.findAll();
    }

    @Override
    public Category addCategory(Category category) {
        return repository.save(category);
    }
}
