package com.perfume.perfumeservice.service.perfume;

import com.perfume.perfumeservice.dto.perfume.PerfumeTagResponseDto;

import java.util.List;

public interface PerfumeTagService {

    List<PerfumeTagResponseDto> getPerfumeTags(Long id);

    List<PerfumeTagResponseDto> getThreePerfumeTags(Long id);

   // List<PerfumeTagResponseDto> getHotTagAll();

}
