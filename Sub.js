import React, { useState } from "react";

const Sub = () => {
  const [number, setNumber] = useState(10);
  const [users, setUsers] = useState([
    { id: 1, name: "가나다" },
    { id: 2, name: "라마바" },
    { id: 3, name: "사아자" },
  ]);

  const add = () => {
    setNumber(number - 1);
    console.log("minus=", number);
  };

  const sample =
    // { id: 1, name: "홍길동" },
    // { id: 2, name: "장보고" },
    // { id: 3, name: "임꺽정" },
    // { id: 4, name: "허준" },
    { id: 3, name: "시행" };

  const newSample = users.map((user) =>
    user.id === sample.id ? { ...user, ...sample } : user
  );

  const download = () => {
    console.log(users);
    console.log(newSample);

    setUsers(newSample);
  };

  return (
    <div>
      <h2>Sub.js 입니다</h2>
      <h3>{number}</h3>
      <button onClick={add}>빼기 계산</button>
      <button onClick={download}>명단 다운로드</button>
      {users.map((u) => (
        <h4>
          {u.id},{u.name}
        </h4>
      ))}
    </div>
  );
};

export default Sub;
