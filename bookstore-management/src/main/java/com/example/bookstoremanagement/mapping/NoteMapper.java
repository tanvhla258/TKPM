package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.Note;
import com.example.bookstoremanagement.dto.NoteDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface NoteMapper extends BaseMapper<Note, NoteDTO>{
}
