package com.example.bookstoremanagement.exception;

public class QuantityOfDeliveryBookLessThanRegulationException extends RuntimeException{
    public QuantityOfDeliveryBookLessThanRegulationException(Integer regulation) {
        super("Quantity of delivery book less than " + regulation);
    }
}
