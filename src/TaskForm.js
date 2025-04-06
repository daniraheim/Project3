import React, { useState } from "react";

function TaskForm({ initialData , onSubmit})
{

    const [formData, setFormData] = useState(initialData)

    function handleChange(event)
    {
        setFormData({...formData , [event.target.name]: event.target.value})
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        onSubmit(formData);
    }

    function handleStatusChange() {
      setFormData({...formData, status: !formData.status})
    }
    return (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="fs-5 fw-bold form-label">Task</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="fs-5 fw-bold form-label">Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 form-check">
              <input        
              type="checkbox"
              className="form-check-input"
              checked={formData.status}
              onChange={handleStatusChange}
              />
              <label className="fs-5 fw-bold form-check-label">Completed</label>
          </div>
          <div>
          <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      );
}

export default TaskForm;