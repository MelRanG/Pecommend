package com.perfume.perfumeservice.dto.user;

import com.perfume.perfumeservice.domain.user.UserEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
@ApiModel(value = "UpdateUserRequestDto", description = "회원 정보 수정 요청 Dto")
public class UpdateUserRequestDto {
    @ApiModelProperty(value = "비밀번호")
    private String password;
    @ApiModelProperty(value = "닉네임")
    private String nickname;
    @ApiModelProperty(value = "생일")
    private String birthday;
    @ApiModelProperty(value = "성별")
    private String gender;
    @ApiModelProperty(value = "MBTI")
    private String mbti;
    @ApiModelProperty(value = "향수 사용 경험")
    private int experience;
    @ApiModelProperty(value = "자기 소개")
    private String introduction;

    public UserEntity toEntity(){
        return UserEntity.builder()
                .password(password)
                .nickname(nickname)
                .birthday(birthday)
                .gender(gender)
                .mbti(mbti)
                .experience(experience)
                .introduction(introduction)
                .build();
    }
}
