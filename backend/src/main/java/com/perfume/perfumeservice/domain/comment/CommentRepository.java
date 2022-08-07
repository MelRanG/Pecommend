package com.perfume.perfumeservice.domain.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    @Query(nativeQuery = true, value =
            "select * from Comment c left join Comment p " +
                    " on c.community_id = :communityId" +
                    " and c.parent_id = p.comment_id" +
                    " order by c.parent_id Is Null DESC, c.created_date ")
    List<Comment> findCommentByCommunityId(@Param("communityId") Long communityId);
}
