package com.perfume.perfumeservice.service.community;

import com.perfume.perfumeservice.domain.community.Community;
import com.perfume.perfumeservice.dto.posts.PostsDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface CommunityService {
    String writePostAndImage(PostsDto dto, MultipartFile[] file);
    Community writePost(PostsDto dto);
    String fileUpload(Community community, MultipartFile[] file);
    Community updatePost(Long id, PostsDto dto);
    List<PostsDto> getList(int category);
    String getImagePath(Long id);
}
