package com.example.bookstoremanagement.response;

import org.springframework.http.HttpStatusCode;

public class PositiveResponse extends Response{

    public PositiveResponse(Object result) {
        super(result);
    }
}
