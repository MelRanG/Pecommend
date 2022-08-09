package com.perfume.perfumeservice.domain.perfume;

import com.perfume.perfumeservice.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface PerfumeRepository extends JpaRepository<Perfume, Long> {

    public List<Perfume> findAllByOrderByKoName();

    public List<Perfume> findByKoNameLike(String keyword);

    public List<Perfume> findByEnNameLike(String keyword);

    public List<Perfume> findByKoNameLikeOrEnNameLike(String koName, String enName);

    @Query(nativeQuery = true, value =
        "select * from perfume p where p.perfume_id in(select perfume_id from perfume_tag where tag_id in(:tags)) order by p.perfume_id;"
    )
    public List<Perfume> findByTags(List<Long> tags);

    @Query(nativeQuery = true, value =
        "select * from perfume p order by (select count(*) from perfume_like pl where p.perfume_id=pl.perfume_id) desc"
    )
    public List<Perfume> findAllOrderByLikes();
    //public List<Perfume> findByKoNameLikeOrEnNameLike(String koName, String enName);

    public List<Perfume> findByKoNameLikeOrEnNameLikeIgnoreCase(String koName, String enName);

}
