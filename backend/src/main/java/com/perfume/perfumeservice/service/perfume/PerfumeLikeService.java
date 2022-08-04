package com.perfume.perfumeservice.service.perfume;

import com.perfume.perfumeservice.domain.perfume.Perfume;
import com.perfume.perfumeservice.domain.perfume.PerfumeLDCount;
import com.perfume.perfumeservice.domain.perfume.PerfumeLikeCount;
import com.perfume.perfumeservice.dto.perfume.PerfumeDislikeResponseDto;
import com.perfume.perfumeservice.dto.perfume.PerfumeLikeResponseDto;

import java.util.List;

public interface PerfumeLikeService {



    String addLike(Long perfumeId, Long userId);

    String addDislike(Long perfumeId, Long userId);

//    String deleteLike(Long perfumeId, Long userId); // String 반환 하는 버전

//    void deleteLike(Long perfumeId, Long userId); // String 반환 안 하는 버전

    List<PerfumeLikeResponseDto> getLikePerfume(Long id);
    List<PerfumeDislikeResponseDto> getDislikePerfume(Long id);

    List<PerfumeLikeResponseDto> getLikeUser(Long id);
    List<PerfumeDislikeResponseDto> getDislikeUser(Long id);
    List<PerfumeLikeResponseDto> getLikeAll();
    List<PerfumeDislikeResponseDto> getDislikeAll();

    List<PerfumeLDCount> getLikeLike(Long id);

    List<PerfumeLDCount> getLikeDislike(Long id);
    List<PerfumeLDCount> getDislikeLike(Long id);

    List<PerfumeLDCount> getDislikeDislike(Long id);

}
