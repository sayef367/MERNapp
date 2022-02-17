import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './components.css';
import registration from '../images/registration.png';

const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: '', email: '', phone: '', work: '', password: '', cpassword: ''
    });

    function handleInputs(event) {
        console.log(event);
        const {name, value} = event.target;

        setUser(prevInput => {
            return {
                ...prevInput,
                [name]:value
            }
        });
    };

    const PostData = async (event) => {
        event.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
        const data = await res.json();
        if(data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successfull");
            console.log("Successfull Registration");

            history.push("/login");
        }
    };

    return (
        <>
            <section className='container shadow mt-5 bg-body rounded mb-5'>
                <div className='row p-3'>
                    <div className='col-md-6'>
                        <div className='mt-3 pt-3 offset-md-1'>
                            <h1 className='fw-bold'>Sign Up</h1>
                        </div>
                        <form method='POST' className="pt-3 offset-md-1">
                            <label className='col-12' >
                                <input type="text" id="name" className='inputcss' name="name" 
                                    value={user.name} onChange={handleInputs}
                                    placeholder="Enter Your Name" autoComplete='off'/>
                            </label>
                            <label className='col-12' >
                                <input type="email" id="email" className='inputcss' name="email" 
                                    value={user.email} onChange={handleInputs}
                                    placeholder="Enter Your Email" autoComplete='off'/>
                            </label>
                            <label className='col-12' >
                                <input type="number" id="phone" className='inputcss' name="phone" 
                                    value={user.phone} onChange={handleInputs}
                                    placeholder="Mobile Number" autoComplete='off'/>
                            </label>
                            <label className='col-12' >
                                <input type="text" id="work" className='inputcss' name="work" 
                                    value={user.work} onChange={handleInputs}
                                    placeholder="Your Profession" autoComplete='off'/>
                            </label>
                            <label className='col-12' >
                                <input type="password" id="password" className='inputcss' name="password" 
                                    value={user.password} onChange={handleInputs}
                                    placeholder="password" autoComplete='off'/>
                            </label>
                            <label className='col-12' >
                                <input type="password" id="cpassword" className='inputcss' name="cpassword" 
                                    value={user.cpassword} onChange={handleInputs}
                                    placeholder="Confirm Your Password" autoComplete='off'/>
                            </label>
                            
                            <div className="pb-5 pt-4">
                                <input type="submit" name='signup' id='signup' className="btn btn-primary fw-bold" 
                                    value='register' onClick={PostData} />
                                <NavLink to="/login" className="p-4 text-decoration-none">I'm already register</NavLink>
                            </div>
                        </form>
                    </div>

                    <div className='col-md-6 align-self-center'>
                        <img src={registration} className='img-fluid ' alt="logo" width={'800px'}/>
                    </div>
                    
                </div>
            </section>
        </>
        
    );
};

export default Signup
