// 글쓰기, 글목록보기 + 글삭제하기
// form 태그에서 1. value = {} 2.onChange = {} 3. name="" computePropertyNames 문법 (key 값 동적할당)

import React, { useState } from "react";
import styled from "styled-components";

const StyledItemBoxDiv = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 15px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListPage = () => {
  const [num, setNum] = useState(6);

  const [post, setPost] = useState({
    id: num,
    title: "",
    content: "",
  });

  const [posts, setPosts] = useState([
    { id: 1, title: "제목1", content: "내용1" },
    { id: 2, title: "제목2", content: "내용2" },
    { id: 3, title: "제목3", content: "내용3" },
    { id: 4, title: "제목4", content: "내용4" },
    { id: 5, title: "제목5", content: "내용5" },
  ]);

  const handleWrite = () => {
    // ListPage 의 setPosts 에 무엇을 담아야 할까?
    setPosts([...posts, post]);
    setNum(num + 1);
  };

  const handleForm = (e) => {
    // console.log(1, e.target.name);
    // console.log(2, e.target.value);

    // computePropertyNames 문법 (key 값 동적할당) -
    // ...post, 써야 기존값에 업데이트가 된다.
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>리스트페이지입니다.</h3>

      <form>
        <input
          type="text"
          placeholder="제목을 입력하세요..."
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요..."
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          write
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호:{post.id} , 제목:{post.title} , 내용:{post.content}
          </div>
          <button>delete</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
