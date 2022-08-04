package com.perfume.perfumeservice.domain.perfume;

import com.perfume.perfumeservice.domain.comment.Comment;
import com.perfume.perfumeservice.domain.comment.CommentLike;
import com.perfume.perfumeservice.domain.user.UserEntity;
import com.perfume.perfumeservice.dto.perfume.PerfumeLikeResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PerfumeLikeRepository extends JpaRepository<PerfumeLike, Long> {

    Optional<PerfumeLike> findByPerfumeAndUser(Perfume perfume, UserEntity user);

    // 향수 아이디를 빼는 작업 해야함.
    @Query(value =
            "SELECT p.perfume_id AS perfumeId, Count(p.user_id) AS userCount "
            + "FROM perfume_like p, "
            + "(SELECT user_id "
                    + "FROM perfume_like "
                    + "WHERE perfume_id = :id) sq "
            + "WHERE p.user_id = sq.user_id AND NOT p.perfume_id IN (:id) "
            + "GROUP BY p.perfume_id "
            + "ORDER BY Count(p.user_id) DESC "
            + "LIMIT 10"
            , nativeQuery = true
    )
    List<PerfumeLikeCount> findGroupByPerfumeWithJPQL(Long id);
}
