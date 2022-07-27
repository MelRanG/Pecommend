package com.perfume.perfumeservice.service.community;

import com.perfume.perfumeservice.domain.community.Community;
import com.perfume.perfumeservice.domain.community.CommunityImage;
import com.perfume.perfumeservice.domain.community.CommunityImageRepository;
import com.perfume.perfumeservice.domain.community.CommunityRepository;
import com.perfume.perfumeservice.domain.image.Image;
import com.perfume.perfumeservice.domain.user.UserEntity;
import com.perfume.perfumeservice.domain.user.UserRepository;
import com.perfume.perfumeservice.dto.posts.PostsRequestDto;
import com.perfume.perfumeservice.dto.posts.PostsResponseDto;
import com.perfume.perfumeservice.exception.community.NotImgException;
import com.perfume.perfumeservice.exception.community.PostNotFoundException;
import com.perfume.perfumeservice.exception.user.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@Service
public class CommunityServiceImpl implements CommunityService {
    private final CommunityImageRepository communityImageRepository;
    private final CommunityRepository communityRepository;
    private final UserRepository userRepository;

    @Value("${part4.upload.path}")
    private String uploadPath;

    @Override
    public String writePostAndImage(PostsRequestDto dto, MultipartFile[] uploadFile) {
        UserEntity user = userRepository.findById(dto.getWriter_id()).orElseThrow(UserNotFoundException::new);

        if(uploadFile == null || uploadFile.length == 0){
            communityRepository.save(dto.toEntity(user));
            return "SUCCESS";
        }
        return fileUpload(dto.toEntity(user), uploadFile);
    }

    @Override
    public PostsResponseDto writePost(PostsRequestDto dto) {
        UserEntity user = userRepository.findById(dto.getWriter_id()).orElseThrow(UserNotFoundException::new);
        return PostsResponseDto.from(communityRepository.save(dto.toEntity(user)));
    }

    @Override
    public PostsResponseDto getPost(long id){
        Community community = communityRepository.findById(id).orElseThrow(PostNotFoundException::new);
        return PostsResponseDto.from(community);
    }

    @Override
    public String fileUpload(Community community, MultipartFile[] uploadFile) {

        for (MultipartFile file: uploadFile) {
            if(!file.getContentType().startsWith("image")){
                log.warn("this file is not image type"); //에러페이지 처리?
                throw new NotImgException();
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
                return "FAIL";
            }
        }
        return "SUCCESS";
    }

    @Override
    public PostsResponseDto updatePost(Long id, PostsRequestDto dto) {
        UserEntity user = userRepository.findById(dto.getWriter_id()).orElseThrow(UserNotFoundException::new);
        Community community = dto.toEntity(user);
        log.info("id : {}, Community: {}", id, community.toString());
        Community target = communityRepository.findById(id).orElseThrow(PostNotFoundException::new);
//
//        //잘못된 요청 처리
//        if(target == null || id != target.getId()){
//            //400에러
//            log.info("잘못된 요청!");
//            return null;
//        }
        target.patch(community);
        Community updated = communityRepository.save(target);
        return PostsResponseDto.from(updated);
    }

    @Override
    public List<PostsResponseDto> getList(int category) {
        List<Community> c_list = communityRepository.findByCategory(category);
        List<PostsResponseDto> p_list = new LinkedList<>();

        for(Community c: c_list){
            p_list.add(PostsResponseDto.from(c));
        }

        return p_list;
    }

    @Override
    public String getImagePath(Long id) {
        CommunityImage communityImage = communityImageRepository.findById(id).orElseThrow(PostNotFoundException::new);
        return communityImage.getImage().getFilePath();

    }

    @Override
    public void deletePost(Long id) {
        Community community = communityRepository.findById(id).orElseThrow(PostNotFoundException::new);
        communityRepository.delete(community);
        return;
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
