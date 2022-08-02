import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteMemo } from "./store";

const List = () => {
const dispatch = useDispatch()
  let diary = useSelector((state) => {
    return state.diary;
  });

  const toggle = useState(false);



  return (
    <div className="memobox">
      {diary.map((x, i) => {
        return (
          <div key={x.id} className="memobox-memo">
            <p onClick={()=>{
                dispatch(deleteMemo(x.id))
            }}>X</p>
            <p>{x.date}</p>
            <div>{x.body}</div>
          </div>
        );
      })}
    </div>
  );
};
export default List;
