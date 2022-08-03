package com.perfume.perfumeservice.domain.perfume;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {
    public List<Note> findByPerfume(Perfume perfume); // 향수 아이디로 찾기


}
