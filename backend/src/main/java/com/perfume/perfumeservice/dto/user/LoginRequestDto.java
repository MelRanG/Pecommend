package com.perfume.perfumeservice.dto.user;

import com.perfume.perfumeservice.domain.user.UserEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(value = "LoginRequestDto", description = "Login 요청 Dto")
public class LoginRequestDto {
    @ApiModelProperty(value = "이메일")
    private String email;
    @ApiModelProperty(value = "비밀번호")
    private String password;
}
