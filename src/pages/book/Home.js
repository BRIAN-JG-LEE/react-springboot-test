import React, { useEffect, useState } from "react";
import BookItem from "../../components/BookItem";

const Home = () => {
  const [books, setBooks] = useState([]);

  // 함수 실행시 최초 한번 실행되는 것 + 상태값이 변경될때마다 실행->따라서 어디에도 의존하지 않는 ,[] 걸어줘야 한번만 실행
  useEffect(() => {
    fetch("http://localhost:8080/book", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        console.log(11, res);
        setBooks(res);
      }); // 비동기 함수
  }, []);

  return (
    <div>
      <h2>나만의 인생책 등록하기</h2>
      <hr />
      {books.map((book) => (
        <BookItem key={book.id} book={book} /> // Key 값은 book.id
      ))}
    </div>
  );
};

export default Home;
