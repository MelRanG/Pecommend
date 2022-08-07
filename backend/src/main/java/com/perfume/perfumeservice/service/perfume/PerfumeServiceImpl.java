package com.perfume.perfumeservice.service.perfume;

import com.perfume.perfumeservice.domain.perfume.*;
import com.perfume.perfumeservice.dto.perfume.NoteResponseDto;
import com.perfume.perfumeservice.dto.perfume.PerfumeResponseDto;
import com.perfume.perfumeservice.exception.perfume.PerfumeNotFoundException;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.query.criteria.internal.predicate.LikePredicate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.util.*;

@Service
@RequiredArgsConstructor
@Transactional
public class PerfumeServiceImpl  implements PerfumeService {

    private final PerfumeRepository perfumeRepository;

    @Value("${part4.upload.perfumepath}")
    private String uploadPath;


    @Override
    public List<PerfumeResponseDto> getListAll() {
        List<Perfume> perfumeList = perfumeRepository.findAllByOrderByKoName();

        List<PerfumeResponseDto> dtoList = new LinkedList<>();

        for (Perfume p: perfumeList){
             dtoList.add(PerfumeResponseDto.from(p));
        }
        return dtoList;
    }

    @Override
    public List<PerfumeResponseDto> getListHashTag(List<Long> tags){
        List<Perfume> perfumeList = perfumeRepository.findByTags(tags);

        List<PerfumeResponseDto> dtoList = new LinkedList<>();
        for(Perfume p: perfumeList){
            dtoList.add(PerfumeResponseDto.from(p));
        }

        return dtoList;
    }

    @Override
    public List<PerfumeResponseDto> getListKeyword(String keyword) {
        // keyword가 한글인지 영어(숫자)인지 확인해서 검색하기

        List<Perfume> perfumeList = perfumeRepository.findByKoNameLikeOrEnNameLike("%"+keyword+"%", "%"+keyword+"%");
//        List<Perfume> perfumeListKo = perfumeRepository.findByKoNameLike("%"+keyword+"%");
//        List<Perfume> perfumeListEn = perfumeRepository.findByEnNameLike("%"+keyword+"%");

        // 중복 제거가 안되고 있었슴 ㅋ

//        Set<PerfumeResponseDto> dtoList = new LinkedHashSet<>();
//
//        for(Perfume p: perfumeListKo){
//            dtoList.add(PerfumeResponseDto.from(p));
//        }
//        for(Perfume p: perfumeListEn){
//            dtoList.add(PerfumeResponseDto.from(p));
//        }

        List<PerfumeResponseDto> dtoList = new LinkedList<>();
        for(Perfume p: perfumeList){
            dtoList.add(PerfumeResponseDto.from(p));
        }

        // 정렬 안하고 내보냄 => 필요하면 정렬하는 코드 추가 필요
        return new ArrayList<>(dtoList);

    }
    @Override
    public List<PerfumeResponseDto> getListKoKeyword(String keyword) {
        List<Perfume> perfumeListKo = perfumeRepository.findByKoNameLike("%"+keyword+"%");
        List<PerfumeResponseDto> dtoList = new LinkedList<>();
        for(Perfume p: perfumeListKo){
            dtoList.add(PerfumeResponseDto.from(p));
        }
        // 정렬 안하고 내보냄 => 필요하면 정렬하는 코드 추가 필요
        return new ArrayList<>(dtoList);
    }

    @Override
    public List<PerfumeResponseDto> getListEnKeyword(String keyword) {
        List<Perfume> perfumeListEn = perfumeRepository.findByEnNameLike("%"+keyword+"%");
        List<PerfumeResponseDto> dtoList = new LinkedList<>();
        for(Perfume p: perfumeListEn){
            dtoList.add(PerfumeResponseDto.from(p));
        }
        // 정렬 안하고 내보냄 => 필요하면 정렬하는 코드 추가 필요
        return new ArrayList<>(dtoList);
    }


    @Override
    public PerfumeResponseDto getPerfume(Long id) {
        Perfume perfume = perfumeRepository.findById(id).orElseThrow(PerfumeNotFoundException::new);
        return PerfumeResponseDto.from(perfume);
    }

    @Override
    public String getImg(String img) {
        return uploadPath + File.separator + "PERFUME" + File.separator + img;
    }

    @Override
    public List<PerfumeResponseDto> getBestList() {
        List<Perfume> perfumeList = perfumeRepository.findAllOrderByLikes();
        List<PerfumeResponseDto> list = new LinkedList<>();

        for(Perfume p: perfumeList){
            list.add(PerfumeResponseDto.from(p));
        }

        return list;
    }
}
