package com.perfume.perfumeservice.dto.perfume;

import com.perfume.perfumeservice.domain.perfume.Perfume;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@Builder
@Data
public class PerfumeRequestDto {

    //private long perfumeId;
    private String koName;
    private String enName;
    // private Double score; // 평점
//    private int perfumeLike;
//    private int perfumeDisLike;
    private String density;

    public Perfume toEntity(Perfume perfume){
        return Perfume.builder()
                .koName(koName)
                .enName(enName)
//                .perfumeLike(perfumeLike)
//                .perfumeDislike(perfumeDisLike)
                .density(density)
                .build();

    }
    // 삽입


}
