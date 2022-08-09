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

    // 나이로 유저 찾기 - 나중에는 합칠 것
    List<Long> getUserByAge(List<Integer> ages);

    // 성별로 유저 찾기 - 나중에는 합칠 것
    List<Long> getUserByGender(List<String> genders);

    // mbti로 유저 찾기 - 나중에는 합칠 것
    List<Long> getUserByMbti(List<String> mbtis);

    // 엠벼랑 나이로 유저 찾기 - 나중에는 합칠 것
    List<Long> getUserByMbtiAndAge(List<String> mbtis, List<Integer> ages, List<String> genders);

    // 엠벼랑 성별과 나이로 유저 찾기 - 나중에는 합칠 것
    List<Long> getUserByMbtiAndGenderAndAge(List<String> mbtis, List<String> genders, List<Integer> ages);




}
