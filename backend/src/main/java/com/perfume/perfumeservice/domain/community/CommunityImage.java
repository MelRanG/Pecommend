package com.perfume.perfumeservice.domain.community;

import com.perfume.perfumeservice.domain.image.Image;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
public class CommunityImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "community_id")
    private Community community;
    @Embedded
    private Image image;

    public CommunityImage(Community community, Image image){
        this.community = community;
        this.image = image;
    }
}
