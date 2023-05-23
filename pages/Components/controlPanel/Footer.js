import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (
        <div className='fixed-bottom'>
            <Navbar className='px-4' style={{ background: '#EDEDED' }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <h6 style={{ color: '#999999' }} className='pt-2'><b>↪ View Site</b></h6>&ensp; 
                    <h6 style={{ color: '#999999' }} className='pt-2'><b><span style={{background:'#999999', borderRadius:'100%'}} className='py-1 px-2 text-white'>0</span> Visitors</b></h6>&ensp; 
                    <h6 style={{ color: '#999999' }} className='pt-2'><b><span style={{background:'#999999', borderRadius:'100%'}} className='py-1 px-2 text-white'>2</span> Admins</b></h6>&ensp; 
                    <h6 style={{ color: '#999999' }} className='pt-2'><b><span style={{background:'#999999', borderRadius:'100%'}} className='py-1 px-2 text-white'>0</span> Logout</b></h6>&ensp; 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
