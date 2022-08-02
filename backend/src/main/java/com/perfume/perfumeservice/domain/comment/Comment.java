package com.perfume.perfumeservice.domain.comment;

import com.perfume.perfumeservice.domain.baseTime.BaseTime;
import com.perfume.perfumeservice.domain.community.Community;
import com.perfume.perfumeservice.domain.community.CommunityLike;
import com.perfume.perfumeservice.domain.user.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Getter
public class Comment extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_id")
    private Community community;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserEntity writer;

    private String content;
    @OneToMany(mappedBy = "comment", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<CommentLike> commentLikes = new LinkedHashSet<>();

    public void patch(Comment comment){
        if(comment.getContent() != null)
            this.content = comment.content;
    }
}
