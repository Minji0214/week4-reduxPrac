import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { changeDisplay, addMemo } from "./store";

const Write = () => {
  const dispatch = useDispatch();
  let toggle = useSelector((state) => {
    return state.toggle;
  });
  let memoList = useSelector((state) => {
    return state.diary;
  });
  const [memoBody, setMemoBody] = useState("");

  function getToday() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
  }
  //todo 오브젝트를 만들고 변수를 그안에 집어넣은 다음 그걸 푸쉬할 예정
  const saveMemo = () => {
    let List = {
      id: memoList[memoList.length - 1].id + 1,
      date: getToday(),
      body: memoBody,
    };
    dispatch(addMemo(List));
    setMemoBody("");
    dispatch(changeDisplay());
    console.log(List)
  };
  return (
    <div>
      글을써봐요
      <input
        className="inputBox"
        value={memoBody}
        onChange={(e) => {
          setMemoBody(e.target.value);
        }}
        type="text"
      />
      <pre></pre>
      <button className="header-btn" onClick={saveMemo}>
        저장하기
      </button>
    </div>
  );
};
export default Write;
