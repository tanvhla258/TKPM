package com.example.bookstoremanagement.repository;

import com.example.bookstoremanagement.domain.Book;
import com.example.bookstoremanagement.domain.InventoryByMonth;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{
    @Query(value = "select * from books where title like %?1%",
    countQuery = "select count(*) from books where title like %?1%",
    nativeQuery = true)
    Page<Book> findByTitle(String text, Pageable pageable);

    @Query(value = "select * from books where category = ?1",
    countQuery = "select count(*) from books where category = ?1",
    nativeQuery = true)
    Page<Book> findByCategory(Integer category, Pageable pageable);

    @Query(value = "select * from books where title like %?1% and category = ?2",
    countQuery = "select count (*) from books where title like %?1% and category = ?2",
    nativeQuery = true)
    Page<Book> findByTitleAndCategory(String title, Integer category, Pageable pageable);
    @Query(value = "select * from books where title like %:#{#book.title}% " +
            "and category_id = %:#{#book.category}% " +
            "and author like %:#{#book.author}%",
            nativeQuery = true)
    Book findBookByFields(@Param("book") Book book);
    @Query(value = "select * from books where title like %?1% " +
            "and category_id = ?2 " +
            "and author like %?3%",
            nativeQuery = true)
    Book findBookByFields(String title, Long categoryId, String author);
//    @Query(value = "select * " +
//            "from inventory_by_month as i join books as b on b.id = i.book_id "+
//            "where b.id = ?1 " +
//            "and i.year_month > ?2", nativeQuery = true)
//    Set<InventoryByMonth> getInventoryFromYearMonth(Long id, LocalDate from);

}
