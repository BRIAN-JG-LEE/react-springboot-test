import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(7);
  const [search, setSearch] = useState(0);

  const download = () => {
    let downloadData = 3;
    setData(downloadData);
  };
  // 실행시점
  // (1) App() 함수가 최초 실행될 때(마운트 될 때) App() 그림이 최초 그려질 때
  // (2) 상태 변수가 변경될 때 (그게 dependencyList 에 등록이 되어있어야 함)
  useEffect(() => {
    console.log("useEffect실행");
    download();
  }, [search]);

  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기!
      </button>
      <h1>Hello, my data is {search}</h1>
      <button
        onClick={() => {
          setSearch(search + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
