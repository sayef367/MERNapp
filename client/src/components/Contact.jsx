import React from 'react';
import './components.css';

import { FcCellPhone } from 'react-icons/fc';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BsFillPinMapFill } from 'react-icons/bs';


const Contact = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-md-center card_style">
                <div className="col-lg-3 col-md-12 row m-2 shadow-sm p-3 bg-light rounded">
                    <div className='col-3 align-self-center'>
                        <FcCellPhone size={'40px'} />
                    </div>
                    <div className='col-9'>
                        <h5>Phone</h5>
                        <span>+919238374940</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 row m-2 shadow-sm p-3 bg-light rounded">
                    <div className='col-3 align-self-center'>
                        <MdMarkEmailUnread size={'40px'} color='#6998AB'/>
                    </div>
                    <div className='col-9'>
                        <h5>Email</h5>
                        <span>+919238374940</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 row m-2 shadow-sm p-3 bg-light rounded">
                    <div className='col-3 align-self-center'>
                        <BsFillPinMapFill size={'40px'} color='#3E8E7E'/>
                    </div>
                    <div className='col-9'>
                        <h5>Address</h5>
                        <span>Chottogaram, Bangladesh</span>
                    </div>
                </div>
            </div>

            <div className='row justify-content-md-center'>
                <div className="col-md-8 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded card_style mt-5 ">
                    <form>
                        <h2 className="fw-bold p-3">Get in Touch</h2>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div class="p-3">
                                    <input type="name" class="form-control" id="" placeholder="Your Name" />
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div class="p-3">
                                    <input type="email" class="form-control" id="" placeholder="Your Email id" />
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div class="p-3">
                                    <input type="number" class="form-control" id="" placeholder="Your Phone Number" />
                                </div>
                            </div>
                        </div>
                        <div class="p-3">
                            <textarea class="form-control" id="" rows="4" placeholder="Message"></textarea>
                        </div>
                        <div className="p-3">
                            <button type="submit" className="btn btn-outline-secondary">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact
