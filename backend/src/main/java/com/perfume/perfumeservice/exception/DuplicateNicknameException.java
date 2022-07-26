package com.perfume.perfumeservice.exception;

public class DuplicateNicknameException extends CustomException{
    public DuplicateNicknameException(){
        super(ErrorCode.DUPLICATE_NICKNAME);
    }
}
