import { useState } from 'react';
import Framework from './Framework';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskItems from './TaskItems';
import './App.css';

function App() {
  
  const [tasks, setTasks] = useState ([
    {id: 1, task: "car", description: "wash the car", status: false}
  ])

  return (
    <Router>
       <Framework>
          <Routes>

            <Route path="/" element={ <TaskItems tasks={tasks}  /> } />

            <Route path="/add"/>

            <Route path="/contact"/>
     
          </Routes>
        </Framework>
      </Router>
    
  );
}
export default App;
