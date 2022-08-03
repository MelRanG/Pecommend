package com.perfume.perfumeservice.service.perfume;

import com.perfume.perfumeservice.dto.perfume.PerfumeDislikeResponseDto;
import com.perfume.perfumeservice.dto.perfume.PerfumeLikeResponseDto;

import java.util.List;

public interface PerfumeLikeService {

    List<PerfumeLikeResponseDto> getLike(Long id);
    List<PerfumeDislikeResponseDto> getDislike(Long id);

}
