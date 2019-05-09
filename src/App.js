import React, { Component } from 'react';
import './App.css';
import LeftComponent from './LeftComponent/index.js';
import MiddleComponent from './MiddleComponent/index.js';
import RightComponent from './RightComponent/index.js';


function App(){
   return (
    <div className='app'>
      <LeftComponent></LeftComponent>
      <MiddleComponent></MiddleComponent>
      <RightComponent></RightComponent>
    </div>
  );
 }
export default App;
