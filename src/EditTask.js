import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from './TaskForm'

function EditTask({tasks, onUpdate}) {
    const {id} = useParams();
    const navigate = useNavigate();
    const task = tasks.find ((i) => i.id === parseInt(id));

    if(!task) return <p>Task Not Found</p>

    function handleUpdate(updatedTask) {
        onUpdate(updatedTask);
        navigate("/");
    }

    return <TaskForm initialData={task} onSubmit={handleUpdate}/>
}

export default EditTask;
