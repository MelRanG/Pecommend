package com.perfume.perfumeservice.dto.oauth2;

import com.perfume.perfumeservice.domain.user.Role;
import com.perfume.perfumeservice.domain.user.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.Map;

@Getter
@Builder
@AllArgsConstructor
public class OAuth2Attribute {
    private Map<String, Object> attributes;
    private String attributeKey;
    private String email;

    public static OAuth2Attribute of(String provider, String attributeKey, Map<String, Object> attributes){
        switch (provider){
            case "google":
                return ofGoogle(attributeKey, attributes);

            default:
                throw new RuntimeException();
        }
    }

    private static OAuth2Attribute ofGoogle(String attributeKey, Map<String, Object> attributes){
        return OAuth2Attribute.builder()
                .email((String)attributes.get("email"))
                .attributes(attributes)
                .attributeKey(attributeKey)
                .build();
    }

    public UserEntity toEntity(){
        return UserEntity.builder()
                .email(email)
                .role(Role.ROLE_USER)
                .build();
    }
}
