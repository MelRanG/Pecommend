package com.perfume.perfumeservice.domain.image;

import lombok.*;

import javax.persistence.*;
import java.util.UUID;

@Getter
@EqualsAndHashCode
@NoArgsConstructor
@Embeddable
public class Image {
    private String uploadFileName;
    private String storeFileName;
    private String filePath;

    @Builder
    public Image(String uploadFileName, String storeFileName, String filePath){
        this.uploadFileName = uploadFileName;
        this.storeFileName = storeFileName;
        this.filePath = filePath;
    }
}
