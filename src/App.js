import { useState } from 'react';
import Framework from './Framework';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskItems from './TaskItems';
import AddTask from './AddTask';
import EditTask from './EditTask';
import NewContact from './NewContact';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

const initialState = {
  tasks: [
    {id: 1, title: "Car", description: "wash the car", status: false},
    {id: 2, title: "Apartment", description: "clean the apartment", status: false},
    {id: 3, title: "Project", description: "code new project", status: false},
    {id: 4, title: "Groceries", description: "pick up groceries", status: false},
    {id: 5, title: "Presentation", description: "complete budget presentation", status: false}

  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case 'SET_TASKS':
          return { ...state, tasks: action.payload };
      default:
          return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  
  const [tasks , setTasks] = useState(store.getState().tasks);

  const [contacts, setContact] = useState ([
    {id: 1, firstName: "", lastName: "", email: "", comments: ""}
  ])

function addTask(task) {
  const newTask = {...task, id: Date.now()};
  const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    store.dispatch({ type: 'SET_TASKS', payload: updatedTasks });

 
}

function addContact(contact) {
  const newContact = {...contact, id: Date.now()};
  const updatedContact = [...contacts, newContact];
  setContact(updatedContact);
  store.dispatch({ type: 'SET_TASKS', payload: updatedContact });
}

function deleteTask(id) {
  setTasks(tasks.filter((task) => task.id != id))
  const updatedTasks = tasks.filter((task) => task.id !== id);
  setTasks(updatedTasks);
  store.dispatch({ type: 'SET_TASKS', payload: updatedTasks })
}

function updateTask(updated) {
  setTasks(tasks.map((task) => task.id === updated.id ? updated : task))
  const updatedTasks = tasks.map((task) => task.id === updated.id ? updated : task);
  setTasks(updatedTasks);
  store.dispatch({ type: 'SET_TASKS', payload: updatedTasks });
}

  return (
    <Router>
       <Framework>
          <Routes>

            <Route path="/" element={ <TaskItems tasks={tasks} onDelete={deleteTask} /> } />

            <Route path="/add" element={ <AddTask onAdd={addTask} /> } />

            <Route path="/edit/:id" element={ <EditTask tasks={tasks} onUpdate={updateTask} /> } />

            <Route path="/contact" element={ <NewContact onNew={addContact} /> } />
     
          </Routes>
        </Framework>
      </Router>
    
  );
}
export default App;
