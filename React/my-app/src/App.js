import React from 'react'
import './App.css';

import Greet from './Components/Greet'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import StudyComponent from './Components/StudyComponent'
import CondtionalRendering from './Components/16_Conditional_Rendering';
import NameList from './Components/17_NameList'
import Stylesheet from './Components/20_Stylesheets'
import Inline from './Components/20_inline'
import './Styles/appStyles.css'
import Styles from './Styles/appStyles.module.css'


function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={Styles.sucess}>Sucess</h1>
      <Inline/>
      <Stylesheet primary={true}/>
      <NameList/>
      <CondtionalRendering/>
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
