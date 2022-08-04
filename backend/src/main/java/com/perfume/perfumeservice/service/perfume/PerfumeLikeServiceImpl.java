package com.perfume.perfumeservice.service.perfume;

import com.perfume.perfumeservice.domain.perfume.*;
import com.perfume.perfumeservice.domain.user.UserEntity;
import com.perfume.perfumeservice.domain.user.UserRepository;
import com.perfume.perfumeservice.dto.perfume.PerfumeDislikeResponseDto;
import com.perfume.perfumeservice.dto.perfume.PerfumeLikeResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class PerfumeLikeServiceImpl implements PerfumeLikeService{
    private final PerfumeRepository perfumeRepository;

    private final UserRepository userRepository;
    private final PerfumeLikeRepository perfumeLikeRepository;

    private final PerfumeDislikeRepository perfumeDislikeRepository;



//    @Override
//    public String addLike(Long perfumeId, Long userId) {
//        Perfume perfume = perfumeRepository.findById(perfumeId).orElseThrow(null);
//        UserEntity user = userRepository.findById(userId).orElseThrow(null);
//
//        // insert
//        // like 체크
//        Optional<PerfumeLike> like = perfumeLikeRepository.findByPerfumeAndUser(perfume, user);
//        // dislike 체크
//        Optional<PerfumeDislike> dislike = perfumeDislikeRepository.findByPerfumeAndUser(perfume, user);
//
//        if(like.isPresent() || dislike.isPresent()) return "CANCEL";
//        else{
//            perfumeLikeRepository.save(PerfumeLike.builder()
//                    .perfume(perfume)
//                    .user(user)
//                    .build());
//            return "ADD";
//        }
//    }

//    @Override
//    public String addLike(Long perfumeId, Long userId) {
//        Perfume perfume = perfumeRepository.findById(perfumeId).orElseThrow(null);
//        UserEntity user = userRepository.findById(userId).orElseThrow(null);
//
//        // insert
//        // like 체크
//        Optional<PerfumeLike> like = perfumeLikeRepository.findByPerfumeAndUser(perfume, user);
//        // dislike 체크
//        Optional<PerfumeDislike> dislike = perfumeDislikeRepository.findByPerfumeAndUser(perfume, user);
//
//        if(like.isPresent()) return "ALREADY_EXISTS";
//            else if(dislike.isPresent()) return "CANCEL";
//        else{
//            perfumeLikeRepository.save(PerfumeLike.builder()
//                    .perfume(perfume)
//                    .user(user)
//                    .build());
//            return "ADD";
//        }
//    }

    @Override
    public String addLike(Long perfumeId, Long userId) {
        Perfume perfume = perfumeRepository.findById(perfumeId).orElseThrow(null);
        UserEntity user = userRepository.findById(userId).orElseThrow(null);

        // insert
        // like 체크
        Optional<PerfumeLike> like = perfumeLikeRepository.findByPerfumeAndUser(perfume, user);
        // dislike 체크
        Optional<PerfumeDislike> dislike = perfumeDislikeRepository.findByPerfumeAndUser(perfume, user);

        if(like.isPresent()) {
            perfumeLikeRepository.delete(like.get());
            return "DELETE";
        }
        else if(dislike.isPresent()) return "CANCEL";
        else{
            perfumeLikeRepository.save(PerfumeLike.builder()
                    .perfume(perfume)
                    .user(user)
                    .build());
            return "ADD";
        }
    }

    @Override
    public String addDislike(Long perfumeId, Long userId) {
        Perfume perfume = perfumeRepository.findById(perfumeId).orElseThrow(null);
        UserEntity user = userRepository.findById(userId).orElseThrow(null);

        // insert
        // dislike 체크
        Optional<PerfumeDislike> dislike = perfumeDislikeRepository.findByPerfumeAndUser(perfume, user);
        // like 체크
        Optional<PerfumeLike> like = perfumeLikeRepository.findByPerfumeAndUser(perfume, user);


        if(dislike.isPresent()) {
            perfumeDislikeRepository.delete(dislike.get());
            return "DELETE";
        }
        else if(like.isPresent()) return "CANCEL";
        else{
            perfumeDislikeRepository.save(PerfumeDislike.builder()
                    .perfume(perfume)
                    .user(user)
                    .build());
            return "ADD";
        }
    }

//    @Override
//    public String addDislike(Long perfumeId, Long userId) {
//        Perfume perfume = perfumeRepository.findById(perfumeId).orElseThrow(null);
//        UserEntity user = userRepository.findById(userId).orElseThrow(null);
//
//        // insert
//        // dislike 체크
//        Optional<PerfumeDislike> dislike = perfumeDislikeRepository.findByPerfumeAndUser(perfume, user);
//        // like 체크
//        Optional<PerfumeLike> like = perfumeLikeRepository.findByPerfumeAndUser(perfume, user);
//
//        if(dislike.isPresent() || like.isPresent()) return "CANCEL";
//        else{
//            perfumeDislikeRepository.save(PerfumeDislike.builder()
//                    .perfume(perfume)
//                    .user(user)
//                    .build());
//            return "ADD";
//        }
//    }



//    @Override
//    public String deleteLike(Long perfumeId, Long userId) { // String 반환 하는 버전
//        Perfume perfume = perfumeRepository.findById(perfumeId).orElseThrow(null);
//        UserEntity user = userRepository.findById(userId).orElseThrow(null);
//        Optional<PerfumeLike> like = perfumeLikeRepository.findByPerfumeAndUser(perfume, user);
//        if(!like.isPresent()) return "FAIL";
//        else{
//            perfumeLikeRepository.delete(like.get());
//            return "SUCCESS";
//        }
//    }

//    @Override
//    public void deleteLike(Long perfumeId, Long userId) { // String 반환 안 하는 버전
//        Perfume perfume = perfumeRepository.findById(perfumeId).orElseThrow(null);
//        UserEntity user = userRepository.findById(userId).orElseThrow(null);
//        PerfumeLike delLike = perfumeLikeRepository.findByPerfumeAndUser(perfume, user).orElseThrow(null);
//        perfumeLikeRepository.delete(delLike);
//
//    }
    @Override
    public List<PerfumeLikeResponseDto> getLikePerfume(Long id) {
        Perfume perfume = perfumeRepository.findById(id).orElseThrow(null);
        List<PerfumeLike> likeList = perfume.getLikes();
        List<PerfumeLikeResponseDto> dtoList = new LinkedList<>();
        for(PerfumeLike pl: likeList){
            dtoList.add(PerfumeLikeResponseDto.from(pl));
        }
        return dtoList;
    }

    @Override
    public List<PerfumeDislikeResponseDto> getDislikePerfume(Long id) {
        Perfume perfume = perfumeRepository.findById(id).orElseThrow(null);
        List<PerfumeDislike> dislikeList = perfume.getDislikes();
        List<PerfumeDislikeResponseDto> dtoList = new LinkedList<>();
        for(PerfumeDislike pd: dislikeList){
            dtoList.add(PerfumeDislikeResponseDto.from(pd));
        }
        return dtoList;
    }

    @Override
    public List<PerfumeLikeResponseDto> getLikeUser(Long id) {
        UserEntity user = userRepository.findById(id).orElseThrow(null);
        List<PerfumeLike> likeList = user.getPerfumeLikes();
        List<PerfumeLikeResponseDto> dtoList = new LinkedList<>();
        for(PerfumeLike pl: likeList){
            dtoList.add(PerfumeLikeResponseDto.from(pl));
        }
        return dtoList;
    }

    @Override
    public List<PerfumeDislikeResponseDto> getDislikeUser(Long id) {
        UserEntity user = userRepository.findById(id).orElseThrow(null);
        List<PerfumeDislike> dislikeList = user.getPerfumeDislikes();
        List<PerfumeDislikeResponseDto> dtoList = new LinkedList<>();
        for(PerfumeDislike pd: dislikeList){
            dtoList.add(PerfumeDislikeResponseDto.from(pd));
        }
        return dtoList;
    }


    @Override
    public List<PerfumeLikeResponseDto> getLikeAll() {
        List<PerfumeLike> likeList = perfumeLikeRepository.findAll();
        List<PerfumeLikeResponseDto> dtoList = new LinkedList<>();
        for(PerfumeLike pl: likeList){
            dtoList.add(PerfumeLikeResponseDto.from(pl));
        }
        return dtoList;
    }

    @Override
    public List<PerfumeDislikeResponseDto> getDislikeAll() {
        List<PerfumeDislike> dislikeList = perfumeDislikeRepository.findAll();
        List<PerfumeDislikeResponseDto> dtoList = new LinkedList<>();
        for(PerfumeDislike pd: dislikeList){
            dtoList.add(PerfumeDislikeResponseDto.from(pd));
        }
        return dtoList;
    }

    @Override
    public List<PerfumeLikeCount> getLikeLike(Long id) {
        return perfumeLikeRepository.findGroupByPerfumeWithJPQL(id);
    }


}
