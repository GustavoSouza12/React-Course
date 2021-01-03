import './App.css';

import LifecycleA from './Components/23and24_LifecicleA'
import Table from './Components/25_Table';
import FragmentDemo from './Components/25_FragmentDemo';
import PureComp from './Components/26_PureComp'
import ParentComp from './Components/26_ParentComp';

function App() {
  return (
    <div className="App">

      <ParentComp/>

      {/* <FragmentDemo/> */}
      {/* <Table/> */}
    </div>
  );
}

export default App;
