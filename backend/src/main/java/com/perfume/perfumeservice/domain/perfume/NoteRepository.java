package com.perfume.perfumeservice.domain.perfume;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {

    // 맞는 건지 모르겠슴 test 해보면 알겠지
    public List<Note> findByPerfumeId(long perfumeId);

}
