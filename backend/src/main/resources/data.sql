INSERT into users(email, nickname, password, birthday, gender, mbti, role, token)
values('tttt@naver.com', 'asd', '123', '111', '남', 'sess', 'ROLE_USER', 'asdasd');
INSERT into users(email, nickname, password, birthday, gender, mbti, role, token)
values('tttt@naver.com1', 'asd1', '1231', '1121', '남', 'sess', 'ROLE_USER', 'asdasd');
INSERT into users(email, nickname, password, birthday, gender, mbti, role, token)
values('tttt@nave3r.com', 'as3d', '1233', '1131', '남', 'sess', 'ROLE_USER', 'asdasd');


INSERT into community(category, user_id, title, content) values (1,1, '제목1', '내용1');
INSERT into community(category, user_id, title, content) values (1,1, '제목2', '내용2');
INSERT into community(category, user_id, title, content) values (1,2, '제목3', '내용3');
INSERT into community(category, user_id, title, content) values (1,3, '제목4', '내용4');
INSERT into community(category, user_id, title, content) values (1,1, '제목5', '내용5');
INSERT into community(category, user_id, title, content) values (1,1, '제목6', '내용6');
INSERT into community(category, user_id, title, content) values (2,1, '제목7', '내용7');
INSERT into community(category, user_id, title, content) values (2,1, '제목8', '내용8');
INSERT into community(category, user_id, title, content) values (2,3, '제목9', '내용9');
INSERT into community(category, user_id, title, content) values (4,1, '제목10', '내용10');
INSERT into community(category, user_id, title, content) values (1,1, '제목11', '내용11');

INSERT INTO community_like(community_id, user_id) values (1, 1);
INSERT INTO community_like(community_id, user_id) values (2, 1);
INSERT INTO community_like(community_id, user_id) values (2, 2);
INSERT INTO community_like(community_id, user_id) values (3, 1);
INSERT INTO community_like(community_id, user_id) values (3, 2);
INSERT INTO community_like(community_id, user_id) values (3, 3);
INSERT INTO community_like(community_id, user_id) values (4, 1);


INSERT into comment(community_id, user_id, content) values (1,1, '내용1');
INSERT into comment(community_id, user_id, content) values (2,2, '내용2');
INSERT into comment(community_id, user_id, content) values (1,1, '내용3');
INSERT into comment(community_id, user_id, content) values (2,2, '내용4');
INSERT into comment(community_id, user_id, content) values (1,1, '내용5');

INSERT into perfume(perfume_name_ko, perfume_name_en,likes, dislike) values ('향수이름1', 'perfume1',0,0);
INSERT into perfume(perfume_name_ko, perfume_name_en,likes, dislike) values ('향수이름2', 'perfume2',0,0);
INSERT into perfume(perfume_name_ko, perfume_name_en,likes, dislike) values ('향수이름3', 'perfume3',0,0);
INSERT into perfume(perfume_name_ko, perfume_name_en,likes, dislike) values ('향수이름4', 'perfume4',0,0);
INSERT into perfume(perfume_name_ko, perfume_name_en,likes, dislike) values ('향수이름5', 'perfume5',0,0);

INSERT into material(material_name) values ('향료1');
INSERT into material(material_name) values ('향료2');
INSERT into material(material_name) values ('향료3');
INSERT into material(material_name) values ('향료4');

INSERT into note(perfume_id, material_id, note) values (1, 1, 'single');
INSERT into note(perfume_id, material_id, note) values (1, 2, 'single');
INSERT into note(perfume_id, material_id, note) values (1, 4, 'single');
INSERT into note(perfume_id, material_id, note) values (2, 4, 'top');
INSERT into note(perfume_id, material_id, note) values (2, 3, 'top');
INSERT into note(perfume_id, material_id, note) values (2, 1, 'middle');
INSERT into note(perfume_id, material_id, note) values (2, 2, 'middle');
INSERT into note(perfume_id, material_id, note) values (2, 4, 'base');
INSERT into note(perfume_id, material_id, note) values (2, 3, 'base');