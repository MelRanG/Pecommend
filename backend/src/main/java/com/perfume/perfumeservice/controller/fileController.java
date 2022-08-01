package com.perfume.perfumeservice.controller;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/file")
public class fileController {

    private ResourceLoader resLoader;

    @PostMapping(value = "/upload")
    public ResponseEntity<String> upload(@RequestParam Map<String, Object> map, MultipartHttpServletRequest request) throws Exception{

        Resource resource = resLoader.getResource("upload");

        MultipartFile mf = request.getFiles("files").get(0);
        String path = resource.getFile().getCanonicalPath() + "/" + mf.getOriginalFilename();
        mf.transferTo(new File(path));

        return new ResponseEntity<>(mf.getOriginalFilename(), HttpStatus.OK);
    }

    @GetMapping(value = "/getimg/{img}")
    public ResponseEntity<Resource> getImg(@PathVariable String img) throws Exception{

        Resource resource = resLoader.getResource("upload");

        String path = resource.getFile().getCanonicalPath() + "/" + img;

        Resource ret = new FileSystemResource(path);

        HttpHeaders header = new HttpHeaders();
        Path filePath = null;

        try {
            filePath = Paths.get(path);
            header.add("Content-Type", Files.probeContentType(filePath));
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new ResponseEntity<>(ret, header, HttpStatus.OK);
    }
}