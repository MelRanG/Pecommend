package com.perfume.perfumeservice.service.user;

import com.perfume.perfumeservice.dto.jwt.TokenDto;
import com.perfume.perfumeservice.dto.jwt.TokenRequestDto;
import com.perfume.perfumeservice.dto.user.*;

public interface UserService {

    boolean checkEmail(String email);
    boolean checkNickName(String nickname);
    TokenDto doLogin(LoginRequestDto requestDto);
    UserResponseDto doSignUp(SignUpRequestDto requestDto);
    UserResponseDto getUserInfo(String email) throws Exception;
    void updateUser(String email, UpdateUserRequestDto requestDto) throws Exception;
    void deleteUser(String email) throws Exception;
    void changePW(String email, String newPW) throws Exception;
    UserResponseDto getMyInfo();
    TokenDto refresh(TokenRequestDto requestDto);
    void logout() throws Exception;

}
