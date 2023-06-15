package com.example.bookstoremanagement.response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.apache.commons.lang3.StringUtils;

import java.io.Serializable;

@RequiredArgsConstructor
@Getter
public abstract class Response implements Serializable {
    private final StatusCode statusCode;
    private final String message;
    private final Object result;

    public Response(Object result){
        this.statusCode = StatusCode.OK;
        this.message = StringUtils.EMPTY;
        this.result = result;
    }
}
