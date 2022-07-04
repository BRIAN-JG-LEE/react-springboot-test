import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UpdateForm = (props) => {
  const id = props.match.params.id;

  const [book, setBook] = useState({
    title: "",
    author: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/book/" + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);

  const changeValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value, // Computed Property Name 문법 : Key 값을 변수,함수 등을 통해 지정하는 문법
    });
  };

  const submitBook = (e) => {
    e.preventDefault(); // submit 이 action 을 안타고 자기 할일을 그만함.

    fetch("http://localhost:8080/book/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(book),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          props.history.push("/book/" + id);
        } else {
          alert("책 수정에 실패했습니다!");
        }
      });
  };

  return (
    <Form onSubmit={submitBook}>
      {/* submit 을 클릭하면 submitBook 함수 실행 or onClick 또한 사용가능 */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>제목</Form.Label>
        <Form.Control
          type="text"
          placeholder="제목을 입력해주세요"
          onChange={changeValue}
          name="title"
          value={book.title}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>작가</Form.Label>
        <Form.Control
          type="text"
          placeholder="작가의 이름을 입력해주세요"
          onChange={changeValue}
          name="author"
          value={book.author}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        등록
      </Button>
    </Form>
  );
};

export default UpdateForm;
