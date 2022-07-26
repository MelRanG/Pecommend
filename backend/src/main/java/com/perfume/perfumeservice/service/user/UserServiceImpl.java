package com.perfume.perfumeservice.service.user;

import com.perfume.perfumeservice.domain.user.Role;
import com.perfume.perfumeservice.domain.user.UserEntity;
import com.perfume.perfumeservice.domain.user.UserRepository;
import com.perfume.perfumeservice.dto.jwt.TokenDto;
import com.perfume.perfumeservice.dto.jwt.TokenRequestDto;
import com.perfume.perfumeservice.dto.user.*;
import com.perfume.perfumeservice.exception.DuplicateEmailException;
import com.perfume.perfumeservice.exception.UserNotFoundException;
import com.perfume.perfumeservice.jwt.TokenProvider;
import com.perfume.perfumeservice.util.SecurityUtil;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@AllArgsConstructor
@Transactional
public class UserServiceImpl implements UserService{
    private TokenProvider tokenProvider;
    private AuthenticationManagerBuilder authenticationManagerBuilder;
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public boolean checkEmail(String email) {
        // 이미 있으면 true, 없으면 false
        Optional<UserEntity> entity = userRepository.findByEmail(email);

        return entity.isPresent();
    }

    @Override
    public boolean checkNickName(String nickname) {
        // 이미 있으면 true, 없으면 false
        Optional<UserEntity> entity = userRepository.findByNickname(nickname);

        return entity.isPresent();
    }

    @Override
    public TokenDto doLogin(LoginRequestDto requestDto){
        // Login id/pw로 AuthenticationToken 생성
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(requestDto.getEmail(), requestDto.getPassword());

        // 검증 과정
        // CustomUserDetailsService의 loadByUserName 실행
        Authentication authentication = authenticationManagerBuilder.getObject()
                .authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // 인증 정보를 기반으로 JWT 토큰 생성
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

        // Refresh Token 저장
        Optional<UserEntity> entity = userRepository.findByEmail(authentication.getName());

        if(entity.isPresent()){
            entity.get().saveToken(tokenDto.getRefreshToken());
        }

        // 토큰 발급
        return tokenDto;

    }

    @Override
    public UserResponseDto doSignUp(SignUpRequestDto requestDto) {

        if(userRepository.findByEmail(requestDto.getEmail()).orElse(null)!=null){
            throw new DuplicateEmailException();
        }

        Role role = Role.ROLE_USER;

        UserEntity entity = UserEntity.builder()
                .email(requestDto.getEmail())
                .birthday(requestDto.getBirthday())
                .experience(requestDto.getExperience())
                .introduction(requestDto.getIntroduction())
                .mbti(requestDto.getMbti())
                .gender(requestDto.getGender())
                .nickname(requestDto.getNickname())
                .password(passwordEncoder.encode(requestDto.getPassword()))
                .role(role)
                .build();

        return UserResponseDto.from(userRepository.save(entity));
    }

    @Override
    public UserResponseDto getMyInfo(){
        return UserResponseDto.from(SecurityUtil.getCurrentUsername().flatMap(userRepository::findByEmail).orElseThrow(UserNotFoundException::new));
    }

    @Override
    public UserResponseDto getUserInfo(String email){
        return UserResponseDto.from(userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new));
    }

    @Override
    public void updateUser(String email, UpdateUserRequestDto requestDto){
        Optional<UserEntity> entity = userRepository.findByEmail(email);

        if(entity.isPresent()){
            entity.get().update(requestDto, passwordEncoder);
            return;
        }

        throw new UserNotFoundException();
    }

    @Override
    public void deleteUser(String email){
        Optional<UserEntity> entity = userRepository.findByEmail(email);

        if(entity.isPresent()){
            userRepository.deleteByEmail(email);
            return;
        }

        throw new UserNotFoundException();
    }

    @Override
    public void changePW(String email, String newPW) {
        Optional<UserEntity> entity = userRepository.findByEmail(email);

        if(entity.isPresent()){
            entity.get().changePW(newPW);
            return;
        }

        throw new UserNotFoundException();
    }

    @Override
    public TokenDto refresh(TokenRequestDto requestDto){
        // Refresh Token 검증
        if(!tokenProvider.validateToken(requestDto.getRefreshToken())){
            throw new RuntimeException("Refresh Token이 유효하지 않습니다.");
        }

        // Access Token에서 Id(Email) 가져오기
        Authentication authentication = tokenProvider.getAuthentication(requestDto.getAccessToken());

        // 가져온 ID로 Refresh Token 가져오기
        UserEntity entity = userRepository.findByEmail(authentication.getName())
                .orElseThrow(()->new RuntimeException("로그아웃된 사용자입니다."));

        String refreshToken = entity.getToken();

        // 일치 검사
        if(!refreshToken.equals(requestDto.getRefreshToken())){
            throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
        }

        // 새 토큰 생성
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

        // DB 정보 업데이트
        entity.saveToken(tokenDto.getRefreshToken());

        // 토큰 발급
        return tokenDto;
    }

    @Override
    public void logout(){
        Optional<UserEntity> entity = SecurityUtil.getCurrentUsername().flatMap(userRepository::findByEmail);

        if(entity.isPresent()){
            entity.get().saveToken("");
            return;
        }

        throw new RuntimeException("로그아웃에 실패했습니다.");
    }
}
