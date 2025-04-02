import React, { useState } from "react";

function ContactForm({ initialData , onSubmit}) {
    const [formData, setFormData] = useState(initialData)

    function handleChange(event) {
        setFormData({...formData , [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              name="firstLast"
              className="form-control"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Comments:</label>
            <input
              type="text"
              name="comments"
              className="form-control"
              value={formData.comments}
              onChange={handleChange}
            />
          </div> 
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      );
}

export default ContactForm;