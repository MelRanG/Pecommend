package com.perfume.perfumeservice.service.perfume;

import com.perfume.perfumeservice.domain.perfume.Perfume;
import com.perfume.perfumeservice.dto.perfume.PerfumeResponseDto;

import java.util.List;

public interface PerfumeService {

    List<PerfumeResponseDto> getListAll();
    List<PerfumeResponseDto> getListKeyword(String keyword); // '이름(한글, 영어)'에만 포함되어 있을 때
    List<PerfumeResponseDto> getListHashTag(List<Long> tags);

    // List<PerfumeResponseDto> getListKoKeyword(String keyword);
    // List<PerfumeResponseDto> getListEnKeyword(String keyword);

    PerfumeResponseDto getPerfume(Long id);

    String getImg(String img);
    List<PerfumeResponseDto> getBestList();

}
