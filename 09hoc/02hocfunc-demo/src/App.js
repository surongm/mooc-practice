import './App.css';

// hoc第一个小demo
// import ChildA from './components/hoc/ChildA'
// import ChildB from './components/hoc/ChildB'

// hoc模板
// import ChildB from './components/hocdemo/ChildB'

// hoc代理方式
// import Parent from './components/hocApply/Parent'
// import ChildA from './components/hocApply/ChildA'
// import ChildB from './components/hocApply/ChildB'

// hoc继承方式
import Parent from './components/hocInherit/Parent'
import ChildA from './components/hocInherit/ChildA'
import ChildB from './components/hocInherit/ChildB'

function App() {
  return (
    <div className="App">
      APP
      {/* <Parent /> */}
      <ChildA />
      <ChildB />
      {/* <ChildB name='张三' age={22} /> */}
    </div>
  );
}

export default App;
