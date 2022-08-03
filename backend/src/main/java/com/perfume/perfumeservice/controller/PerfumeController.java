package com.perfume.perfumeservice.controller;

import com.perfume.perfumeservice.domain.perfume.Note;
import com.perfume.perfumeservice.domain.perfume.Perfume;
import com.perfume.perfumeservice.dto.perfume.*;
import com.perfume.perfumeservice.service.perfume.NoteService;
import com.perfume.perfumeservice.service.perfume.PerfumeLikeService;
import com.perfume.perfumeservice.service.perfume.PerfumeService;
import com.perfume.perfumeservice.service.perfume.PerfumeTagService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/perfume")
public class PerfumeController {

    private final PerfumeService perfumeService;
    private final NoteService noteService;
    private final PerfumeTagService perfumeTagService;

    private final PerfumeLikeService perfumeLikeService;


    @GetMapping("/list")
    @ApiOperation(value = "전체 향수 목록 가져오기")
    public ResponseEntity<List<PerfumeResponseDto>> getListAll(){
        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListAll();
        return new ResponseEntity<>(perfumeDtoList, HttpStatus.OK);
    }
//
//    @GetMapping("/list/{keyword}")
//    @ApiOperation(value = "향수 이름으로 검색")
//    public ResponseEntity<List<PerfumeResponseDto>> getListKeyword(@PathVariable String keyword){
//        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListKeyword(keyword);
//        return new ResponseEntity<>(perfumeDtoList, HttpStatus.OK);
//    }

//    안돼서 보류
//    @GetMapping("/list")
//    @ApiOperation(value = "전체 향수 목록 가져오기 (+해시태그)")
//    public ResponseEntity<List<Map<String, Object>>> getListAll(){
//        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListAll();
//        List<Map<String, Object>> dtoList = new LinkedList<>();
//        for(PerfumeResponseDto pd: perfumeDtoList){
//            Map<String, Object> map = new LinkedHashMap<>();
//            map.put("pDto",pd);
//            List<PerfumeTagResponseDto> td = perfumeTagService.getThreePerfumeTags(pd.getPerfumeId());
//            map.put("tDto", td);
//            dtoList.add(map);
//        }
//        return new ResponseEntity<>(dtoList, HttpStatus.OK);
//    }

    @GetMapping("/list/{keyword}")
    @ApiOperation(value = "향수 이름으로 검색")
    public ResponseEntity<List<PerfumeResponseDto>> getListKeyword(@PathVariable String keyword){
        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListKeyword(keyword);
        return new ResponseEntity<>(perfumeDtoList, HttpStatus.OK);
    }

//    @GetMapping("/{id}")
//    @ApiOperation(value = "향수 디테일 가져오기(노트, 평점, 이미지, 해시태그, 선호도 없음)")
//    public ResponseEntity<PerfumeResponseDto> getPerfume(@PathVariable Long id){
//        return new ResponseEntity<>(perfumeService.getPerfume(id), HttpStatus.OK);
//    }

//    @GetMapping("/{id}")
//    @ApiOperation(value = "향수 노트만 가져오기")
//    public ResponseEntity<List<NoteResponseDto>> getgetPerfume(@PathVariable Long id){
//        return new ResponseEntity<>(noteService.getNotes(id), HttpStatus.OK);
//    }

//    @GetMapping("/{id}")
//    @ApiOperation(value = "향수 디테일 가져오기(노트, 태그만 추가)")
//    public ResponseEntity<Map<String, Object>> getPerfume(@PathVariable Long id){
//        PerfumeResponseDto pDto = perfumeService.getPerfume(id);
//        List<NoteResponseDto> nDto = noteService.getNotes(id);
//        List<PerfumeTagResponseDto> ptDto = perfumeTagService.getPerfumeTags(id);
//        Map<String, Object> map = new HashMap<String, Object>();
//
//        map.put("nDto",nDto);
//        map.put("pDto",pDto);
//        map.put("ptDto", ptDto);
//
//        return new ResponseEntity<>(map, HttpStatus.OK);
//    }

