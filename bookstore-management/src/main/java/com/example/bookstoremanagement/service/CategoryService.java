package com.example.bookstoremanagement.service;

import com.example.bookstoremanagement.domain.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getAll();
    Category addCategory(Category category);
}
