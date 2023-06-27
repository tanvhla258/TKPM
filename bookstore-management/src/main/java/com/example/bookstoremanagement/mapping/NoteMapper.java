package com.example.bookstoremanagement.mapping;

import com.example.bookstoremanagement.domain.Note;
import com.example.bookstoremanagement.dto.NoteDTO;
import org.mapstruct.Mapper;
import org.mapstruct.ObjectFactory;

import java.util.List;

@Mapper(componentModel = "spring")
public interface NoteMapper extends BaseMapper<Note, NoteDTO>{

    @ObjectFactory
    default Note creNote(){
        return new Note() {};
    }
    @ObjectFactory
    default NoteDTO creNoteDTO(){
        return new NoteDTO() {};
    }
}
