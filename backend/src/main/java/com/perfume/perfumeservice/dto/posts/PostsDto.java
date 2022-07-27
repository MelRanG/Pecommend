package com.perfume.perfumeservice.dto.posts;

import com.perfume.perfumeservice.domain.community.Community;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
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
