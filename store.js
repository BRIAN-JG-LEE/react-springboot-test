// 1.store.js 2.액션 3.상태(State) 4.액션의 결과를 걸러내는 친구 5.export

//액션
export const increase = (username) => ({
  type: "INCREMENT",
  payload: username,
});
export const decrease = () => ({ type: "DECREMENT" });

//상태
const initstate = {
  username: "시행",
  number: 7,
};

//액션의 결과를 걸러내는 친구
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { number: state.number + 1, username: action.payload }; // return 되면 그걸 호출한 쪽에서 받는게 아니라 return 되는 순간 ui변경
    case "DECREMENT":
      return { number: state.number - 1 };
    default:
      return state;
  }
};

//export default
export default reducer;
