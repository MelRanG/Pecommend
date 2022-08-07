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
import java.util.*;
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
        List<CommentsResponseDto> result = new ArrayList<>();
        Map<Long, CommentsResponseDto> map = new HashMap<>();
        commentRepository.findCommentByCommunityId(id).stream()
                .forEach(c -> {
                    CommentsResponseDto dto = CommentsResponseDto.from(c);
                    map.put(dto.getId(), dto);
                    System.out.println("출력: " + map.get(dto.getId()).toString());
                    if(c.getParent() != null) {

                        List<CommentsResponseDto> childList = map.get(c.getParent().getId()).getChildren();
                        if(childList == null){
                            childList = new ArrayList<>();
                            childList.add(dto);
                        }else{
                            childList.add(dto);
                        }
                        map.get(c.getParent().getId()).addChildren(childList);
                    }
                    else result.add(dto);
                });
        return result;
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
        if(like.isPresent()) {
            commentLikeRepository.delete(like.get());
            return "CANCEL";
        }
        else{
            commentLikeRepository.save(CommentLike.builder()
                            .comment(comment)
                            .user(user)
                            .build());
            return "ADD";
        }
    }
}
