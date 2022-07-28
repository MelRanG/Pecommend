package com.perfume.perfumeservice.domain.community;
import com.perfume.perfumeservice.domain.user.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity writer;
    private String title;
    private String content;
    private int communityLike;

    public void patch(Community community){
        if(community.title != null)
            this.title = community.title;
        if(community.content != null)
            this.content = community.content;
        if(community.category != 0)
            this.category = community.category;
    }

}
