import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inprogressListState, newListState } from "../../recoil/listState";
import "./NewList.scss";

const NewList = () => {
  const newList = useRecoilValue(newListState);
  const changeInprogressTodo = useSetRecoilState(inprogressListState);

  const handleChangeInprogressAction = (item: any) => {
    if (!item) {
      return;
    }
    changeInprogressTodo(item);
  };

  return (
    <div>
      <h1 className="new-header">New</h1>
      <ul className="new-list">
        {newList.map((item: any) => (
          <li key={item.id}>
            {item.content}
            <button onClick={() => handleChangeInprogressAction(item.id)}>
              In-progress
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewList;
