package com.example.bookstoremanagement.exception;

public class QuantityOfBookInventoryWhenDeliveryMoreThanRegulationException extends RuntimeException{
    public QuantityOfBookInventoryWhenDeliveryMoreThanRegulationException(Integer regulation) {
        super("Current quantity in inventory of book is larger than " + regulation);
    }
}
