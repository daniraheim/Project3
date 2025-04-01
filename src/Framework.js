import React from 'react';
import { Link } from 'react-router-dom'

function Framework({children}) {
    return(
        <div className="container mt-4">
            <h1 className="text-center mb-4">To-Do List</h1>
            <nav aria-label="Main Navigation">
                <Link className="btn btn-primary me-2" to="/">List</Link>
                <Link className="btn btn-success me-2" to="/add">Add New</Link>
                <Link className="btn btn-info me-2" to="/contact">Contact</Link>
            </nav>
            {children}
        </div>
    )
}
export default Framework;