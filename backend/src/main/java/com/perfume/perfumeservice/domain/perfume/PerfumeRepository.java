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

    // 나이 해당하는 사람 가져오기 - 나중에는 합칠 것
    @Query(nativeQuery = true, value =
//            "SELECT user_id AS age FROM user HAVING ROUND((TO_DAYS(NOW()) - (TO_DAYS(birthday))) / 365) in(:ages);"
            "SELECT user_id AS id FROM users WHERE TRUNCATE(age, -1) IN (:ages)" // 잘 돌아가는 것 확인
    )
    public List<Long> findByAge(List<Integer> ages);
//    public List<Perfume> findByTags(List<Integer> ages, List<String> genders, List<String> mbtis);

    // 성별로 해당하는 사람 가져오기 - 나중에는 합칠 것
    @Query(nativeQuery = true, value =
            "SELECT user_id AS id FROM users WHERE gender IN (:genders)" // 잘 돌아가는 것 확인
    )
    public List<Long> findByGender(List<String> genders);

    // mbti로 해당하는 사람 가져오기 - 나중에는 합칠 것
    @Query(nativeQuery = true, value =
            "SELECT user_id AS id FROM users WHERE mbti IN (:mbtis)" // 잘 돌아가는 것 확인
    )
    public List<Long> findByMbti(List<String> mbtis);

    // 엠벼랑 나이로 거르기
    @Query(nativeQuery = true, value =
            "SELECT u.user_id AS id FROM users u, "
                    + "(SELECT user_id FROM users WHERE mbti IN (:mbtis)) sq1 "
                    + "WHERE u.user_id = sq1.user_id AND TRUNCATE(u.age, -1) IN (:ages)"
    )
    public List<Long> findByMbtiAndAge(List<String> mbtis, List<Integer> ages);

    @Query(nativeQuery = true, value =
//            "SELECT user_id AS age FROM user HAVING ROUND((TO_DAYS(NOW()) - (TO_DAYS(birthday))) / 365) in(:ages);"
//            "SELECT FORMATDATETIME(birthday, 'yyyy-MM-dd') FROM user;"
//            "SELECT to_date(birthday, 'YYYY-MM-DD') FROM user"
            "SELECT to_char(to_date(u.birthday, 'YYYY-mm-dd'), 'yyyy/mm/dd') FROM user u"
    )
    public List<String> test();

}
