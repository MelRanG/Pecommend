package com.perfume.perfumeservice.dto.image;

import com.perfume.perfumeservice.domain.image.Image;
import lombok.*;

import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ImageDto {
    private UUID uploadFileName;
    private String storeFileName;
    private String filePath;

//    public Image toEntity(){
//        return Image.builder()
//                .uploadFileName(uploadFileName)
//                .storeFileName(storeFileName)
//                .filePath(filePath)
//                .build();
//    }
}
