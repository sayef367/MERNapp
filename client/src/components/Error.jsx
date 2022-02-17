import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center pt-5'>
            <h1 className='text-danger'>404 error</h1>
            <h3>OOps! Page is not found!...</h3>
            <NavLink className="nav-link pt-5" to="/">
                <button type="button" class="btn btn-outline-primary">Back To Homepage</button>
            </NavLink>
        </div>
    );
};

export default Error
