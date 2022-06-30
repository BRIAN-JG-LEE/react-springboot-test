import React, { useEffect, useState } from "react";
import Home from "../home/Home";

const HomePage = () => {
  // HTTP 요청 ! JQuery ajax / fetch / axios(다운)
  const [board, setBoard] = useState([]);
  const [number, setNumber] = useState(0);

  // 빈 배열 한번만 실행
  useEffect(() => {
    //다운로드 가정 fetch(), axios(), ajax() 비동기
    let data = [
      { id: 1, title: "타이틀1", content: "콘텐츠1" },
      { id: 2, title: "타이틀2", content: "콘텐츠2" },
      { id: 3, title: "타이틀3", content: "콘텐츠3" },
    ];

    setBoard([...data]);
  }, []);

  return (
    <div>
      <Home
        board={board}
        setBoard={setBoard}
        number={number}
        setNumber={setNumber}
      />
    </div>
  );
};

export default HomePage;
