package com.example.bookstoremanagement.exception;

public class RegulationNotFoundException extends RuntimeException{
    public RegulationNotFoundException(String message) {
        super(message);
    }
}
