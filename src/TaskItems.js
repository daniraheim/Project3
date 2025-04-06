import React, { useState } from "react";
import { Link } from "react-router-dom";

function TaskItems({tasks , onDelete})
{
  const [filterStatus , setFilterStatus] = useState('All');

  const filteredTasks = tasks.filter(task => {
    return (filterStatus === 'All' || (filterStatus === 'Completed' && task.status) || (filterStatus === 'Unfinished' && !task.status))
 });

    return (
      <div>
        <div className="mb-2 mt-2 col-3">
          <select className="form-select" onChange={(e) => setFilterStatus(e.target.value)}>
            <option value='All'>All</option>
            <option value='Completed'>Completed</option>
            <option value='Unfinished'>Unfinished</option>
          </select>
        </div>
      
        <div className="table-responsive mt-4">
          <table className="table table-bordered table-info">
            <thead className="table-dark">
              <tr className="text-center fs-4 table-warning">
                <th>Task</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.status === true ? "Completed" : "Unfinished"}</td>
                  <td>
                    <Link className="btn btn-warning btn-sm me-2" to={`/edit/${task.id}`}>Edit</Link>
                    <button className="btn btn-dark btn-sm" onClick={() => onDelete(task.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      );
}

export default TaskItems;