package com.perfume.perfumeservice.service.oauth2;

import com.perfume.perfumeservice.domain.user.Role;
import com.perfume.perfumeservice.domain.user.UserEntity;
import com.perfume.perfumeservice.domain.user.UserRepository;
import com.perfume.perfumeservice.dto.jwt.TokenDto;
import com.perfume.perfumeservice.jwt.TokenProvider;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

@AllArgsConstructor
@Component
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler {
    private TokenProvider tokenProvider;
    private UserRepository userRepository;
    private PasswordMaker passwordMaker;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        Map<String, Object> attributes = oAuth2User.getAttributes();
        String email = (String) attributes.get("email");

        // db 확인
        // 새로운 유저 -> 회원가입
        UserEntity entity = userRepository.findByEmail(email)
                .orElse(UserEntity.builder()
                        .email((String)attributes.get("email"))
                        .nickname(passwordMaker.make())
                        .role(Role.ROLE_USER)
                        .password(passwordMaker.make())
                        .build());

        // 토큰 생성
        TokenDto tokenDto = tokenProvider.generateTokenDto(entity.getEmail(), entity.getRole().toString());
        entity.saveToken(tokenDto.getRefreshToken());
        userRepository.save(entity);

        // 토큰 정보 삽입
        response.setContentType("text/html;charset=UTF-8");
        response.addHeader("Auth", tokenDto.getAccessToken());
        response.addHeader("Refresh", tokenDto.getRefreshToken());
        response.setContentType("application/json;charset=UTF-8");

        // 리다이렉트
        String target = "http://localhost:3000";
        RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();
        redirectStrategy.sendRedirect(request, response, target);
    }
}
