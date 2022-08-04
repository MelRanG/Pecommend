package com.perfume.perfumeservice.dto.comment;

import com.perfume.perfumeservice.domain.comment.Comment;
import com.perfume.perfumeservice.domain.comment.CommentLike;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Builder
public class CommentsResponseDto {
    private Long id;
    private Long communityId;
    private String content;
    private Long writerId;
    private String writer;
    private int commentLike;

    public static CommentsResponseDto from(Comment comment){
        Set<CommentLike> set = comment.getCommentLikes();
        int likes = set == null ? 0 : set.size();

        return CommentsResponseDto.builder()
                .id(comment.getId())
                .communityId(comment.getId())
                .content(comment.getContent())
                .writerId(comment.getWriter().getId())
                .writer(comment.getWriter().getNickname())
                .commentLike(likes)
                .build();

    }
}
