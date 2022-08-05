package com.perfume.perfumeservice.service.review;

import com.perfume.perfumeservice.domain.review.ReviewLike;
import com.perfume.perfumeservice.domain.review.ReviewLikeRepository;
import com.perfume.perfumeservice.domain.review.ReviewRepository;
import com.perfume.perfumeservice.domain.review.ReviewTagRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Transactional
@Slf4j
@Service
public class ReviewServiceImpl implements ReviewService{

    private final ReviewRepository reviewRepository;

    private final ReviewLikeRepository reviewLikeRepository;

    private final ReviewTagRepository reviewTagRepository;





}
