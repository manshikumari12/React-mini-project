import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route,NavLink,  } from 'react-router-dom';
import TaskSum from './Component/TaskSum';
import TaskCounter from './Component/TaskCounter';
import TaskFunny from './Component/TaskFunny';
import GridalOfTask from './Component/GridalOfTask';
import DrageOfTask from './Component/DrageOfTask';

function App() {
  return (
 <>
<div>
 <BrowserRouter>
 <div>
  <div className='nav-bar'>
  <NavLink to="/sum" activeClassName="active" style={{ color: "white" }}>sum</NavLink>
     <NavLink to="/count" activeClassName="active" style={{ color: "white" }}>counter</NavLink>
     <NavLink to="/text" activeClassName="active" style={{ color: "white" }}>filter</NavLink>
     <NavLink to="/Datagrid" activeClassName="active" style={{ color: "white" }}>Datagrid</NavLink>
     <NavLink to="/drage" activeClassName="active" style={{ color: "white" }}>DrageDrop</NavLink>

   

  </div>
   

 </div>
 <Routes>
  <Route exact path="/sum" element={<TaskSum />} />
  <Route exact path="/count" element={<TaskCounter />} />
  <Route exact path="/text" element={<TaskFunny />} />
  <Route exact path="/Datagrid" element={<GridalOfTask />} />
  <Route exact path="/drage" element={<DrageOfTask />} />


  

 </Routes>
 </BrowserRouter>
</div>
</>
  );
}

export default App;
