package com.example.bookstoremanagement.response;

import org.springframework.http.HttpStatusCode;

public class NegativeResponse extends Response{

    public NegativeResponse(StatusCode statusCode, String message, Object result) {
        super(statusCode, message, result);
    }
}
