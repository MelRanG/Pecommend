package com.perfume.perfumeservice.service.perfume;

import com.perfume.perfumeservice.domain.perfume.Perfume;
import com.perfume.perfumeservice.domain.perfume.PerfumeRepository;
import com.perfume.perfumeservice.domain.perfume.PerfumeTag;
import com.perfume.perfumeservice.domain.perfume.PerfumeTagRepository;
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
    private final PerfumeTagRepository perfumeTagRepository;


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

    @Override
    public List<PerfumeTagResponseDto> getThreePerfumeTags(Long id) {
        Perfume perfume = perfumeRepository.findById(id).orElseThrow(null);
        List<PerfumeTag> perfumeTags = perfumeTagRepository.findByPerfumeOrderByCountDesc(perfume);
        List<PerfumeTagResponseDto> dtoList = new LinkedList<>();
        int end = Math.min(perfumeTags.size(), 3);
        for(int i = 0; i < end; i++){
            dtoList.add(PerfumeTagResponseDto.from(perfumeTags.get(i)));
        }
        return dtoList;
    }

//    @Override
//    public List<PerfumeTagResponseDto> getHotTagAll() {
//        //List<PerfumeTag> perfumeTags = perfumeTagRepository.findAllByOrderByCountDesc();
//        // 여기 이 카운트를 가져올게 아니라 Tag들이 몇 번 나왓는지를 세야함 => 쿼리문 써야겠네..........
//        List<PerfumeTagResponseDto> dtoList = new LinkedList<>();
//        for(PerfumeTag pt : perfumeTags){
//            dtoList.add(PerfumeTagResponseDto.from(pt));
//        }
//        return dtoList;
//    }
}
