package com.perfume.perfumeservice.service.review;

import com.perfume.perfumeservice.domain.perfume.Perfume;
import com.perfume.perfumeservice.domain.review.Review;
import com.perfume.perfumeservice.domain.review.ReviewTag;
import com.perfume.perfumeservice.dto.review.ReviewRequestDto;
import com.perfume.perfumeservice.dto.review.ReviewResponseDto;

import java.util.List;
import java.util.Map;

public interface ReviewService {
    ReviewResponseDto writeReview(ReviewRequestDto reviewDto);
    ReviewResponseDto updateReview(Long id, ReviewRequestDto reviewDto);
    void deleteReview(Long id);
    List<ReviewResponseDto> getList(Long id, String order);
    String addLike(Map<String, Long> map);
    String addDisLike(Map<String, Long> map);
}
