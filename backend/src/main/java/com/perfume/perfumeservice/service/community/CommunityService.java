package com.perfume.perfumeservice.service.community;

import com.perfume.perfumeservice.domain.community.Community;
import com.perfume.perfumeservice.dto.posts.PostsRequestDto;
import com.perfume.perfumeservice.dto.posts.PostsResponseDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface CommunityService {
    String writePostAndImage(PostsRequestDto dto, MultipartFile[] file);
    PostsResponseDto writePost(PostsRequestDto dto);
    String fileUpload(Community community, MultipartFile[] file);
    PostsResponseDto updatePost(Long id, PostsRequestDto dto);
    List<PostsResponseDto> getList(int category);
    String getImagePath(Long id);
    PostsResponseDto getPost(long id);
    void deletePost(Long id);
}
