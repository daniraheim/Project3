import React from "react";
import { useNavigate } from "react-router-dom";

function AddTask ({ onAdd }) {
    const navigate = use Navigate();

    function handleAdd (newTask) {
        onAdd(newTask);
        navigate("/");
    }

    return < onSubmit={handleAdd}/>   
}

export default AddTask;

