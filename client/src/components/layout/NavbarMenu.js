import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import boyteLogo from '../../assets/Logo_BYT.svg'
import logoutIcon from '../../assets/logout.svg'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'


const NavbarMenu = () => {
    const {
		authState: {
			user: { fullname }
		},
		logoutUser

	} = useContext(AuthContext)
    console.log(AuthContext)


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
                        to='/dangkykham'  
                        as={Link}
                    >
                        Đăng ký khám
                    </Nav.Link>

                    <Nav.Link 
                        className='font-weight-bolder text-white' 
                        to='/dangkytiemchung'  
                        as={Link}
                    >
                    Đăng ký tiêm chủng
                    </Nav.Link>


                    <NavDropdown title='Tra cứu' Tracứu  id="navbarScrollingDropdown">
                        <NavDropdown.Item  href="#action3">
                            <Nav.Link 
                                className='font-weight-bolder text-black' 
                                to='/diseases'
                                as={Link}
                            >
                               Danh sách Bệnh
                            </Nav.Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item href="#action4">
                            <Nav.Link 
                                className='font-weight-bolder text-black' 
                                to='/vaccines'  
                                as={Link}
                            >
                               Danh sách Vaccine
                            </Nav.Link>
                        </NavDropdown.Item>
                        
                        <NavDropdown.Item href="#action5">
                            <Nav.Link 
                                className='font-weight-bolder text-black' 
                                to='/doctors'  
                                as={Link}
                            >
                               Danh sách bác sĩ
                            </Nav.Link>
                        </NavDropdown.Item>
                        
                        
                        <NavDropdown.Item href="#action6">
                            <Nav.Link 
                                className='font-weight-bolder text-black' 
                                to='/hospital'  
                                as={Link}
                            >
                               Danh sách cơ sở y tế
                            </Nav.Link>
                        </NavDropdown.Item>


                        <NavDropdown.Item href="#action7">
                            <Nav.Link 
                                className='font-weight-bolder text-black' 
                                to='/hospital'  
                                as={Link}
                            >
                               Lịch hẹn khám
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

                </Nav>

                
            </Navbar.Collapse>

                <Nav className="mr-sm-2">
                        <Nav.Link className='font-weight-bolder text-white' disabled>
                            Wellcome {fullname}
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
        </Navbar>


    )
};


export default NavbarMenu;
