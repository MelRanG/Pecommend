package com.perfume.perfumeservice.domain.perfume;

import com.perfume.perfumeservice.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PerfumeDislikeRepository extends JpaRepository<PerfumeDislike, Long> {

    Optional<PerfumeDislike> findByPerfumeAndUser(Perfume perfume, UserEntity user);
}
