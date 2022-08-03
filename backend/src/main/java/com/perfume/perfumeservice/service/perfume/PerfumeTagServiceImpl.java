package com.perfume.perfumeservice.service.perfume;

import com.perfume.perfumeservice.domain.perfume.Perfume;
import com.perfume.perfumeservice.domain.perfume.PerfumeRepository;
import com.perfume.perfumeservice.domain.perfume.PerfumeTag;
import com.perfume.perfumeservice.dto.perfume.PerfumeTagResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class PerfumeTagServiceImpl implements PerfumeTagService{

    private final PerfumeRepository perfumeRepository;


    @Override
    public List<PerfumeTagResponseDto> getPerfumeTags(Long id) {
        Perfume perfume = perfumeRepository.findById(id).orElseThrow(null);
        List<PerfumeTag> perfumeTags = perfume.getPerfumeTags();
        List<PerfumeTagResponseDto> dtoList = new LinkedList<>();
        for(PerfumeTag pt : perfumeTags){
            dtoList.add(PerfumeTagResponseDto.from(pt));
        }
        return dtoList;
    }
}
