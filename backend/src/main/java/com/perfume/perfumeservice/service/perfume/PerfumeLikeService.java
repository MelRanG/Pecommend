package com.perfume.perfumeservice.service.perfume;

import com.perfume.perfumeservice.domain.perfume.Perfume;
import com.perfume.perfumeservice.dto.perfume.PerfumeDislikeResponseDto;
import com.perfume.perfumeservice.dto.perfume.PerfumeLikeResponseDto;

import java.util.List;

public interface PerfumeLikeService {

    List<PerfumeLikeResponseDto> getLike(Long id);
    List<PerfumeDislikeResponseDto> getDislike(Long id);

    String addLike(Long perfumeId, Long userId);

    String addDisLike(Long perfumeId, Long userId);

    String deleteLike(Long perfumeId, Long userId); // String 반환 하는 버전

//    void deleteLike(Long perfumeId, Long userId); // String 반환 안 하는 버전

    List<PerfumeLikeResponseDto> getLikeAll();

    List<PerfumeDislikeResponseDto> getDislikeAll();

}
