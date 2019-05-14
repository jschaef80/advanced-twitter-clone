import React, { Component } from 'react';
import './App.css';
import LeftComponent from './LeftComponent/index.js';
import MiddleComponent from './MiddleComponent/index.js';
import RightComponent from './RightComponent/index.js';
import NavComponent from './NavComponent/index.js';


function App(){
   return (
    <div className='app'>
      <NavComponent></NavComponent>
      <div className='main-content'>
        <LeftComponent></LeftComponent>
        <MiddleComponent></MiddleComponent>
        <RightComponent></RightComponent>
      </div>
    </div>
  );
 }
export default App;
