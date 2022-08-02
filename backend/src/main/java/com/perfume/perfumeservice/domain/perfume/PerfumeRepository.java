package com.perfume.perfumeservice.domain.perfume;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PerfumeRepository extends JpaRepository<Perfume, Long> {

    public List<Perfume> findAllByOrderByKoName();

    public List<Perfume> findByKoNameLike(String keyword);

    public List<Perfume> findByEnNameLike(String keyword);




}