    @GetMapping("/{id}")
    @ApiOperation(value = "향수 디테일 가져오기(노트, 태그, 좋아요/싫어요 목록만 추가)")
    public ResponseEntity<Map<String, Object>> getPerfume(@PathVariable Long id){
        PerfumeResponseDto pDto = perfumeService.getPerfume(id);
        List<NoteResponseDto> nDto = noteService.getNotes(id);
        List<PerfumeTagResponseDto> ptDto = perfumeTagService.getPerfumeTags(id);
        List<PerfumeLikeResponseDto> plDto = perfumeLikeService.getLikePerfume(id);
        List<PerfumeDislikeResponseDto> pdDto = perfumeLikeService.getDislikePerfume(id);

        Map<String, Object> map = new HashMap<String, Object>();

        map.put("nDto",nDto);
        map.put("pDto",pDto);
        map.put("ptDto", ptDto);
        map.put("plDto", plDto);
        map.put("pdDto", pdDto);

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    // 태그 등록(count 증가)은 review에서만

    // 좋아요 등록 => 파라미터랑 url 맞는지 모르겠음
//    @PostMapping("/like")
//    @ApiOperation(value = "향수 좋아요 등록")
//    public ResponseEntity<String> addLike(@RequestBody Map<String, Long> map){
//        Long perfumeId = map.get("perfumeId");
//        Long userId = map.get("userId");
//
//        String result = perfumeLikeService.addLike(perfumeId, userId);
//
//        return new ResponseEntity<>(result, HttpStatus.OK);
//
//    }

//    @PostMapping("/like")
//    @ApiOperation(value = "향수 좋아요 등록/좋아요 해제")
//    public ResponseEntity<String> addLike(@RequestBody Map<String, Long> map){
//        Long perfumeId = map.get("perfumeId");
//        Long userId = map.get("userId");
//
//        String result = perfumeLikeService.addLike(perfumeId, userId);
//        if(result.equals("ALREADY_EXISTS")){
//            result = perfumeLikeService.deleteLike(perfumeId, userId);
//        }
//        return new ResponseEntity<>(HttpStatus.OK);
//
//    }
    @PostMapping("/like")
    @ApiOperation(value = "향수 좋아요 등록/좋아요 해제")
    public ResponseEntity<String> addLike(@RequestBody Map<String, Long> map){
        Long perfumeId = map.get("perfumeId");
        Long userId = map.get("userId");

        String result = perfumeLikeService.addLike(perfumeId, userId);
        return new ResponseEntity<>(result, HttpStatus.OK);

    }

    @PostMapping("/dislike")
    @ApiOperation(value = "향수 싫어요 등록/싫어요 해제")
    public ResponseEntity<String> addDislike(@RequestBody Map<String, Long> map){
        Long perfumeId = map.get("perfumeId");
        Long userId = map.get("userId");

        String result = perfumeLikeService.addDislike(perfumeId, userId);
        return new ResponseEntity<>(result, HttpStatus.OK);

    }


//    @PostMapping("/dislike")
//    @ApiOperation(value = "향수 싫어요 등록")
//    public ResponseEntity<String> addDislike(@RequestBody Map<String, Long> map){
//        Long perfumeId = map.get("perfumeId");
//        Long userId = map.get("userId");
//
//        String result = perfumeLikeService.addDisLike(perfumeId, userId);
//        return new ResponseEntity<>(result, HttpStatus.OK);
//
//    }

//    @DeleteMapping("/like")
//    @ApiOperation(value = "향수 좋아요 해제")
//    public ResponseEntity<String> deleteLike(@RequestBody Map<String, Long> map){ // String 반환 하는 버전
//        Long perfumeId = map.get("perfumeId");
//        Long userId = map.get("userId");
//
//        String result = perfumeLikeService.deleteLike(perfumeId, userId);
//        return new ResponseEntity<>(result, HttpStatus.OK);
//    }

//    @DeleteMapping("/like")
//    @ApiOperation(value = "향수 좋아요 해제")
//    public ResponseEntity<String> deleteLike(@RequestBody Map<String, Long> map){ // String 반환 안 하는 버전
//        Long perfumeId = map.get("perfumeId");
//        Long userId = map.get("userId");
//
//        perfumeLikeService.deleteLike(perfumeId, userId);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

    @GetMapping("/likelist/perfume/{id}")
    @ApiOperation(value = "향수 좋아요 목록(param: 향수ID)")
    public ResponseEntity<List<PerfumeLikeResponseDto>> getLikePerfume(@PathVariable Long id){ // 일단 확인용으로 만들어 봄
        List<PerfumeLikeResponseDto> plDto = perfumeLikeService.getLikePerfume(id);
        return new ResponseEntity<>(plDto, HttpStatus.OK);

    }

    @GetMapping("/dislikelist/perfume/{id}")
    @ApiOperation(value = "향수 싫어요 목록(param: 향수ID)")
    public ResponseEntity<List<PerfumeDislikeResponseDto>> getDislikePerfume(@PathVariable Long id){ // 일단 확인용으로 만들어 봄
        List<PerfumeDislikeResponseDto> pdDto = perfumeLikeService.getDislikePerfume(id);
        return new ResponseEntity<>(pdDto, HttpStatus.OK);

    }

    @GetMapping("/likelist/user/{id}")
    @ApiOperation(value = "향수 좋아요 목록(param: 유저ID)")
    public ResponseEntity<List<PerfumeLikeResponseDto>> getLikeUser(@PathVariable Long id){ // 일단 확인용으로 만들어 봄
        List<PerfumeLikeResponseDto> plDto = perfumeLikeService.getLikeUser(id);
        return new ResponseEntity<>(plDto, HttpStatus.OK);

    }

    @GetMapping("/dislikelist/user/{id}")
    @ApiOperation(value = "향수 싫어요 목록(param: 유저ID)")
    public ResponseEntity<List<PerfumeDislikeResponseDto>> getDislikeUser(@PathVariable Long id){ // 일단 확인용으로 만들어 봄
        List<PerfumeDislikeResponseDto> pdDto = perfumeLikeService.getDislikeUser(id);
        return new ResponseEntity<>(pdDto, HttpStatus.OK);

    }

    @GetMapping("/likelist")
    @ApiOperation(value = "전체 향수 좋아요 목록")
    public ResponseEntity<List<PerfumeLikeResponseDto>> getPerfumeLikeAll(){ // 일단 확인용으로 만들어 봄
        List<PerfumeLikeResponseDto> plDto = perfumeLikeService.getLikeAll();
        return new ResponseEntity<>(plDto, HttpStatus.OK);
    }

    @GetMapping("/dislikelist")
    @ApiOperation(value = "전체 향수 싫어요 목록")
    public ResponseEntity<List<PerfumeDislikeResponseDto>> getPerfumeDislikeAll(){ // 일단 확인용으로 만들어 봄
        List<PerfumeDislikeResponseDto> pdDto = perfumeLikeService.getDislikeAll();
        return new ResponseEntity<>(pdDto, HttpStatus.OK);
    }

}
