package com.perfume.perfumeservice.domain.user;

import com.perfume.perfumeservice.domain.community.Community;
import com.perfume.perfumeservice.domain.perfume.Preference;
import com.perfume.perfumeservice.domain.review.PerfumeReview;
import com.perfume.perfumeservice.domain.review.ReviewLike;
import com.perfume.perfumeservice.dto.user.UpdateUserRequestDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;


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
    private Long id;
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

    @OneToMany(mappedBy = "writer", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Community> posts = new LinkedHashSet<>();

    // preference
    @OneToMany(mappedBy = "preference", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Preference> preference = new ArrayList<>();

    // perfume_review
    // 여기도 writer로 해도 되는겨?
    @OneToMany(mappedBy = "writer", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<PerfumeReview> reviews = new ArrayList<>();

    // review_like
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ReviewLike> reviewLikeList = new ArrayList<>();

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


