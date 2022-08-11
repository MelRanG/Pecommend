package com.perfume.perfumeservice.service.perfume;

import com.perfume.perfumeservice.domain.perfume.Perfume;
import com.perfume.perfumeservice.dto.perfume.PerfumeResponseDto;

import java.util.List;
import java.util.Map;

public interface PerfumeService {

    List<PerfumeResponseDto> getListAll();
    //List<PerfumeResponseDto> getListKeyword(String keyword); // '이름(한글, 영어)'에만 포함되어 있을 때
    List<PerfumeResponseDto> getListHashTag(List<Long> tags);

    // List<PerfumeResponseDto> getListKoKeyword(String keyword);
    // List<PerfumeResponseDto> getListEnKeyword(String keyword);

    PerfumeResponseDto getPerfume(Long id);

    String getImg(String img);
    List<PerfumeResponseDto> getBestList();

    List<PerfumeResponseDto> getListByIdList(List<Long> perfumes);

    List<PerfumeResponseDto> getByUserList(List<Long> users);

    Map<String, Object> getListAllPage(int page);

    Map<String, Object> getListKeywordPage(String keyword, int page);

    Map<String, Object> getByUserListPage(List<Long> users, int page);


}
