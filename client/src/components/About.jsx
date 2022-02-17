import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import sayef from '../images/sayef_profile.jpeg';

const About = () => {

    const history = useHistory();
    const callAboutPage = async () => {
        try {
            const res = fetch('/about', {
                method: 'GET',
                headers: {
                    Accept: 'appllication/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const data = await res.json();
            console.log(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err)  {
            console.log(err);
            history.push('/login');
        }
    }
    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <>
        <div className='container mt-5 shadow bg-body rounded'>
            <form method="GET">
                <div className='row'>
                    <div className='col-lg-3 col-md-12'>
                        <div>
                            <img src={sayef} width={'150px'} alt="profile" />
                        </div>
                        <div>
                            <ul className='list-inline pt-3'>
                                <li><a href="google.com" target="_">Youtube</a></li>
                                <li><a href="google.com" target="_">Facebook</a></li>
                                <li><a href="google.com" target="_">Twteer</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-lg-9 col-md-12 row'>
                        <div className='col-9'>
                            <h3>Md Sayeful Islam</h3>
                            <p>Software Engineer</p>
                            <p><small>RANKINGS: 1/10</small></p>
                        </div>
                        <div className='col-3 text-end'>
                            <input type='text' className='btn btn-outline-primary btn-sm' name='btn' value="Edit Profile"/>
                        </div>

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active fw-bold" id="about-tab" data-bs-toggle="tab" data-bs-target="#about" 
                                type="button" role="tab" aria-controls="about" aria-selected="true">About</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link fw-bold" id="timeline-tab" data-bs-toggle="tab" data-bs-target="#timeline" 
                                type="button" role="tab" aria-controls="timeline" aria-selected="false">Timeline</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
                                <table class="table table-borderless">
                                    <tbody>
                                        <tr className='table-cell-padding-y-sm'>
                                            <td>User Id</td> <td>Sayeful Islam</td>
                                        </tr>
                                        <tr>
                                            <td>Name</td> <td>Sayeful Islam</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td> <td>Sayeful Islam</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td> <td>Sayeful Islam</td>
                                        </tr>
                                        <tr>
                                            <td>Profession</td> <td>Sayeful Islam</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">
                                timeline
                            </div>
                        </div>
                    </div>
                </div>


            </form>
        </div>
        </>
    );
};

export default About
