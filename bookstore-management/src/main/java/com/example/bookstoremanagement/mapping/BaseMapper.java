package com.example.bookstoremanagement.mapping;

import java.util.List;
import java.util.Set;

public interface BaseMapper<E,D> {
    List<D> toDtoList(List<E> list);
    D toDto(E entity);
    E toEntity(D dto);
    Set<D> toDtoSet(Set<E> set);
    Set<E> toSet(Set<D> set);
}
