package com.perfume.perfumeservice.dto.perfume;

import com.perfume.perfumeservice.domain.perfume.*;
import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(value = "PerfumeResponseRequestDto", description = "향수 정보 응답 Dto")
public class PerfumeResponseDto {
    private long perfumeId;
    private String koName;
    private String enName;
    // private Double score; // 평점
    private int perfumeLike;
    private int perfumeDisLike;
    private String density;
//    private List<Note> notesId;
//    private List<PerfumeTag> tags;


    public static PerfumeResponseDto from(Perfume perfume){
        if(perfume == null) return null;

        // like, dislike 세기?
//        Set<Preference> set = perfume.getPreferenceSet();
//        int like[] = new int[2]; //0: dislike, 1: like
//        for (Preference elem:set) {
//            like[elem.getPerference() == 0 ? 0:1]++;
//        }

        return PerfumeResponseDto.builder()
                .perfumeId(perfume.getId())
                .koName(perfume.getKoName())
                .enName(perfume.getEnName())
                .perfumeLike(perfume.getPerfumeLike())
                .perfumeDisLike(perfume.getPerfumeDislike())
                .density(perfume.getDensity())
//                .notesId(perfume.getNotes()) // 일단 보류(리스트 날리는 거 때문에)
                .build();
    }

}
