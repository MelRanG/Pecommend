package com.perfume.perfumeservice.domain.community;


import com.perfume.perfumeservice.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommunityRepository extends JpaRepository<Community, Long> {
    List<Community> findByCategory(int category);
    public List<Community> findAllByOrderByIdDesc();
    List<Community> findByTitleLike(String title);
    List<Community> findByWriter(UserEntity user);


}
