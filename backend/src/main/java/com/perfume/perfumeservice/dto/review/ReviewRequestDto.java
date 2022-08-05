package com.perfume.perfumeservice.dto.review;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReviewRequestDto {
    private Long perfumeId;

}
