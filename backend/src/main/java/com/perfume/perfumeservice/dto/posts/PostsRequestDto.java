package com.perfume.perfumeservice.dto.posts;

import com.perfume.perfumeservice.domain.community.Community;
import com.perfume.perfumeservice.domain.user.UserEntity;
import lombok.Data;

@Data
public class PostsRequestDto {
    //private Long id;
    private int category;
    private long writer_id;
    private String title;
    private String content;
    //private int communityLike;

    public Community toEntity(UserEntity user){
        return Community.builder()
                .category(category)
                .writer(user)
                .title(title)
                .content(content)
      //          .communityLike(communityLike)
                .build();
    }
}
