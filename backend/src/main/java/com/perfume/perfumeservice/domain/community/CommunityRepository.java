package com.perfume.perfumeservice.domain.community;


import com.perfume.perfumeservice.dto.posts.PostsDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityRepository extends JpaRepository<Community, Long> {
    List<PostsDto> findByCategory(int category);
}
