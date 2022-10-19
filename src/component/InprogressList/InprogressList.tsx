import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inprogressListState, doneListState } from "../../recoil/listState";
import "./InprogressList.scss"

const InprogressList = () => {
  const inprogressList = useRecoilValue(inprogressListState);
  const changeDoneTodo = useSetRecoilState(doneListState);

  const handleChangeDoneAction = (item: any) => {
    if (!item) {
      return;
    }
    changeDoneTodo(item);
  };

  return(
    <div>
      <h1 className="inprogress-header">Inprogress</h1>
      <ul className="inprogress-list">
        {inprogressList.map((item:any)=>(
          <li key={item.id}>
            {item.content}
            <button onClick={()=>handleChangeDoneAction(item.id)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InprogressList;