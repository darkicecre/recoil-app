import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { newListState } from '../recoil/listState';

const InputNewList = () =>{
  const addNewTodo = useSetRecoilState(newListState);
  const [text,setText] = useState<string>('');

  const handleAddNewAction = () => {
    if(!text){
      return;
    }
    addNewTodo(text);
    setText('')
  }

  const handleChangeText = (e:any) => {
    setText(e.target.value);
  }

  return(
    <div>
      <input type="text" placeholder='Enter new to-do' value={text} onChange={handleChangeText} />
      <button onClick={handleAddNewAction}>Add</button>
    </div>
  )
}

export default InputNewList;
