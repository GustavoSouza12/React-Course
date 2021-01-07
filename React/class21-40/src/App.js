import './App.css';

import LifecycleA from './Components/23and24_LifecicleA'
import Table from './Components/25_Table';
import FragmentDemo from './Components/25_FragmentDemo';
import PureComp from './Components/26_PureComp'
import ParentComp from './Components/26_ParentComp';
import RefsDemo from './Components/28_RefsDemo';
import Input from './Components/29_input';
import FocusInput from './Components/29_FocusInput';
import RFinput from './Components/30_FRparentInput'
import PortalDemo from './Components/31_PortalDemo';
import ClickCounter from './Components/33_ClickCounter';

function App() {
  return (
    <div className="App">
      
      <ClickCounter/>
      <PortalDemo/>
      {/* <RFinput/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/>  */}

      {/* <ParentComp/> */}

      {/* <FragmentDemo/> */}
      {/* <Table/> */}
    </div>
  );
}

export default App;
