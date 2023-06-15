package com.example.bookstoremanagement.exception;

public class BookDeliveryNoteNotFoundException extends RuntimeException {
    public BookDeliveryNoteNotFoundException(String message) {
        super(message);
    }
}
