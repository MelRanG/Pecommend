package com.perfume.perfumeservice.controller;

import com.perfume.perfumeservice.dto.jwt.TokenDto;
import com.perfume.perfumeservice.dto.jwt.TokenRequestDto;
import com.perfume.perfumeservice.dto.user.*;
import com.perfume.perfumeservice.exception.user.DuplicateEmailException;
import com.perfume.perfumeservice.exception.common.InvalidParameterException;
import com.perfume.perfumeservice.exception.user.UserNotFoundException;
import com.perfume.perfumeservice.service.user.MailService;
import com.perfume.perfumeservice.service.user.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URLDecoder;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {

    private UserService userService;
    private PasswordEncoder passwordEncoder;
    private MailService mailService;

    @GetMapping("/check.do/nickname/{nickname}")
    @ApiOperation(value = "닉네임 중복 검사")
    public ResponseEntity<Boolean> checkNickName(@PathVariable String nickname){
        // 이미 있으면 true, 없으면 false
        return new ResponseEntity<>(userService.checkNickName(nickname), HttpStatus.OK);
    }

    @PostMapping("/signup.do")
    @ApiOperation(value = "회원 가입")
    public ResponseEntity<UserResponseDto> doSignUp(@Valid @RequestBody SignUpRequestDto requestDto, BindingResult result){
        if(result.hasErrors()){
            throw new InvalidParameterException(result);
        }
        return new ResponseEntity<>(userService.doSignUp(requestDto), HttpStatus.OK);
    }

    @PostMapping("/email-confirm.do")
    @ApiOperation(value = "이메일 인증")
    public ResponseEntity<String> confirmEmail(@RequestBody String email){
        String newEmail = URLDecoder.decode(email);
        newEmail = newEmail.substring(0, newEmail.length()-1);
        System.out.println(newEmail);

        // 이미 존재하는 이메일이면
        if(userService.checkEmail(newEmail)){
            throw new DuplicateEmailException();
        }

        try {
            String confirm = mailService.sendSimpleMessage(newEmail, "certification");
            return new ResponseEntity<>(confirm, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("FAIL", HttpStatus.NO_CONTENT);
    }

    @PostMapping("/login.do")
    @ApiOperation(value = "로그인")
    public ResponseEntity<TokenDto> doLogin(@Valid @RequestBody LoginRequestDto requestDto, BindingResult result){
        if(result.hasErrors()){
            throw new InvalidParameterException(result);
        }
        TokenDto tokenDto = userService.doLogin(requestDto);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Auth", tokenDto.getAccessToken());
        headers.add("Refresh", tokenDto.getRefreshToken());

        return new ResponseEntity<>(tokenDto, headers, HttpStatus.OK);
    }

    @GetMapping("/info/{email}")
    @ApiOperation(value = "회원 정보 조회")
    public ResponseEntity<UserResponseDto> getUserInfo(@PathVariable String email){
        return new ResponseEntity<>(userService.getUserInfo(email), HttpStatus.OK);
    }
    
    @PutMapping("/update")
    @ApiOperation(value = "회원 정보 수정")
    public ResponseEntity<String> updateUser(@Valid @RequestBody UpdateUserRequestDto requestDto, BindingResult result){
        if(result.hasErrors()){
            throw new InvalidParameterException(result);
        }
        String email = userService.getMyInfo().getEmail();
        userService.updateUser(email, requestDto);
        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }
    
    @DeleteMapping("/delete")
    @ApiOperation(value = "회원 탈퇴")
    public ResponseEntity<String> deleteUser(){
        String email = userService.getMyInfo().getEmail();
        userService.deleteUser(email);
        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }
    
    @PostMapping("/findpw.do")
    @ApiOperation(value = "비밀번호 찾기")
    public ResponseEntity<String> findPW(String email){

        try {
            if(!userService.checkEmail(email)){
                throw new UserNotFoundException();
            }

            String newPW = mailService.sendSimpleMessage(email, "changePW");
            userService.changePW(email, passwordEncoder.encode(newPW));

            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        }catch(UserNotFoundException e){
            throw new UserNotFoundException();
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("FAIL", HttpStatus.NO_CONTENT);
    }

    @GetMapping("/myinfo")
    @ApiOperation(value = "내 정보 보기")
    public ResponseEntity<UserResponseDto> getMyInfo(){
        return new ResponseEntity<>(userService.getMyInfo(), HttpStatus.OK);
    }

    @PostMapping("/refresh.do")
    @ApiOperation(value = "Access Token 재발급")
    public ResponseEntity<TokenDto> refresh(@RequestBody TokenRequestDto requestDto){
        return new ResponseEntity<>(userService.refresh(requestDto), HttpStatus.OK);
    }

    @PatchMapping("/logout")
    @ApiOperation(value = "로그아웃")
    public ResponseEntity<String> logout(){
        userService.logout();
        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }

}
