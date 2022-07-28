package com.perfume.perfumeservice.dto.posts;

import com.perfume.perfumeservice.domain.community.Community;
import com.perfume.perfumeservice.domain.user.UserEntity;
import lombok.Data;

@Data
public class PostsRequestDto {
    //private Long id;
    private int category;
    private Long writer_id;
    private String title;
    private String content;


    public Community toEntity(UserEntity user){
        return Community.builder()
                .category(this.category)
                .writer(user)
                .title(this.title)
                .content(this.content)
      //          .communityLike(communityLike)
                .build();
    }

}
