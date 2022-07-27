package com.perfume.perfumeservice.domain.user;

import com.perfume.perfumeservice.dto.user.UpdateUserRequestDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;


@Entity
@NoArgsConstructor
@Getter
@Builder
@AllArgsConstructor
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long user_id;
    @NotBlank(message = "이메일은 필수입니다.")
    @Column(name = "email")
    private String email;
    @NotBlank(message = "닉네임은 필수입니다.")
    @Column(name = "nickname", unique = true)
    private String nickname;
    @NotBlank(message = "비밀번호는 필수입니다.")
    @Column(name = "password")
    private String password;
    @Column(name = "birthday")
    private String birthday;
    @Column(name = "gender")
    private String gender;
    @Column(name = "mbti")
    private String mbti;
    @Column(name = "introduction")
    private String introduction;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    @Column(name = "token")
    private String token;

    public void saveToken(String token){
        this.token = token;
    }

    public void update(UpdateUserRequestDto dto, PasswordEncoder encoder){
        this.nickname = dto.getNickname();
        this.password = encoder.encode(dto.getPassword());
        this.birthday = dto.getBirthday();
        this.gender = dto.getGender();
        this.mbti = dto.getMbti();
        this.introduction = dto.getIntroduction();
    }

    public void changePW(String pw){
        this.password = pw;
    }
}


