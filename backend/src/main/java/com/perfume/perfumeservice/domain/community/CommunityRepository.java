package com.perfume.perfumeservice.domain.community;


import com.perfume.perfumeservice.dto.posts.PostsRequestDto;
import com.perfume.perfumeservice.dto.posts.PostsResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityRepository extends JpaRepository<Community, Long> {
    List<Community> findByCategory(int category);
}
