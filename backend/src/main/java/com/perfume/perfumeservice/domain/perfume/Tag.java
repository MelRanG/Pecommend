package com.perfume.perfumeservice.domain.perfume;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tag")
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private Long id;

    @Column(name = "tag_name")
    private String tagName;

    // perfume_tag
    @OneToMany(mappedBy = "tag", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Tag> tags = new ArrayList<>();

    // perfume_review

    // user_tag


}
