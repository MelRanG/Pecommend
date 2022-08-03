package com.perfume.perfumeservice.domain.perfume;

import com.perfume.perfumeservice.domain.comment.Comment;
import com.perfume.perfumeservice.domain.comment.CommentLike;
import com.perfume.perfumeservice.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PerfumeLikeRepository extends JpaRepository<PerfumeLike, Long> {

    Optional<PerfumeLike> findByPerfumeAndUser(Perfume perfume, UserEntity user);
}
