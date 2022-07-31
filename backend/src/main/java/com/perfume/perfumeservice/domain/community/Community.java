package com.perfume.perfumeservice.domain.community;
import com.perfume.perfumeservice.domain.comment.Comment;
import com.perfume.perfumeservice.domain.image.Image;
import com.perfume.perfumeservice.domain.user.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Getter
public class Community {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "community_id")
    private Long id;
    private int category;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserEntity writer;
    private String title;
    private String content;
    private int communityLike;
    @OneToMany(fetch = FetchType.LAZY)
    List<Comment> comments = new ArrayList<>();
    @OneToMany(fetch = FetchType.LAZY)
    List<CommunityImage> images = new ArrayList<>();

    public void patch(Community community){
        if(community.title != null)
            this.title = community.title;
        if(community.content != null)
            this.content = community.content;
        if(community.category != 0)
            this.category = community.category;
    }

}
