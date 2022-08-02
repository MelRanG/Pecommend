package com.perfume.perfumeservice.controller;

import com.perfume.perfumeservice.dto.perfume.PerfumeResponseDto;
import com.perfume.perfumeservice.service.perfume.PerfumeService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/perfume")
public class PerfumeController {

    private final PerfumeService perfumeService;

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

    @GetMapping("/{id}")
    @ApiOperation(value = "향수 디테일 가져오기(평점, 이미지, 해시태그, 선호도 없음)")
    public ResponseEntity<PerfumeResponseDto> getPerfume(@PathVariable Long id){
        return new ResponseEntity<>(perfumeService.getPerfume(id), HttpStatus.OK);
    }




}
