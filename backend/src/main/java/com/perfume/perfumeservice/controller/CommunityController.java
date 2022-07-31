package com.perfume.perfumeservice.controller;

import com.perfume.perfumeservice.dto.posts.PostsRequestDto;
import com.perfume.perfumeservice.dto.posts.PostsResponseDto;
import com.perfume.perfumeservice.service.community.CommunityService;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/community")
public class CommunityController {
    private final CommunityService communityService;

    @PostMapping("/like")
    public ResponseEntity<String> addLike(long userId, long postId){
        String result = communityService.addLike(userId, postId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


    @PostMapping("/upload")
    @ApiOperation(value = "게시글 작성(이미지 포함)")
    public ResponseEntity<String> writePostAndImage(@RequestPart(value = "dto") PostsRequestDto dto, @RequestPart(value = "file", required = false) MultipartFile[] file){
        String message = communityService.writePostAndImage(dto, file);
        return (message != null) ?
                ResponseEntity.status(HttpStatus.OK).body(message) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "게시글 조회하기")
    public ResponseEntity<PostsResponseDto> getPost(@PathVariable long id){
        return new ResponseEntity<>(communityService.getPost(id), HttpStatus.OK);
    }

    @PostMapping
    @ApiOperation(value = "게시글 작성")
    public ResponseEntity<PostsResponseDto> writePost(@RequestBody PostsRequestDto dto){
        PostsResponseDto response = communityService.writePost(dto);

        return (response != null) ?
                ResponseEntity.status(HttpStatus.OK).body(response) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @GetMapping("/list/user/{userid}")
    public ResponseEntity<List<PostsResponseDto>> getListByUser(@PathVariable Long userid){
        return new ResponseEntity<>(communityService.getListByUser(userid), HttpStatus.OK);
    }

    @GetMapping("/list/{category}")
    @ApiOperation(value = "게시글 목록 가져오기")
    public ResponseEntity<List<PostsResponseDto>> getList(@PathVariable int category){
        List<PostsResponseDto> postsDtoList = communityService.getList(category);
        return new ResponseEntity<>(postsDtoList, HttpStatus.OK);
    }

    @GetMapping("/list")
    @ApiOperation(value = "전체게시글 목록 가져오기")
    public ResponseEntity<List<PostsResponseDto>> getListAll(){
        List<PostsResponseDto> postsDtoList = communityService.getListAll();
        return new ResponseEntity<>(postsDtoList, HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Integer> updatePost(@PathVariable Long id, @RequestBody PostsRequestDto dto){
        communityService.updatePost(id, dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "게시글 삭제")
    public ResponseEntity<Integer> deletePost(@PathVariable Long id){
        communityService.deletePost(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
