import React from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "./TaskForm";

function AddTask ({ onAdd }) {
    const navigate = useNavigate();

    function handleAdd (newTask) {
        onAdd(newTask);
        navigate("/");
    }

    return <TaskForm 
            initialData={{ title: "", description: "", status: false}} 
            onSubmit={handleAdd}/>   
}

export default AddTask;

