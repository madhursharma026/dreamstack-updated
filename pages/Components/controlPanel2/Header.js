import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from '../../../styles/controlPanel2/Header.module.css';

export default function Header() {
    return (
        <>
            <Navbar expand="lg" className='px-4' style={{ background: '#14284B' }}>
                <Navbar.Brand href="/">⬜</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ color: 'white' }}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ background: 'transparent', border: '0' }}>
                                System
                            </Dropdown.Toggle>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ background: 'transparent', border: '0' }}>
                                Users
                            </Dropdown.Toggle>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ background: 'transparent', border: '0' }}>
                                Menus
                            </Dropdown.Toggle>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ background: 'transparent', border: '0' }}>
                                Content
                            </Dropdown.Toggle>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ background: 'transparent', border: '0' }}>
                                Components
                            </Dropdown.Toggle>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ background: 'transparent', border: '0' }}>
                                Extensions
                            </Dropdown.Toggle>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ background: 'transparent', border: '0' }}>
                                Help
                            </Dropdown.Toggle>
                        </Dropdown>
                    </Nav>
                    <div className={`${styles.navOptionBeforeLG} justify-content-end`}>
                        <Navbar.Text className='text-white px-2'>
                            <b>Logged in as Akash</b>
                        </Navbar.Text>
                    </div>
                    <div className={`${styles.navOptionAfterLG} text-center`}>
                        <Navbar.Text className='text-white px-2'>
                            <b>Logged in as Akash</b>
                        </Navbar.Text>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            <Navbar expand="lg" className='px-4' style={{ background: '#184A7D' }}>
                <Navbar.Brand href="/" style={{ marginTop: '-10px' }}>🏚️</Navbar.Brand>
                <Nav className="me-auto" style={{ color: 'white' }}>
                    <h4>Control Panel</h4>
                </Nav>
                <div className="justify-content-end">
                    <Navbar.Text className='text-white px-2'>
                        <b>3 Jan, 2023 11:25 PM</b>
                    </Navbar.Text>
                </div>
            </Navbar>
        </>
    )
}
