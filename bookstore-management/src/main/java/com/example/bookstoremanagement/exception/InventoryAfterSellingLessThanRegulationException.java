package com.example.bookstoremanagement.exception;

public class InventoryAfterSellingLessThanRegulationException extends RuntimeException{
    public InventoryAfterSellingLessThanRegulationException(Integer regulation) {
        super("Book's inventory after selling is less than " + regulation);
    }
}
