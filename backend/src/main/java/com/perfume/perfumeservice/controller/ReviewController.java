package com.perfume.perfumeservice.controller;

import com.perfume.perfumeservice.domain.perfume.PerfumeTagCount;
import com.perfume.perfumeservice.domain.perfume.Tag;
import com.perfume.perfumeservice.dto.perfume.TagResponseDto;
import com.perfume.perfumeservice.dto.review.ReviewRequestDto;
import com.perfume.perfumeservice.dto.review.ReviewResponseDto;
import com.perfume.perfumeservice.service.review.ReviewService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/review")
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    @ApiOperation(value = "향수 리뷰 작성")
    public ResponseEntity<ReviewResponseDto> writeReview(@RequestBody ReviewRequestDto reviewDto){
        return new ResponseEntity<>(reviewService.writeReview(reviewDto), HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    @ApiOperation(value = "향수 리뷰 수정")
    public ResponseEntity<ReviewResponseDto> updateReview(@PathVariable Long id, @RequestBody ReviewRequestDto reviewDto){

        return new ResponseEntity<>(reviewService.updateReview(id, reviewDto), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "향수 리뷰 삭제")
    public ResponseEntity<String> deleteReview(@PathVariable Long id){
        reviewService.deleteReview(id);
        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    @ApiOperation(value = "향수 리뷰 전체 조회")
    public ResponseEntity<List<ReviewResponseDto>> getList(@PathVariable Long id, @RequestParam String order){
        return new ResponseEntity<>(reviewService.getList(id, order), HttpStatus.OK);
    }

    @GetMapping("/list/like/{id}")
    @ApiOperation(value = "선호하는 사람이 작성한 향수 리뷰 조회")
    public ResponseEntity<List<ReviewResponseDto>> getLikeList(@PathVariable Long id){
        return new ResponseEntity<>(reviewService.getLikeList(id), HttpStatus.OK);
    }

    @GetMapping("/list/dislike/{id}")
    @ApiOperation(value = "비선호하는 사람이 작성한 향수 리뷰 조회")
    public ResponseEntity<List<ReviewResponseDto>> getDisLikeList(@PathVariable Long id){
        return new ResponseEntity<>(reviewService.getDisLikeList(id), HttpStatus.OK);
    }

    @PostMapping("/review/like")
    @ApiOperation(value = "향수 리뷰 좋아요")
    public ResponseEntity<String> addLike(@RequestBody Map<String, Long> map){
        return new ResponseEntity<>(reviewService.addLike(map), HttpStatus.OK);
    }

    @PostMapping("/review/dislike")
    @ApiOperation(value = "향수 리뷰 싫어요")
    public ResponseEntity<String> addDisLike(@RequestBody Map<String, Long> map){
        return new ResponseEntity<>(reviewService.addDisLike(map), HttpStatus.OK);
    }

    @GetMapping("/tag")
    @ApiOperation(value = "해시태그 전체 리스트")
    public ResponseEntity<List<TagResponseDto>> getTagAll(){
        List<Tag> tags = reviewService.getTagAll();
        List<TagResponseDto> tDto = new LinkedList<>();
        for(Tag tag : tags){
            tDto.add(TagResponseDto.from(tag));
        }
        return new ResponseEntity<>(tDto, HttpStatus.OK);

    }
}
