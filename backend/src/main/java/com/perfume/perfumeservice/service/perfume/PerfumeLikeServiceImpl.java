package com.perfume.perfumeservice.service.perfume;

import com.perfume.perfumeservice.domain.perfume.Perfume;
import com.perfume.perfumeservice.domain.perfume.PerfumeDislike;
import com.perfume.perfumeservice.domain.perfume.PerfumeLike;
import com.perfume.perfumeservice.domain.perfume.PerfumeRepository;
import com.perfume.perfumeservice.dto.perfume.PerfumeDislikeResponseDto;
import com.perfume.perfumeservice.dto.perfume.PerfumeLikeResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional
public class PerfumeLikeServiceImpl implements PerfumeLikeService{
    private final PerfumeRepository perfumeRepository;



    @Override
    public List<PerfumeLikeResponseDto> getLike(Long id) {
        Perfume perfume = perfumeRepository.findById(id).orElseThrow(null);
        List<PerfumeLike> likeList = perfume.getLikes();
        List<PerfumeLikeResponseDto> dtoList = new LinkedList<>();
        for(PerfumeLike pl: likeList){
            dtoList.add(PerfumeLikeResponseDto.from(pl));
        }
        return dtoList;
    }

    @Override
    public List<PerfumeDislikeResponseDto> getDislike(Long id) {
        Perfume perfume = perfumeRepository.findById(id).orElseThrow(null);
        List<PerfumeDislike> dislikeList = perfume.getDislikes();
        List<PerfumeDislikeResponseDto> dtoList = new LinkedList<>();
        for(PerfumeDislike pd: dislikeList){
            dtoList.add(PerfumeDislikeResponseDto.from(pd));
        }
        return dtoList;
    }
}
