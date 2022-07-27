package com.perfume.perfumeservice.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    USER_NOT_FOUND(404, "U001", "회원 정보를 찾을 수 없습니다."),
    DUPLICATE_EMAIL(400, "U002", "이미 존재하는 계정입니다."),
    DUPLICATE_NICKNAME(400, "U003", "이미 존재하는 닉네임입니다."),
    INVALID_PARAMETER(400, "U003", "잘못된 요청입니다."),

    POST_NOT_FOUND(404, "C001", "게시글 정보를 찾을 수 없습니다."),
    NOT_IMAGE_FILE(415, "C002", "이미지 형식의 파일이 아닙니다.");

    private final int status;
    private final String code;
    private final String message;


}
