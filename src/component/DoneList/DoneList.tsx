import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { doneListState, removeListState } from "../../recoil/listState";
import "./DoneList.scss";

const DoneList = () => {
  const doneList = useRecoilValue(doneListState);
  const removeTodo = useSetRecoilState(removeListState);

  const handleRemoveAction = (item: any) => {
    if (!item) {
      return;
    }
    removeTodo(item);
  };

  return (
    <div>
      <h1 className="done-header">Done</h1>
      <ul className="done-list">
        {doneList.map((item: any) => (
          <li key={item.id}>
            {item.content}
            <button onClick={() => handleRemoveAction(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoneList;
