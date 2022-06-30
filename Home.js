import React from "react";

const Home = (props) => {
  //   const board = props.board;
  // 구조분할
  const { board, setBoard, number, setNumber } = props;
  console.log(board);
  return (
    <div>
      <h1>나만의 홈페이지번호:{number}입니다.</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        번호 증가
      </button>
      <button
        onClick={() => {
          setBoard([]);
        }}
      >
        전체삭제
      </button>
      {board.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
