package com.perfume.perfumeservice.controller;

import com.perfume.perfumeservice.domain.perfume.*;
import com.perfume.perfumeservice.dto.perfume.*;
import com.perfume.perfumeservice.service.perfume.NoteService;
import com.perfume.perfumeservice.service.perfume.PerfumeLikeService;
import com.perfume.perfumeservice.service.perfume.PerfumeService;
import com.perfume.perfumeservice.service.perfume.PerfumeTagService;
import com.perfume.perfumeservice.service.user.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.*;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/perfume")
public class PerfumeController {

    private final PerfumeService perfumeService;
    private final NoteService noteService;
    private final PerfumeTagService perfumeTagService;

    private final PerfumeLikeService perfumeLikeService;

    private final UserService userService;


//    @GetMapping("/list")
//    @ApiOperation(value = "전체 향수 목록 가져오기 (해시태그 X)")
//    public ResponseEntity<List<PerfumeResponseDto>> getListAll(){
//        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListAll();
//        return new ResponseEntity<>(perfumeDtoList, HttpStatus.OK);
//    }
//


//    @GetMapping("/list/{keyword}")
//    @ApiOperation(value = "향수 이름으로 검색 (해시태그 X)")
//    public ResponseEntity<List<PerfumeResponseDto>> getListKeyword(@PathVariable String keyword){
//        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListKeyword(keyword);
//        return new ResponseEntity<>(perfumeDtoList, HttpStatus.OK);
//    }
//

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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @GetMapping("/list/page/{page}")
    @ApiOperation(value = "전체 향수 목록, 개수 가져오기 - Page (페이징, 개수 변경 불가능, 페이징 번호 제한X)")
    public ResponseEntity<Map<String, Object>> getListPages(@PathVariable int page){
        Map<String, Object> perfumes = perfumeService.getListAllPage(page);
        // 해시태그
        List<PerfumeResponseDto> pDto = (List<PerfumeResponseDto>) perfumes.get("pDto"); //perfumeDto
        long totalCnt = (long) perfumes.get("totalCnt"); // totalCnt
        List<Map<String, Object>> dtoList = new LinkedList<>();
        for (PerfumeResponseDto pd: pDto){
            Map<String, Object> map = new LinkedHashMap<>();
            map.put("pDto",pd);
            List<PerfumeTagResponseDto> td = perfumeTagService.getThreePerfumeTags(pd.getPerfumeId());
            map.put("tDto", td);
            dtoList.add(map);
        }
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("totalCnt", totalCnt);
        map.put("dtoList", dtoList);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    @GetMapping("/list/{keyword}")
//    @ApiOperation(value = "향수 이름으로 검색 (+ 해시태그 + 대소문자 무시)")
//    public ResponseEntity<List<Map<String, Object>>> getListKeyword(@PathVariable String keyword){
//        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListKeyword(keyword);
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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @GetMapping("/list/{keyword}/page/{page}")
    @ApiOperation(value = "향수 이름으로 검색 - page (페이징, 개수 변경 불가능, 페이징 번호 제한X)")
    public ResponseEntity<Map<String, Object>> getListPages(@PathVariable String keyword, @PathVariable int page){
        Map<String, Object> perfumes = perfumeService.getListKeywordPage(keyword, page);

        //Map<String, Object> perfumes = perfumeService.getListKeywordPage(keyword, page);
        // 해시태그
        List<PerfumeResponseDto> pDto = (List<PerfumeResponseDto>) perfumes.get("pDto"); //perfumeDto
        long totalCnt = (long) perfumes.get("totalCnt"); // totalCnt
        List<Map<String, Object>> dtoList = new LinkedList<>();
        for (PerfumeResponseDto pd: pDto){
            Map<String, Object> map = new LinkedHashMap<>();
            map.put("pDto",pd);
            List<PerfumeTagResponseDto> td = perfumeTagService.getThreePerfumeTags(pd.getPerfumeId());
            map.put("tDto", td);
            dtoList.add(map);
        }
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("totalCnt", totalCnt);
        map.put("dtoList", dtoList);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @GetMapping("/list/hashtag")
    @ApiOperation(value = "해시태그로 향수 검색")
    public ResponseEntity<List<Map<String, Object>>> getListHashTag(@RequestParam List<Long> tags){
        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListHashTag(tags);
        List<Map<String, Object>> dtoList = new LinkedList<>();
        for(PerfumeResponseDto pd: perfumeDtoList){
            Map<String, Object> map = new LinkedHashMap<>();
            map.put("pDto", pd);
            List<PerfumeTagResponseDto> td = perfumeTagService.getThreePerfumeTags(pd.getPerfumeId());
            map.put("tDto", td);
            dtoList.add(map);
        }

        return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

    // limit으로 페이징 하기 -------------------------------------------------------------------------------------------------------------------------

    @PostMapping("/list/filter")
    @ApiOperation(value = "필터로 향수 목록 가져오기 (해시태그 있음)")
    public ResponseEntity<List<Map<String, Object>>> getListFilter(@RequestBody Map<String, Object> map){
        List<Integer> ages = (List<Integer>) map.get("ages");
        List<String> genders = (List<String>) map.get("gender");
        List<String> mbtis = (List<String>) map.get("mbti");

        List<Long> users = userService.getUserByMbtiAndGenderAndAge(mbtis, genders, ages); // 조건에 맞는 유저 가져오기

        // 1) 이렇게 하거나
//
//        // 유저가 좋아하는 향수 id 찾기 // 일단 좋아요가 많은 순서로 정렬
//        List<Long> pIdList = perfumeLikeService.getLikeByUserList(users);
//
//        // 근데 여기서 가져오면서 강제적으로 orderby가 되고 있음 ------------------------------------------------------------------------------------ 수정할 것
//        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListByIdList(pIdList);

        // 2) 이렇게 하거나 - 이걸로
        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getByUserList(users);
        List<Map<String, Object>> dtoList = new LinkedList<>(); // 결과
        for(PerfumeResponseDto pd: perfumeDtoList){
            Map<String, Object> temp = new LinkedHashMap<>();
            temp.put("pDto",pd);
            List<PerfumeTagResponseDto> td = perfumeTagService.getThreePerfumeTags(pd.getPerfumeId());
            temp.put("tDto", td);
            dtoList.add(temp);
        }
        return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "향수 디테일 가져오기(노트, 태그, 좋아요/싫어요 목록, 좋아요/싫어요 비율, 좋아요수/싫어요수만 추가)")
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
        map.put("likeCnt", plDto.size());
        map.put("dislikeCnt", pdDto.size());

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

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

//    @GetMapping("/likelist/perfume/{id}")
//    @ApiOperation(value = "향수 좋아요 목록(param: 향수ID)")
//    public ResponseEntity<List<PerfumeLikeResponseDto>> getLikePerfume(@PathVariable Long id){ // 일단 확인용으로 만들어 봄
//        List<PerfumeLikeResponseDto> plDto = perfumeLikeService.getLikePerfume(id);
//        return new ResponseEntity<>(plDto, HttpStatus.OK);
//
//    }
//
//    @GetMapping("/dislikelist/perfume/{id}")
//    @ApiOperation(value = "향수 싫어요 목록(param: 향수ID)")
//    public ResponseEntity<List<PerfumeDislikeResponseDto>> getDislikePerfume(@PathVariable Long id){ // 일단 확인용으로 만들어 봄
//        List<PerfumeDislikeResponseDto> pdDto = perfumeLikeService.getDislikePerfume(id);
//        return new ResponseEntity<>(pdDto, HttpStatus.OK);
//
//    }
//
//    @GetMapping("/likelist/user/{id}")
//    @ApiOperation(value = "향수 좋아요 목록(param: 유저ID)")
//    public ResponseEntity<List<PerfumeLikeResponseDto>> getLikeUser(@PathVariable Long id){ // 일단 확인용으로 만들어 봄
//        List<PerfumeLikeResponseDto> plDto = perfumeLikeService.getLikeUser(id);
//        return new ResponseEntity<>(plDto, HttpStatus.OK);
//
//    }
//
//    @GetMapping("/dislikelist/user/{id}")
//    @ApiOperation(value = "향수 싫어요 목록(param: 유저ID)")
//    public ResponseEntity<List<PerfumeDislikeResponseDto>> getDislikeUser(@PathVariable Long id){ // 일단 확인용으로 만들어 봄
//        List<PerfumeDislikeResponseDto> pdDto = perfumeLikeService.getDislikeUser(id);
//        return new ResponseEntity<>(pdDto, HttpStatus.OK);
//
//    }
////
//    @GetMapping("/likelist")
//    @ApiOperation(value = "전체 향수 좋아요 목록")
//    public ResponseEntity<List<PerfumeLikeResponseDto>> getPerfumeLikeAll(){ // 일단 확인용으로 만들어 봄
//        List<PerfumeLikeResponseDto> plDto = perfumeLikeService.getLikeAll();
//        return new ResponseEntity<>(plDto, HttpStatus.OK);
//    }
////
//    @GetMapping("/dislikelist")
//    @ApiOperation(value = "전체 향수 싫어요 목록")
//    public ResponseEntity<List<PerfumeDislikeResponseDto>> getPerfumeDislikeAll(){ // 일단 확인용으로 만들어 봄
//        List<PerfumeDislikeResponseDto> pdDto = perfumeLikeService.getDislikeAll();
//        return new ResponseEntity<>(pdDto, HttpStatus.OK);
//    }

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
        resultMap.put("dislikelike", dlResult);
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

    // 인기 해시태그 가져오기
    @GetMapping("/hottag")
    @ApiOperation(value = "인기 해시태그 리스트")
    public ResponseEntity<List<Map<String, Object>>> getHotTagAll(){
//        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListAll();
        List<PerfumeTagCount> queryResult = perfumeTagService.getHotTagAll(); // 해시태그 인기순
        List<Map<String, Object>> result = new LinkedList<>();
        for(PerfumeTagCount ptc: queryResult){
            Map<String, Object> map = new LinkedHashMap<>();
            long tid = ptc.getTagId();
            String tname = perfumeTagService.getPerfumeTagName(tid);
            map.put("tId", ptc);
            map.put("tName", tname);
            result.add(map);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);

    }

    @GetMapping("/getimg/{name}")
    @ApiOperation(value = "향수 이미지 가져오기")
    public ResponseEntity<Resource> getImg(@PathVariable String name){
        String img = name.replaceAll(" ", "_");

        String path = perfumeService.getImg(img);

        Resource resource = new FileSystemResource(path);

        HttpHeaders header = new HttpHeaders();
        Path filePath = null;

        try {
            filePath = Paths.get(path);
            header.add("Content-Type", Files.probeContentType(filePath));
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new ResponseEntity<>(resource, header, HttpStatus.OK);
    }

    @GetMapping("/likelist/{userId}")
    @ApiOperation(value = "선호 리스트")
    public ResponseEntity<List<PerfumeResponseDto>> getLikeList(@PathVariable Long userId){
        return new ResponseEntity<>(perfumeLikeService.getLikeList(userId), HttpStatus.OK);
    }

    @GetMapping("/dislikelist/{userId}")
    @ApiOperation(value = "비선호 리스트")
    public ResponseEntity<List<PerfumeResponseDto>> getDisLikeList(@PathVariable Long userId){
        return new ResponseEntity<>(perfumeLikeService.getDisLikeList(userId), HttpStatus.OK);
    }

    @GetMapping("/best")
    @ApiOperation(value = "인기 향수 리스트 12개")
    public ResponseEntity<List<Map<String, Object>>> getBestList(){
        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getBestList();
        List<Map<String, Object>> dtoList = new LinkedList<>();
        for(PerfumeResponseDto pd: perfumeDtoList){
            Map<String, Object> map = new LinkedHashMap<>();
            map.put("pDto", pd);
            List<PerfumeTagResponseDto> td = perfumeTagService.getThreePerfumeTags(pd.getPerfumeId());
            map.put("tDto", td);
            dtoList.add(map);
        }

        return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

    @GetMapping("/check/like")
    @ApiOperation(value = "이 향수를 좋아/싫어 하는지 체크")
    public ResponseEntity<Integer> checkLike(@RequestParam Long userId, Long perfumeId){
        return new ResponseEntity<>(perfumeLikeService.checkLike(userId, perfumeId), HttpStatus.OK);
    }
}
