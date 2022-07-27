package com.perfume.perfumeservice.controller;

import com.perfume.perfumeservice.domain.community.Community;
import com.perfume.perfumeservice.dto.posts.PostsDto;
import com.perfume.perfumeservice.service.community.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/v1/community")
@CrossOrigin(
           // localhost:5500 과 127.0.0.1 구분
           origins = "http://localhost:3000/", // allowCredentials = "true" 일 경우, orogins="" 는 X
           allowCredentials = "true",
           allowedHeaders = "",
           methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.HEAD,RequestMethod.OPTIONS}
       )
public class CommunityController {

    @Autowired
    CommunityService service;

    @PostMapping("/upload")
    public ResponseEntity<String> writePostAndImage(@RequestPart(value = "dto") PostsDto dto, @RequestPart(value = "file") MultipartFile[] file){
        String message = service.writePostAndImage(dto, file);
        return (message != null) ?
                ResponseEntity.status(HttpStatus.OK).body(message) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PostMapping
    public ResponseEntity<Community> writePost(@RequestBody PostsDto dto){
        Community community = service.writePost(dto);
        System.out.println(community);
        return (community != null) ?
                ResponseEntity.status(HttpStatus.OK).body(community) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @GetMapping("/list/{category}")
    public ResponseEntity<List<PostsDto>> getList(@PathVariable int category){
        System.out.println(category);
        List<PostsDto> postsDtoList = service.getList(category);
        return new ResponseEntity<>(postsDtoList, HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Integer> updatePost(@PathVariable Long id, @RequestBody PostsDto dto) {
        service.updatePost(id, dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Integer> deletePost(@PathVariable Long id){
        service.deletePost(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
