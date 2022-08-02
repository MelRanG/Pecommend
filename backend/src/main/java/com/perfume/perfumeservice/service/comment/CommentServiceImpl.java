package com.perfume.perfumeservice.service.comment;

import com.perfume.perfumeservice.domain.comment.Comment;
import com.perfume.perfumeservice.domain.comment.CommentLike;
import com.perfume.perfumeservice.domain.comment.CommentLikeRepository;
import com.perfume.perfumeservice.domain.comment.CommentRepository;
import com.perfume.perfumeservice.domain.community.Community;
import com.perfume.perfumeservice.domain.community.CommunityRepository;
import com.perfume.perfumeservice.domain.user.UserEntity;
import com.perfume.perfumeservice.domain.user.UserRepository;
import com.perfume.perfumeservice.dto.comment.CommentsRequestDto;
import com.perfume.perfumeservice.dto.comment.CommentsResponseDto;
import com.perfume.perfumeservice.exception.comment.CommentNotFoundException;
import com.perfume.perfumeservice.exception.community.PostNotFoundException;
import com.perfume.perfumeservice.exception.user.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Transactional
@Slf4j
@Service
public class CommentServiceImpl implements CommentService{

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final CommunityRepository communityRepository;
    private final CommentLikeRepository commentLikeRepository;

    @Override
    public List<CommentsResponseDto> getList(Long id) {

        return commentRepository.findByCommunityId(id).stream()
                .map(comment -> CommentsResponseDto.from(comment))
                .collect(Collectors.toList());
    }

    @Override
    public CommentsResponseDto writeComment(CommentsRequestDto dto) {
        UserEntity user = userRepository.findById(dto.getWriter()).orElseThrow(UserNotFoundException::new);
        Community community = communityRepository.findById(dto.getCommunityId()).orElseThrow(PostNotFoundException::new);

        return CommentsResponseDto.from(commentRepository.save(dto.toEntity(community, user)));
    }

    @Override
    public CommentsResponseDto updateComment(Long id, CommentsRequestDto dto) {
        UserEntity user = userRepository.findById(dto.getWriter()).orElseThrow(UserNotFoundException::new);
        Community community = communityRepository.findById(dto.getCommunityId()).orElseThrow(PostNotFoundException::new);
        Comment comment = dto.toEntity(community, user);

        Comment target = commentRepository.findById(id).orElseThrow(CommentNotFoundException::new);
        target.patch(comment);
        Comment updated = commentRepository.save(target);
        return CommentsResponseDto.from(updated);
    }

    @Override
    public void deleteComment(Long id) {
        Comment comment = commentRepository.findById(id).orElseThrow(CommentNotFoundException::new);
        commentRepository.delete(comment);
    }

    @Override
    public String addLike(Long userId, Long commentId) {
        UserEntity user = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        Comment comment = commentRepository.findById(commentId).orElseThrow(CommentNotFoundException::new);

        Optional<CommentLike> like = commentLikeRepository.findByUserAndComment(user, comment);
        if(like.isPresent()) return "CANCEL";
        else{
            commentLikeRepository.save(CommentLike.builder()
                            .comment(comment)
                            .userEntity(user)
                            .build());
            return "ADD";
        }
    }
}
