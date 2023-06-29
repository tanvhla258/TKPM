package com.example.bookstoremanagement.exception;

public class DeptLargerThanRegulationWhenBuyingException extends RuntimeException{
    public DeptLargerThanRegulationWhenBuyingException(Integer regulation) {
        super("Customer's dept exceeds " + regulation);
    }
}
