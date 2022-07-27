package com.perfume.perfumeservice.dto.posts;

import com.perfume.perfumeservice.domain.community.Community;
import lombok.Data;

@Data
public class PostsDto {
    private Long id;
    private int category;
    private int writer;
    private String title;
    private String content;
    private int communityLike;

    public Community toEntity(){
        return Community.builder()
                .category(category)
                .writer(writer)
                .title(title)
                .content(content)
                .communityLike(communityLike)
                .build();
    }
}
