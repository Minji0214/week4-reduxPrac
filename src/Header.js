import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDisplay } from "./store";

const Header = () => {
  let toggle = useSelector((state) => {
    return state.toggle;
  });
  const dispatch = useDispatch();

  const writeMemo = () => {
    dispatch(changeDisplay());
    console.log(toggle);
  };
 

  return (
    <header className="header">
      <h3 className="header-logo">Memo? Memo!</h3>
      {toggle ? (
        null
      ) : (
       <button className="header-btn" onClick={writeMemo}>
          글쓰기
        </button>
      )}
    </header>
  );
};
export default Header;
