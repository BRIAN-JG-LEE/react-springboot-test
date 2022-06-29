import logo from "./logo.svg";
import "./App.css";

// 0. React 는 엔진 - 데이터변경감지에서 UI 그려주는
// 1. 실행 과정(index.html) -SPA 싱글페이지 어플리케이션
// 2. JSX 문법

// (1) return 시에 하나의 DOM만 리턴할 수 있다.
// (2) 변수선언은 let 혹은 const 로만 한다.
// (3) if 사용 대신에 -> 삼항연산자
// (4) 조건부 렌더링
// (5) CSS 디자인
//      -내부에 적는 방법
//      -외부 파일에 적는 방법
//      -라이브러리 사용(부트스트랩, component-styled)

let a = 14;
const b = 46;

function App() {
  let c;
  console.log(111, c);
  return (
    <div>
      <h1 className="box-style">
        헤딩태그{a === 14 ? "14입니다" : "14가 아닙니다"}
      </h1>
      <hr />
      안녕하십니까?{b} 이게 될까? 이게 되네...
    </div>
  );
}

export default App;
