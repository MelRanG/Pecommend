INSERT into users(email, nickname, password, birthday, gender, mbti, role, token)
values('tttt@naver.com', 'asd', '123', '111', '남', 'sess', 'ROLE_USER', 'asdasd');
INSERT into users(email, nickname, password, birthday, gender, mbti, role, token)
values('tttt@naver.com1', 'asd1', '1231', '1121', '남', 'sess', 'ROLE_USER', 'asdasd');
INSERT into users(email, nickname, password, birthday, gender, mbti, role, token)
values('tttt@nave3r.com', 'as3d', '1233', '1131', '남', 'sess', 'ROLE_USER', 'asdasd');


INSERT into community(category, user_id, title, content) values (1,1, '제목1', '내용1');
INSERT into community(category, user_id, title, content) values (1,1, '제목2', '내용2');
INSERT into community(category, user_id, title, content) values (1,1, '제목3', '내용3');
INSERT into community(category, user_id, title, content) values (1,1, '제목4', '내용4');
INSERT into community(category, user_id, title, content) values (1,1, '제목5', '내용5');
INSERT into community(category, user_id, title, content) values (1,1, '제목6', '내용6');


INSERT into comment(community_id, user_id, content) values (1,1, '내용1');
INSERT into comment(community_id, user_id, content) values (2,2, '내용2');
INSERT into comment(community_id, user_id, content) values (1,1, '내용3');
INSERT into comment(community_id, user_id, content) values (2,2, '내용4');
INSERT into comment(community_id, user_id, content) values (1,1, '내용5');

INSERT into perfume(perfume_name_ko, perfume_name_en,likes, dislike) values ('향수이름1', 'perfume1',0,0);

