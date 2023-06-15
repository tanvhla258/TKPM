package com.example.bookstoremanagement.mapping;

import java.util.List;

public interface BaseMapper<E,D> {
    List<D> toDtoList(List<E> list);
    D toDto(E entity);
    E toEntity(D dto);
}
