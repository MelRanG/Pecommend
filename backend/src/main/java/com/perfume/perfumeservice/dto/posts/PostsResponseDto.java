package com.perfume.perfumeservice.dto.posts;

import com.perfume.perfumeservice.domain.community.Community;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class PostsResponseDto {
    private long id;
    private int category;
    private long writer_id;
    private String writer;
    private String title;
    private String content;
    private int communityLike;

    public static PostsResponseDto from(Community community){
        return PostsResponseDto.builder()
                .id(community.getId())
                .category(community.getCategory())
                .writer_id(community.getWriter().getId())
                .writer(community.getWriter().getNickname())
                .title(community.getTitle())
                .content(community.getContent())
                .communityLike(community.getCommunityLike())
                .build();
    }
}
