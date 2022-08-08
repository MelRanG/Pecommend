package com.perfume.perfumeservice.domain.user;

import com.perfume.perfumeservice.domain.review.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
    Optional<UserEntity> findByNickname(String nickname);
    List<UserEntity> findByNicknameLike(String nickname);
    void deleteByEmail(String email);



}
