package com.perfume.perfumeservice.domain.perfume;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "perfume")
public class Perfume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "perfume_id")
    private Long id;

    @Column(name = "perfume_name_ko")
    private String koName;

    @Column(name = "perfume_name_en")
    private String enName;

    @Column(name = "likes")
    private int perfumeLike;

    @Column(name = "dislike") // dislike인지 dislikes 인지?
    private int perfumeDislike;

    @Column(name = "density") // 데이터 없음
    private String density;

    // note 노트 정보
    @OneToMany(mappedBy = "perfume", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Note> notes = new ArrayList<>();

    // perfume_tag - 해시태그
    @OneToMany(mappedBy = "perfume", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<PerfumeTag> perfumeTags = new ArrayList<>();

    // preference - 선호도(향수하나 유저하나 연결해서 선호 여부)
    @OneToMany(mappedBy = "perfume", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Preference> preferenceSet = new LinkedHashSet<>();

    // 리뷰 가져옴? => 따로

    // 또 뭐 가져와야 하지

}
