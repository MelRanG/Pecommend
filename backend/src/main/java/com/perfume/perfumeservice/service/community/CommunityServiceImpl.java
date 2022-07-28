package com.perfume.perfumeservice.service.community;

import com.perfume.perfumeservice.domain.community.Community;
import com.perfume.perfumeservice.domain.community.CommunityImage;
import com.perfume.perfumeservice.domain.community.CommunityImageRepository;
import com.perfume.perfumeservice.domain.community.CommunityRepository;
import com.perfume.perfumeservice.domain.image.Image;
import com.perfume.perfumeservice.dto.posts.PostsDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class CommunityServiceImpl implements CommunityService {
    private final CommunityImageRepository communityImageRepository;
    private final CommunityRepository communityRepository;

    @Value("${part4.upload.path}")
    private String uploadPath;

    @Override
    public String writePostAndImage(PostsDto dto, MultipartFile[] uploadFile) {
        if(dto.getId() != null || uploadFile.length == 0){
            return null;
        }
        return fileUpload(dto.toEntity(), uploadFile);
    }

    @Override
    public Community writePost(PostsDto dto) {
        if(dto.getId() != null){
            return null;
        }
        return communityRepository.save(dto.toEntity());
    }

    @Override
    public Community getPost(Long id){
        return communityRepository.findById(id).orElse(null);
    }

    @Override
    public String fileUpload(Community community, MultipartFile[] uploadFile) {

        for (MultipartFile file: uploadFile) {
            if(!file.getContentType().startsWith("image")){
                log.warn("this file is not image type"); //에러페이지 처리?
                return null;
            }

            String originalName = file.getOriginalFilename();
            //실제 파일명과 확장자만 가져온다.
            String uuidFileName = UUID.randomUUID().toString() + "_" + originalName;
            log.info("originalName " + originalName);

            //날짜 별 파일폴더 생성해서 저장
            String folderPath = makeFolder();
            String saveName = uploadPath + File.separator + folderPath + File.separator + uuidFileName;
            //Paths.get() 메서드는 특정 경로의 파일 정보를 가져온다.(경로 정의하기)
            Path savePath = Paths.get(saveName);
            log.info("savePath: " + savePath);
            log.info("saveName: " + saveName);
            try{
                file.transferTo(savePath);
                Image image = Image.builder()
                        .uploadFileName(uuidFileName)
                        .storeFileName(originalName)
                        .filePath(folderPath).build();


                CommunityImage communityImage = new CommunityImage(community, image);

                communityImageRepository.save(communityImage);
            }catch (IOException e){
                e.printStackTrace();
                return "Fail";
            }
        }
        return "Success";
    }

    @Override
    public Community updatePost(Long id, PostsDto dto) {
        Community community = dto.toEntity();
        log.info("id : {}, Community: {}", id, community.toString());
        Community target = communityRepository.findById(id).orElse(null);

        //잘못된 요청 처리
        if(target == null || id != target.getId()){
            //400에러
            log.info("잘못된 요청!");
            return null;
        }
        target.patch(community);
        Community updated = communityRepository.save(target);
        return updated;
    }

    @Override
    public List<PostsDto> getList(int category) {
        List<Community> communities = communityRepository.findByCategory(category);
        List<PostsDto> postsDtos = communities.stream().map(community -> community.createPostsDto(community)).collect(Collectors.toList());
        return postsDtos;
    }

    @Override
    public String getImagePath(Long id) {
        CommunityImage communityImage = communityImageRepository.findById(id).orElse(null);
        return communityImage.getImage().getFilePath();

    }

    @Override
    public int deletePost(Long id) {
        Community community = communityRepository.findById(id).orElse(null);
        communityRepository.delete(community);
        return 1;
    }

    //    public ImageDto updateImage(MultipartFile[] uploadFile) {
//        for (MultipartFile file : uploadFile) {
//        try {
//            String sourceFileName = file.getOriginalFilename();
//            String sourceFileNameExtension = FilenameUtils.getExtension(sourceFileName).toLowerCase();
//            String fileUrl = "이미지 저장 주소";
//            String destinationFileName = RandomStringUtils.randomAlphabetic(32) + "." + sourceFileNameExtension;
//            File destinationFile = new File(fileUrl + destinationFileName);
//            destinationFile.getParentFile().mkdirs();
//            file.transferTo(destinationFile);
//            Image image = new Image(destinationFileName, sourceFileName, fileUrl);
//            return ImageDto.builder()
//                    .map(getDto("isFileInserted", true, "uploadStatus", "AllSuccess"))
//                    .content(image)
//                    .build();
//        } catch (Exception e) {
//            return ImageDto.builder()
//                    .map(getDto("isFileInserted", false, "uploadStatus", "FileIsNotUploaded"))
//                    .content(null)
//                    .build();
//        }
//    }
//        return
//    }
    private String makeFolder() {
        String str = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
        //LocalDate을 문자열로 포맷
        String folderPath = str.replace("/", File.separator);

        //부모 디렉토리를 파라미터로 인스턴스 생성
        File uploadPathFolder = new File(uploadPath, folderPath);

        if(uploadPathFolder.exists() == false){
            uploadPathFolder.mkdirs();
        }
        return folderPath;
    }
}
