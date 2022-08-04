package com.perfume.perfumeservice.controller;

import com.perfume.perfumeservice.domain.perfume.Note;
import com.perfume.perfumeservice.domain.perfume.Perfume;
import com.perfume.perfumeservice.dto.perfume.NoteResponseDto;
import com.perfume.perfumeservice.dto.perfume.PerfumeResponseDto;
import com.perfume.perfumeservice.service.perfume.NoteService;
import com.perfume.perfumeservice.service.perfume.PerfumeService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/perfume")
public class PerfumeController {

    private final PerfumeService perfumeService;

    private final NoteService noteService;

    @GetMapping("/list")
    @ApiOperation(value = "전체 향수 목록 가져오기")
    public ResponseEntity<List<PerfumeResponseDto>> getListAll(){
        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListAll();
        return new ResponseEntity<>(perfumeDtoList, HttpStatus.OK);
    }

    @GetMapping("/list/{keyword}")
    @ApiOperation(value = "향수 이름으로 검색")
    public ResponseEntity<List<PerfumeResponseDto>> getListKeyword(@PathVariable String keyword){
        List<PerfumeResponseDto> perfumeDtoList = perfumeService.getListKeyword(keyword);
        return new ResponseEntity<>(perfumeDtoList, HttpStatus.OK);
    }

    // 디테일은 param이 perfume?
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

    @GetMapping("/{id}")
    @ApiOperation(value = "향수 디테일 가져오기(노트만 추가)")
    public ResponseEntity<Map<String, Object>> getPerfume(@PathVariable Long id){
        PerfumeResponseDto pDto = perfumeService.getPerfume(id);
        List<NoteResponseDto> nDto = noteService.getNotes(id);
        Map<String, Object> map = new HashMap<String, Object>();

        map.put("nDto",nDto);
        map.put("pDto",pDto);

        return new ResponseEntity<>(map, HttpStatus.OK);
    }


}
