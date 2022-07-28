package com.perfume.perfumeservice.service.user;

import com.perfume.perfumeservice.dto.jwt.TokenDto;
import com.perfume.perfumeservice.dto.jwt.TokenRequestDto;
import com.perfume.perfumeservice.dto.user.*;

public interface UserService {

    boolean checkEmail(String email);
    boolean checkNickName(String nickname);
    TokenDto doLogin(LoginRequestDto requestDto);
    UserResponseDto doSignUp(SignUpRequestDto requestDto);
    UserResponseDto getUserInfo(String email);
    void updateUser(String email, UpdateUserRequestDto requestDto);
    void deleteUser(String email);
    void changePW(String email, String newPW);
    UserResponseDto getMyInfo();
    TokenDto refresh(TokenRequestDto requestDto);
    void logout();

}
