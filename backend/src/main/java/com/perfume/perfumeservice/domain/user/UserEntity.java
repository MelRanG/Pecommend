package com.perfume.perfumeservice.domain.user;

import com.perfume.perfumeservice.dto.user.UpdateUserRequestDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;


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
    private String email;
    private String nickname;
    private String password;
    private String birthday;
    private String gender;
    private String mbti;
    private int experience;
    private String introduction;

    @Enumerated(EnumType.STRING)
    private Role role;

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
        this.experience = dto.getExperience();
        this.introduction = dto.getIntroduction();
    }

    public void changePW(String pw){
        this.password = pw;
    }
}


