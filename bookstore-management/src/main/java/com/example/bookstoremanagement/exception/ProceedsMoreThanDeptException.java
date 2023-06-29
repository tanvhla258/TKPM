package com.example.bookstoremanagement.exception;

public class ProceedsMoreThanDeptException extends RuntimeException{
    public ProceedsMoreThanDeptException() {
        super("Proceeds more than customer's dept");
    }
}
