package com.perfume.perfumeservice.controller;

import com.perfume.perfumeservice.service.community.CommunityService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class fileuploadController {

    @Value("${part4.upload.path}")
    private String uploadPath;
    private final CommunityService communityService;

//    @PostMapping("/upload")
//    public void uploadFile(@RequestPart MultipartFile[] file) throws IOException {
//        communityService.fileUpload(file);
//    }
//    @GetMapping("/image/{id}")
//    public Resource showImage(@PathVariable Long id) throws MalformedURLException {
//        String path = communityService.getImagePath(id);
//        return new UrlResource("file:/// " + Paths.get(uploadPath+"/"+path));
//    }

}
