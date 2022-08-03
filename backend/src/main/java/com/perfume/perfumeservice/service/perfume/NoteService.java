package com.perfume.perfumeservice.service.perfume;

import com.perfume.perfumeservice.domain.perfume.Note;
import com.perfume.perfumeservice.domain.perfume.Perfume;
import com.perfume.perfumeservice.dto.perfume.NoteResponseDto;

import java.util.List;

public interface NoteService {
    // 향수 id로 검색해서 나온 note 리스트 반환
//    List<Perfume> getNotes(Long id);
    List<NoteResponseDto> getNotes(Long id);
}
