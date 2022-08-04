package com.perfume.perfumeservice.controller;

import com.perfume.perfumeservice.domain.perfume.*;
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


//    @GetMapping("/list")
//    @ApiOperation(value = "전체 향수 목록 가져오기")
//    public ResponseEntity<List<PerfumeResponseDto>> getListAll(){
//        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListAll();
//        return new ResponseEntity<>(perfumeDtoList, HttpStatus.OK);
//    }
//
//    @GetMapping("/list/{keyword}")
//    @ApiOperation(value = "향수 이름으로 검색")
//    public ResponseEntity<List<PerfumeResponseDto>> getListKeyword(@PathVariable String keyword){
//        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListKeyword(keyword);
//        return new ResponseEntity<>(perfumeDtoList, HttpStatus.OK);
//    }

    @GetMapping("/list")
    @ApiOperation(value = "전체 향수 목록 가져오기 (+ 해시태그)")
    public ResponseEntity<List<Map<String, Object>>> getListAll(){
        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListAll();
        List<Map<String, Object>> dtoList = new LinkedList<>();
        for(PerfumeResponseDto pd: perfumeDtoList){
            Map<String, Object> map = new LinkedHashMap<>();
            map.put("pDto",pd);
            List<PerfumeTagResponseDto> td = perfumeTagService.getThreePerfumeTags(pd.getPerfumeId());
            map.put("tDto", td);
            dtoList.add(map);
        }
        return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

    @GetMapping("/list/{keyword}")
    @ApiOperation(value = "향수 이름으로 검색 (+ 해시태그)")
    public ResponseEntity<List<Map<String, Object>>> getListKeyword(@PathVariable String keyword){
        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListKeyword(keyword);
        List<Map<String, Object>> dtoList = new LinkedList<>();
        for(PerfumeResponseDto pd: perfumeDtoList){
            Map<String, Object> map = new LinkedHashMap<>();
            map.put("pDto",pd);
            List<PerfumeTagResponseDto> td = perfumeTagService.getThreePerfumeTags(pd.getPerfumeId());
            map.put("tDto", td);
            dtoList.add(map);
        }
        return new ResponseEntity<>(dtoList, HttpStatus.OK);
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

//    @GetMapping("/{id}")
//    @ApiOperation(value = "향수 디테일 가져오기(노트, 태그, 좋아요/싫어요 목록만 추가)")
//    public ResponseEntity<Map<String, Object>> getPerfume(@PathVariable Long id){
//        PerfumeResponseDto pDto = perfumeService.getPerfume(id);
//        List<NoteResponseDto> nDto = noteService.getNotes(id);
//        List<PerfumeTagResponseDto> ptDto = perfumeTagService.getPerfumeTags(id);
//        List<PerfumeLikeResponseDto> plDto = perfumeLikeService.getLikePerfume(id);
//        List<PerfumeDislikeResponseDto> pdDto = perfumeLikeService.getDislikePerfume(id);
//
//        Map<String, Object> map = new HashMap<String, Object>();
//
//        map.put("nDto",nDto);
//        map.put("pDto",pDto);
//        map.put("ptDto", ptDto);
//        map.put("plDto", plDto);
//        map.put("pdDto", pdDto);
//
//        return new ResponseEntity<>(map, HttpStatus.OK);
//    }

    @GetMapping("/{id}")
    @ApiOperation(value = "향수 디테일 가져오기(노트, 태그, 좋아요/싫어요 목록, 좋아요/싫어요 비율만 추가)")
    public ResponseEntity<Map<String, Object>> getPerfume(@PathVariable Long id){
        PerfumeResponseDto pDto = perfumeService.getPerfume(id);
        List<NoteResponseDto> nDto = noteService.getNotes(id);
        List<PerfumeTagResponseDto> ptDto = perfumeTagService.getPerfumeTags(id);
        List<PerfumeLikeResponseDto> plDto = perfumeLikeService.getLikePerfume(id);
        List<PerfumeDislikeResponseDto> pdDto = perfumeLikeService.getDislikePerfume(id);
        // 좋아요 비율
        int likeRatio = 0;
        if(plDto.size() != 0 && (double) plDto.size() + (double) pdDto.size() != 0){
            likeRatio = (int) Math.round(plDto.size() / ((double) plDto.size() + (double) pdDto.size()) * 100);
        }

        Map<String, Object> map = new HashMap<String, Object>();

        map.put("nDto",nDto);
        map.put("pDto",pDto);
        map.put("ptDto", ptDto);
        map.put("plDto", plDto);
        map.put("pdDto", pdDto);
        map.put("likeRatio", likeRatio);// 좋아요 비율

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

    /*
    1. 좋아한 사람이 좋아한 향수
    2. 좋아한 사람이 싫어한 향수
    3. 싫어한 사람이 좋아한 향수
    4. 싫어한 사람이 싫어한 향수

    => i) 유저를 먼저 골라서(좋아한/싫어한 데이터가 2개 이상인 사람 중 랜덤?) 유저 당 향수 한 개씩 해서 4개 고르기 => 향수가 중복되서 나올 확률이 있음
    => ii) 좋아요/싫어요 한 모든 유저가 그 향수를 제외한 좋아한/싫어한 데이터를 가져와서 중복 수가 가장 많은 순서로 4개 고르기 => 계속 반복해서 같은 화면이 나올 확률이 있음
    => iii) 좋아요/싫어요 한 모든 유저가 그 향수를 제외한 좋아한/싫어한 데이터를 가져와서 중복을 제거한 후 랜덤으로 4개 고르기 => 그나마 나아보이지만 큰 데이터를 다뤄야해서 성능 문제가 있을 수 있음

    => 추천수 상위 10개를 골라서 4개를 랜덤으로~

    => 좋아요/좋아요
    => 1. 향수 id로 <좋아요> 한 유저 리스트 가져오기
    => 2. 유저 리스트에서 유저 한 명씩 <좋아요> 리스트 가져오기
    => 3. 리스트의 향수 종류를 카운트
    => 4. 상위 10개 추출(10개 이하 5개 이상이면 5번으로, 4개 이하면 5.5번으로)
    => 5. 그 중에 랜덤으로 4개 추출
    => 5.5 4개가 안 되면 일단 나온 것들만 보냄
    */

    @GetMapping("/likelike/{id}")
    @ApiOperation(value = "좋아한 사람이 좋아한 향수")
    public ResponseEntity<List<Map<String, Object>>> getLikeLike(@PathVariable Long id){
//        // 1. 향수 id로 <좋아요> 한 유저 리스트 가져오기
//        List<PerfumeLikeResponseDto> userList = perfumeLikeService.getLikePerfume(id);
//        // 2. 유저 리스트에서 유저 한 명씩 <좋아요> 리스트 가져오기
//        List<PerfumeLikeResponseDto> allLikeList = new LinkedList<>();
//        for(PerfumeLikeResponseDto pl : userList){
//            List<PerfumeLikeResponseDto> perfumeList = perfumeLikeService.getLikeUser(pl.getUserId());
//            allLikeList.addAll(perfumeList);
//        }
//        // 3. 리스트의 향수 종류를 카운트
        List<PerfumeLDCount> queryResult = perfumeLikeService.getLikeLike(id); // 상위 10개
        //List<PerfumeResponseDto> result = new LinkedList<>();
        Collections.shuffle(queryResult);
        List<PerfumeLDCount> shuffleResult = queryResult.subList(0, Math.min(queryResult.size(), 4));
        List<Map<String, Object>> result = new LinkedList<>();
        for(PerfumeLDCount plc: shuffleResult){
            Map<String, Object> map = new LinkedHashMap<>();
            long pid = plc.getPerfumeId();
            // perfume name 구하기
            String pname = perfumeService.getPerfume(pid).getKoName();
            // perfume img 구하기
            map.put("pId", plc);
            map.put("pName", pname);
            result.add(map);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/likedislike/{id}")
    @ApiOperation(value = "좋아한 사람이 싫어한 향수")
    public ResponseEntity<List<Map<String, Object>>> getLikeDislike(@PathVariable Long id){
        List<PerfumeLDCount> queryResult = perfumeLikeService.getLikeDislike(id); // 상위 10개
        Collections.shuffle(queryResult);
        List<PerfumeLDCount> shuffleResult = queryResult.subList(0, Math.min(queryResult.size(), 4));
        List<Map<String, Object>> result = new LinkedList<>();
        for(PerfumeLDCount plc: shuffleResult){
            Map<String, Object> map = new LinkedHashMap<>();
            long pid = plc.getPerfumeId();
            // perfume name 구하기
            String pname = perfumeService.getPerfume(pid).getKoName();
            // perfume img 구하기
            map.put("pId", plc);
            map.put("pName", pname);
            result.add(map);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/dislikelike/{id}")
    @ApiOperation(value = "싫어한 사람이 좋아한 향수")
    public ResponseEntity<List<Map<String, Object>>> getDislikeLike(@PathVariable Long id){
        List<PerfumeLDCount> queryResult = perfumeLikeService.getDislikeLike(id); // 상위 10개
        Collections.shuffle(queryResult);
        List<PerfumeLDCount> shuffleResult = queryResult.subList(0, Math.min(queryResult.size(), 4));
        List<Map<String, Object>> result = new LinkedList<>();
        for(PerfumeLDCount plc: shuffleResult){
            Map<String, Object> map = new LinkedHashMap<>();
            long pid = plc.getPerfumeId();
            // perfume name 구하기
            String pname = perfumeService.getPerfume(pid).getKoName();
            // perfume img 구하기
            map.put("pId", plc);
            map.put("pName", pname);
            result.add(map);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/dislikedislike/{id}")
    @ApiOperation(value = "싫어한 사람이 싫어한 향수")
    public ResponseEntity<List<Map<String, Object>>> getDislikeDislike(@PathVariable Long id){
        List<PerfumeLDCount> queryResult = perfumeLikeService.getDislikeDislike(id); // 상위 10개
        Collections.shuffle(queryResult);
        List<PerfumeLDCount> shuffleResult = queryResult.subList(0, Math.min(queryResult.size(), 4));
        List<Map<String, Object>> result = new LinkedList<>();
        for(PerfumeLDCount plc: shuffleResult){
            Map<String, Object> map = new LinkedHashMap<>();
            long pid = plc.getPerfumeId();
            // perfume name 구하기
            String pname = perfumeService.getPerfume(pid).getKoName();
            // perfume img 구하기
            map.put("pId", plc);
            map.put("pName", pname);
            result.add(map);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/ldlist/{id}")
    @ApiOperation(value = "좋아요싫어요좋아요싫어요 리스트(4개 모두)")
    public ResponseEntity<Map<String, Object>> getLDList(@PathVariable Long id){
        Map<String, Object> resultMap = new HashMap<String, Object>();
        // 좋아요좋아요
        List<PerfumeLDCount> queryResult = perfumeLikeService.getDislikeDislike(id); // 상위 10개
        Collections.shuffle(queryResult);
        List<PerfumeLDCount> shuffleResult = queryResult.subList(0, Math.min(queryResult.size(), 4));
        List<Map<String, Object>> llResult = new LinkedList<>();
        for(PerfumeLDCount plc: shuffleResult){
            Map<String, Object> map = new LinkedHashMap<>();
            long pid = plc.getPerfumeId();
            // perfume name 구하기
            String pname = perfumeService.getPerfume(pid).getKoName();
            // perfume img 구하기
            map.put("pId", plc);
            map.put("pName", pname);
            llResult.add(map);
        }
        resultMap.put("likelike", llResult);

        // 싫어요좋아요
        queryResult = perfumeLikeService.getDislikeLike(id); // 상위 10개
        Collections.shuffle(queryResult);
        shuffleResult = queryResult.subList(0, Math.min(queryResult.size(), 4));
        List<Map<String, Object>> dlResult = new LinkedList<>();
        for(PerfumeLDCount plc: shuffleResult){
            Map<String, Object> map = new LinkedHashMap<>();
            long pid = plc.getPerfumeId();
            // perfume name 구하기
            String pname = perfumeService.getPerfume(pid).getKoName();
            // perfume img 구하기
            map.put("pId", plc);
            map.put("pName", pname);
            dlResult.add(map);
        }
        resultMap.put("disikelike", dlResult);
        // 좋아요싫어요
        queryResult = perfumeLikeService.getLikeDislike(id); // 상위 10개
        Collections.shuffle(queryResult);
        shuffleResult = queryResult.subList(0, Math.min(queryResult.size(), 4));
        List<Map<String, Object>> ldResult = new LinkedList<>();
        for(PerfumeLDCount plc: shuffleResult){
            Map<String, Object> map = new LinkedHashMap<>();
            long pid = plc.getPerfumeId();
            // perfume name 구하기
            String pname = perfumeService.getPerfume(pid).getKoName();
            // perfume img 구하기
            map.put("pId", plc);
            map.put("pName", pname);
            ldResult.add(map);
        }
        resultMap.put("likedislike", ldResult);

        // 싫어요싫어요
        queryResult = perfumeLikeService.getDislikeDislike(id); // 상위 10개
        Collections.shuffle(queryResult);
        shuffleResult = queryResult.subList(0, Math.min(queryResult.size(), 4));
        List<Map<String, Object>> ddResult = new LinkedList<>();
        for(PerfumeLDCount plc: shuffleResult){
            Map<String, Object> map = new LinkedHashMap<>();
            long pid = plc.getPerfumeId();
            // perfume name 구하기
            String pname = perfumeService.getPerfume(pid).getKoName();
            // perfume img 구하기
            map.put("pId", plc);
            map.put("pName", pname);
            ddResult.add(map);
        }
        resultMap.put("dislikedislike", ddResult);

        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }


}
