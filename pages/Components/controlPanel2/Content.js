import Head from 'next/head';
import React, { useEffect, useState } from "react";

export default function Content() {

    const [visible, setVisible] = useState(true)
    const [visible2, setVisible2] = useState(true)
    const [position, setPosition] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.pageYOffset)
            let moving = window.pageYOffset
            setVisible(position < 360);
            setVisible2(position < 35);
            setPosition(moving)
            console.log(window.scrollTop)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <nav class="navbar fixed-top" style={{ display: `${visible ? 'none' : 'block'}`, background: '#14284B' }}>
                <div class="container-fluid">
                    <span class="navbar-brand mt-1 text-white"><h3>User: Dinish Chugtai</h3></span>
                </div>
            </nav>
            <div className="row">
                <div className={`col-xl-3 col-md-4 px-5 ${visible2 ? 'pt-4' : 'pt-0'}`}>
                    <div style={{position: `${visible2 ? 'relative' : 'fixed'}`, marginTop: `${visible2 ? '0' : '-10px'}`, background: 'white'}}>
                    <h6 style={{ color: '#9C959B' }}><b>CONTENT</b></h6>
                    <h6 style={{ color: '#605E75' }} className='pt-2'><b>📃 Article Manager</b></h6>
                    <h6 style={{ color: '#605E75' }} className='pt-2'><b>📁 Category Manager</b></h6>
                    <h6 style={{ color: '#605E75' }} className='pt-2'><b>🖼️ Media Manager</b></h6>

                    <h6 style={{ color: '#9C959B' }} className='pt-4'><b>CONTENT</b></h6>
                    <h6 style={{ color: '#605E75' }} className='pt-2'><b>🗂️ Menu Manager</b></h6>
                    <h6 style={{ color: '#605E75' }} className='pt-2'><b>📦 Module Manager</b></h6>

                    <h6 style={{ color: '#9C959B' }} className='pt-4'><b>USERS</b></h6>
                    <h6 style={{ color: '#605E75' }} className='pt-2'><b>🙍‍♂️ User Manager</b></h6>

                    <h6 style={{ color: '#9C959B' }} className='pt-4'><b>CONFIGURATION</b></h6>
                    <h6 style={{ color: '#605E75' }} className='pt-2'><b>⚙️ Global CONFIGURATION</b></h6>
                    <h6 style={{ color: '#605E75' }} className='pt-2'><b>👁️ Template Manager</b></h6>
                    <h6 style={{ color: '#605E75' }} className='pt-2'><b>💬 Language Manager</b></h6>
                </div>
                </div>
                <div className="col-xl-7 col-md-6">
                    <ul class="list-group pt-4 px-5">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <h2>Manage User</h2>
                                <li class="breadcrumb-item active" aria-current="page" style={{ marginTop: '13px', marginLeft: '20px' }}>Home</li>
                                <li class="breadcrumb-item active" aria-current="page" style={{ marginTop: '13px' }}>Users</li>
                                <li class="breadcrumb-item active" aria-current="page" style={{ marginTop: '13px' }}>Manage</li>
                            </ol>
                        </nav>

                        <div class="card" style={{ borderTop: '5px solid #3798DB' }}>
                            <div class="card-body">
                                <div class="row">
                                    <div className="col-3 text-center mt-4">
                                        <img src="https://img.freepik.com/free-icon/user_318-563642.jpg?w=360" alt="#ImgNotFound" style={{ borderRadius: '100%', width: '60%' }} />
                                        <h4 className='mt-3'>Dinish Chugtai</h4>
                                    </div>
                                    <div className="col-9" style={{ borderLeft: '1px solid #C8C8C8' }}>
                                        <i class="fa fa-unlock" style={{ fontSize: '24px', color: '#09B796', float: 'right' }}></i>
                                        <br />
                                        <div style={{ borderBottom: '1px solid #C8C8C8' }}>
                                            <div className="m-4">
                                                <h6><b>Email</b> &emsp; <i class="fa fa-check" style={{ color: '#138F75' }}></i>dinesh@fusionauth.io</h6>
                                                <h6><b>User Id</b> &emsp; 00000000000000000000000000000000000000000000000</h6>
                                            </div>
                                        </div>
                                        <div className="row m-3">
                                            <div className="col mt-3">
                                                <h6><b>Birthdate</b></h6>
                                                <h6><i class="fa fa-minus"></i></h6>
                                            </div>
                                            <div className="col mt-3">
                                                <h6><b>Username</b></h6>
                                                <h6><i class="fa fa-minus"></i></h6>
                                            </div>
                                            <div className="col mt-3">
                                                <h6><b>Preferred languages</b></h6>
                                                <h6><i class="fa fa-minus"></i></h6>
                                            </div>
                                        </div>
                                        <div className="row m-3">
                                            <div className="col mb-5">
                                                <h6><b>Created</b></h6>
                                                <h6>3/7/2023 02:37PM MST</h6>
                                            </div>
                                            <div className="col mb-5">
                                                <h6><b>Last Login</b></h6>
                                                <h6>3/7/2023 02:37PM MST</h6>
                                            </div>
                                            <div className="col mb-5">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4 mx-3">
                                        <div className="col-2 text-center" style={{ fontWeight: '550', color: 'gray' }}>Registrations</div>
                                        <div className="col-1 text-center" style={{ fontWeight: '550', color: '#3798DB', paddingBottom: '5px', borderBottom: '4px solid #3798DB' }}>Posts</div>
                                        <div className="col-2 text-center" style={{ fontWeight: '550', color: 'gray' }}>Passkeys</div>
                                        <div className="col-2 text-center" style={{ fontWeight: '550', color: 'gray' }}>Linked Accounts</div>
                                        <div className="col-1 text-center" style={{ fontWeight: '550', color: 'gray' }}>Groups</div>
                                        <div className="col-2 text-center" style={{ fontWeight: '550', color: 'gray' }}>Entity Grants</div>
                                        <div className="col-1 text-center" style={{ fontWeight: '550', color: 'gray' }}>Groups</div>

                                        <table class="table mx-4 mt-3" style={{ width: '88%' }}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sr. no</th>
                                                    <th scope="col">Post Type</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td><b>Movie</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">7</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">8</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">9</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">10</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">11</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">12</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">13</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">14</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">15</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">16</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">17</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">18</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">19</th>
                                                    <td><b>Movie</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">20</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">21</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">22</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">23</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">24</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">25</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">26</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">27</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">28</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">29</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">30</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">31</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">32</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">33</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">34</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">35</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">36</th>
                                                    <td><b>Web Series</b></td>
                                                    <td><b>Two birds fly</b></td>
                                                    <td><span className='bg-danger text-white p-2' style={{ marginLeft: '10px', borderRadius: '5px' }}><i class="fa fa-trash-o"></i></span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <br /><br />
                    </ul>
                </div>
            </div>
        </>
    )
}