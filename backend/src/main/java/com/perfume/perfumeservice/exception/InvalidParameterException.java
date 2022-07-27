package com.perfume.perfumeservice.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.validation.Errors;

@Getter
public class InvalidParameterException extends CustomException{
    private final Errors errors;

    public InvalidParameterException(Errors errors){
        super(ErrorCode.INVALID_PARAMETER);
        this.errors = errors;
    }
}
