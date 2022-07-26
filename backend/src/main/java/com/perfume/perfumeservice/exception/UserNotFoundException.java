package com.perfume.perfumeservice.exception;

public class UserNotFoundException extends CustomException{
    public UserNotFoundException(){
        super(ErrorCode.USER_NOT_FOUND);
    }
}
