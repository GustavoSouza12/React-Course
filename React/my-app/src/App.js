import React from 'react'
import './App.css';

import Greet from './Components/Greet'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import StudyComponent from './Components/StudyComponent'
import UserGreeting from './Components/UserGreeting';

function App() {
  return (
    <div className="App">
      <UserGreeting/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind></EventBind>
      
      
      
      
      <Greet name="Gustavo" heroName="SuperMan" />
      <Greet name="João" heroName= "SpiderMan"/>
      <Greet name="Victor" heroName="Batman" />
     
      <ParentComponent/>

      <StudyComponent/>
    </div>
  );
}

export default App;
