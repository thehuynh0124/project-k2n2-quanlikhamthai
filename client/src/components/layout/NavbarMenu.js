import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import boyteLogo from '../../assets/Logo_BYT.svg'
import logoutIcon from '../../assets/logout.svg'
import hotline from '../../assets/phone-call-507.svg'
import logokhamthai from '../../assets/logokhamthai.jpg'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'


const NavbarMenu = () => {

    const {
		authState: {
			user: { username }
		},
		logoutUser
	} = useContext(AuthContext)

	const logout = () => logoutUser()


    return( 
        <Navbar  bg='primary' variant='dark' className='shadow' expand='sm'>
            <Navbar.Brand className='font-weight-bolder text-white'>
                <img 
                    src={boyteLogo} 
                    alt="boyteLogo" 
                    width='64' 
                    height='64' 
                    className = 'mr-2'
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />

            <Navbar.Collapse id='basic-navbar-nav'>

                <Nav className='mr-auto'>
                    <Nav.Link 
                        className='font-weight-bolder text-white' 
                        to='/dashboard'  
                        as={Link}
                    >
                        Trang chủ
                    </Nav.Link>

                    <Nav.Link 
                        className='font-weight-bolder text-white' 
                        to='/datlichkham'  
                        as={Link}
                    >
                        Đặt lịch khám
                    </Nav.Link>


                    <NavDropdown title='Tra cứu' Tra cứu  id="navbarScrollingDropdown">
                        <NavDropdown.Item  href="#action3">
                            <Nav.Link 
                                className='font-weight-bolder text-black' 
                                to='/benh'
                                as={Link}
                            >
                               Danh sách Bệnh
                            </Nav.Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item href="#action4">
                            <Nav.Link 
                                className='font-weight-bolder text-black' 
                                to='/vaccine'  
                                as={Link}
                            >
                               Danh sách Vaccine
                            </Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            <Nav.Link 
                                className='font-weight-bolder text-black' 
                                to='/vaccine'  
                                as={Link}
                            >
                               Danh sách cơ sở y tế
                            </Nav.Link>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link 
                        className='font-weight-bolder text-white' 
                        to='/user'  
                        as={Link}
                    >
                        Hồ sơ cá nhân
                    </Nav.Link>


                    <Nav.Link 
                        className='font-weight-bolder text-white' 
                        to='/about'  
                        as={Link}
                    >
                    About
                    </Nav.Link>

                    

                </Nav>

                
            </Navbar.Collapse>

                <Nav className="mr-sm-2">
                        <Nav.Link className='font-weight-bolder text-white' disabled>
                            Wellcome {username}
                        </Nav.Link>

                        <Button 
                            variant='secondary' 
                            className='font-weight-bolder text-white'
                            onClick={logout}
                        >
                            <img
                                src={logoutIcon} 
                                alt='logoutIcon'
                                width='18' 
                                height='18' 
                                className='mr-1'
                            />
                            Logout
                        </Button>
                    </Nav>


                    <Navbar fixed="bottom" bg='primary' variant='dark' className='shadow' expand='sm' >
                        <Navbar.Brand className='font-weight-bolder text-white'>
                            <h6> Bản quyền thuộc Bộ Y tế Việt Nam</h6>
                            <img 
                                src={boyteLogo} 
                                alt="boyteLogo" 
                                width='48' 
                                height='48' 
                                className = 'mr-4'
                            />
                            <img 
                                src={logokhamthai} 
                                alt="boyteLogo" 
                                width='48' 
                                height='48' 
                                className = 'mr-4'
                            />
                            
                            
                        </Navbar.Brand>

                        <Navbar.Brand>
                            <img
                                src ={hotline}
                                alt = "hotline"
                                width='32'
                                height='32'
                                className = 'mr -4'
                            
                            />
                            Hotline: 088547779
                        </Navbar.Brand>

                        <Navbar fixed="bottom" bg='primary' variant='dark' className='shadow' expand='sm' >
                            
                        </Navbar>
                    </Navbar>
                    


        </Navbar>


    )
};


export default NavbarMenu;
