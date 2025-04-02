import { useState } from 'react';
import Framework from './Framework';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskItems from './TaskItems';
import AddTask from './AddTask';
import EditTask from './EditTask';
import './App.css';

function App() {
  
  const [tasks, setTasks] = useState ([
    {id: 1, title: "Car", description: "wash the car", status: false},
    {id: 2, title: "Apartment", description: "clean the apartment", status: false},
    {id: 3, title: "Project", description: "code new project", status: false},
    {id: 4, title: "Groceries", description: "pick up groceries", status: false},
    {id: 4, title: "Presentation", description: "complete budget presentation", status: false}


  ])

function addTask(task) {
  const newTask = {...task, id: Date.now()};
  setTasks ([...tasks, newTask]);
}

function deleteTask(id) {
  setTasks(tasks.filter((task) => task.id != id))
}

function updateTask(updated) {
  setTasks(tasks.map((task) => task.id === updated.id ? updated : task))
}

  return (
    <Router>
       <Framework>
          <Routes>

            <Route path="/" element={ <TaskItems tasks={tasks} onDelete={deleteTask} /> } />

            <Route path="/add" element={ <AddTask onAdd={addTask} /> } />

            <Route path="/edit/:id" element={ <EditTask tasks={tasks} onUpdate={updateTask} /> } />

            <Route path="/contact"/>
     
          </Routes>
        </Framework>
      </Router>
    
  );
}
export default App;
