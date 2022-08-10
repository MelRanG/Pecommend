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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.util.*;

@Service
@RequiredArgsConstructor
@Transactional
public class PerfumeServiceImpl implements PerfumeService {

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

    public Map<String, Object> getListAllPage(int page){
        // 페이지 범위 설정(일단 최소만)
//        page--;
//        if(page < 0){
//            page = 0;
//        }
        Page<Perfume> perfumePage = perfumeRepository.findAll(PageRequest.of(page, 16, Sort.by("koName")));
        // int pageCount = perfumePage.getTotalPages();
        long TotalCount = perfumePage.getTotalElements();
        List<Perfume> perfumes = perfumePage.getContent();
        List<PerfumeResponseDto> dtoList = new LinkedList<>();
        for(Perfume p: perfumes){
            dtoList.add(PerfumeResponseDto.from(p));
        }
        Map<String, Object> map = new HashMap<>();
        map.put("totalCnt", TotalCount);
        map.put("pDto", dtoList);
        return map;
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

        List<Perfume> perfumeList = perfumeRepository.findByKoNameLikeOrEnNameLikeIgnoreCase("%"+keyword+"%", "%"+keyword+"%");

        List<PerfumeResponseDto> dtoList = new LinkedList<>();
        for(Perfume p: perfumeList){
            dtoList.add(PerfumeResponseDto.from(p));
        }

        // 정렬 안하고 내보냄 => 필요하면 정렬하는 코드 추가 필요
        return new ArrayList<>(dtoList);

    }
//    @Override
//    public List<PerfumeResponseDto> getListKoKeyword(String keyword) {
//        List<Perfume> perfumeListKo = perfumeRepository.findByKoNameLike("%"+keyword+"%");
//        List<PerfumeResponseDto> dtoList = new LinkedList<>();
//        for(Perfume p: perfumeListKo){
//            dtoList.add(PerfumeResponseDto.from(p));
//        }
//        // 정렬 안하고 내보냄 => 필요하면 정렬하는 코드 추가 필요
//        return new ArrayList<>(dtoList);
//    }
//
//    @Override
//    public List<PerfumeResponseDto> getListEnKeyword(String keyword) {
//        List<Perfume> perfumeListEn = perfumeRepository.findByEnNameLike("%"+keyword+"%");
//        List<PerfumeResponseDto> dtoList = new LinkedList<>();
//        for(Perfume p: perfumeListEn){
//            dtoList.add(PerfumeResponseDto.from(p));
//        }
//        // 정렬 안하고 내보냄 => 필요하면 정렬하는 코드 추가 필요
//        return new ArrayList<>(dtoList);
//    }


    @Override
    public PerfumeResponseDto getPerfume(Long id) {
        Perfume perfume = perfumeRepository.findById(id).orElseThrow(PerfumeNotFoundException::new);
        return PerfumeResponseDto.from(perfume);
    }

    @Override
    public String getImg(String img) {
        return uploadPath + File.separator + "PERFUME" + File.separator + img + ".png";
    }

    @Override
    public List<PerfumeResponseDto> getBestList() {
        List<Perfume> perfumeList = perfumeRepository.findAllOrderByLikes();
        List<PerfumeResponseDto> list = new LinkedList<>();

        int idx = 0;
        for(Perfume p: perfumeList){
            list.add(PerfumeResponseDto.from(p));
            idx++;

            if(idx==12) break;
        }

        return list;
    }

    @Override
    public List<PerfumeResponseDto> getListByIdList(List<Long> perfumes) {
        List<Perfume> perfumeList = perfumeRepository.findByIds(perfumes);
        List<PerfumeResponseDto> dtoList = new LinkedList<>();
        for(Perfume p: perfumeList){
            dtoList.add(PerfumeResponseDto.from(p));
        }
        return dtoList;
    }

    @Override
    public List<PerfumeResponseDto> getByUserList(List<Long> users) {
        List<Perfume> perfumeList = perfumeRepository.findByUsers(users);
        List<PerfumeResponseDto> dtoList = new LinkedList<>();
        for(Perfume p: perfumeList){
            dtoList.add(PerfumeResponseDto.from(p));
        }
        return dtoList;
    }
}
