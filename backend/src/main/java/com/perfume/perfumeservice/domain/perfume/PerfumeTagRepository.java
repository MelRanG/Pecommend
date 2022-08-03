package com.perfume.perfumeservice.domain.perfume;

import com.perfume.perfumeservice.dto.perfume.PerfumeTagResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PerfumeTagRepository  extends JpaRepository<PerfumeTag, Long> {

    public List<PerfumeTag> findByPerfumeOrderByCountDesc(Perfume perfume);

}
