package com.perfume.perfumeservice.domain.community;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
public class Community {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "community_id")
    private Long id;
    private int category;
    private int writer;
    private String title;
    private String content;
    private int communityLike;

    @Builder
    public Community(int category, int writer, String title, String content, int communityLike){
        this.category = category;
        this.writer = writer;
        this.title = title;
        this.content = content;
        this.communityLike = communityLike;
    }

    public void patch(Community community){
        if(community.title != null)
            this.title = community.title;
        if(community.content != null)
            this.content = community.content;
        if(community.category != 0)
            this.category = community.category;
    }
}
