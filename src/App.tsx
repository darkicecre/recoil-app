import React from 'react';
import { RecoilRoot } from 'recoil';
import DoneList from './component/DoneList/DoneList';
import InprogressList from './component/InprogressList/InprogressList';
import logo from './logo.svg';
import NewList from './component/NewList/NewList';
import InputNewList from './component/InputNewList';
import "./App.scss";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header>
          <h1>To-do List</h1>
        </header>
        <InputNewList/>
        <div className="content">
          <NewList/>
          <InprogressList/>
          <DoneList/>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
