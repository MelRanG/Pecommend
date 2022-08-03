package com.perfume.perfumeservice.dto.perfume;

import com.perfume.perfumeservice.domain.perfume.Note;
import com.perfume.perfumeservice.domain.perfume.Perfume;
import com.perfume.perfumeservice.domain.perfume.PerfumeTag;
import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(value = "DetailResponseDto", description = "향수 상세 정보 응답 Dto")
public class DetailResponseDto {
    private long perfumeId;
    private String koName;
    private String enName;
    private Double score; // 평점
    private int perfumeLike;
    private int perfumeDisLike;
    private String density;

    private List<PerfumeTag> tags; // 태그

    private List<Note> notesId; // 향료

    // 이미지

    // 현재는 perfume과 note만
    public static DetailResponseDto from(Perfume perfume, List<Note> note){




        return DetailResponseDto.builder()

                .notesId(note)
                .build();

    }





}
