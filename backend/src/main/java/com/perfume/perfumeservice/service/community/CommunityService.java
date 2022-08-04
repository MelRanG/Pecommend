package com.perfume.perfumeservice.service.community;

import com.perfume.perfumeservice.dto.posts.PostsRequestDto;
import com.perfume.perfumeservice.dto.posts.PostsResponseDto;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.util.List;
import java.util.Map;

public interface CommunityService {
    String writePostAndImage(PostsRequestDto dto, MultipartFile[] file);
    PostsResponseDto writePost(PostsRequestDto dto);
    //String fileUpload(Community community, MultipartFile[] file);
    PostsResponseDto updatePost(Long id, PostsRequestDto dto);
    List<PostsResponseDto> getList(int category);
    String getImagePath(Long id);
    PostsResponseDto getPost(Long id);
    public String addLike(Long userId, Long communityId);
    List<PostsResponseDto> getListByUser(Long userId);
    void deletePost(Long id);

    List<PostsResponseDto> getListAll();

    List<PostsResponseDto> searchPostTitle(String title);

    List<PostsResponseDto> searchPostWriter(String writer);

    // add
    String fileUpload(Map<String, Object>map, MultipartHttpServletRequest request);
    String getImg(String img);
}
