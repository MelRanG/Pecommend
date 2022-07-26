package com.perfume.perfumeservice.exception;

public class DuplicateEmailException extends CustomException{
    public DuplicateEmailException(){
        super(ErrorCode.DUPLICATE_EMAIL);
    }
}
