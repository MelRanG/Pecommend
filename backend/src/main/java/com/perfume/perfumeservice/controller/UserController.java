package com.perfume.perfumeservice.controller;

import com.perfume.perfumeservice.dto.jwt.TokenDto;
import com.perfume.perfumeservice.dto.jwt.TokenRequestDto;
import com.perfume.perfumeservice.dto.user.*;
import com.perfume.perfumeservice.service.user.MailService;
import com.perfume.perfumeservice.service.user.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {

    private UserService userService;
    private PasswordEncoder passwordEncoder;
    private MailService mailService;

    @GetMapping("/check.do/email/{email}")
    @ApiOperation(value = "이메일 중복 검사")
    public ResponseEntity<Boolean> checkEmail(@PathVariable String email){
        // 이미 있으면 true, 없으면 false
        return new ResponseEntity<>(userService.checkEmail(email), HttpStatus.OK);
    }

    @GetMapping("/check.do/nickname/{nickname}")
    @ApiOperation(value = "닉네임 중복 검사")
    public ResponseEntity<Boolean> checkNickName(@PathVariable String nickname){
        // 이미 있으면 true, 없으면 false
        return new ResponseEntity<>(userService.checkNickName(nickname), HttpStatus.OK);
    }

    @PostMapping("/signup.do")
    @ApiOperation(value = "회원 가입")
    public ResponseEntity<UserResponseDto> doSignUp(@Valid @RequestBody SignUpRequestDto requestDto){
        return new ResponseEntity<>(userService.doSignUp(requestDto), HttpStatus.OK);
    }

    @PostMapping("/email-confirm.do")
    @ApiOperation(value = "이메일 인증")
    public ResponseEntity<String> confirmEmail(@RequestBody String email){
        try {
            String confirm = mailService.sendSimpleMessage(email, "certification");
            return new ResponseEntity<>(confirm, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("Fail", HttpStatus.NO_CONTENT);
    }

    @PostMapping("/login.do")
    @ApiOperation(value = "로그인")
    public ResponseEntity<TokenDto> doLogin(@Valid @RequestBody LoginRequestDto requestDto){
        TokenDto tokenDto = userService.doLogin(requestDto);

        return new ResponseEntity<>(tokenDto, HttpStatus.OK);
    }

    @GetMapping("/info/{email}")
    @ApiOperation(value = "회원 정보 조회")
    public ResponseEntity<UserResponseDto> getUserInfo(@PathVariable String email){

        try {
            return new ResponseEntity<>(userService.getUserInfo(email), HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
        }

        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
    @PutMapping("/update")
    @ApiOperation(value = "회원 정보 수정")
    public ResponseEntity<String> updateUser(@RequestBody UpdateUserRequestDto requestDto){
        String email = userService.getMyInfo().getEmail();
        try {
            userService.updateUser(email, requestDto);
            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
    }
    
    @DeleteMapping("/delete")
    @ApiOperation(value = "회원 탈퇴")
    public ResponseEntity<String> deleteUser(){
        String email = userService.getMyInfo().getEmail();
        try {
            userService.deleteUser(email);
            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
        }

        return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
    }
    
    @PostMapping("/findpw.do")
    @ApiOperation(value = "비밀번호 찾기")
    public ResponseEntity<String> findPW(String email){
        try {
            if(!userService.checkEmail(email)){
                System.out.print("없는 이메일");
                return new ResponseEntity<>("Fail", HttpStatus.NO_CONTENT);
            }

            String newPW = mailService.sendSimpleMessage(email, "changePW");
            userService.changePW(email, passwordEncoder.encode(newPW));

            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("Fail", HttpStatus.NO_CONTENT);
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

        try{
            userService.logout();
            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }

        return new ResponseEntity<>("FAIL", HttpStatus.NO_CONTENT);
    }

    @GetMapping("/profile/{id}")
    @ApiOperation(value = "회원 프로필 보기")
    public ResponseEntity<?> getProfile(){
        // 보류
        return new ResponseEntity<>("", HttpStatus.NO_CONTENT);
    }
}
