import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    const {username, password} = LoginForm

    const onChangeLoginForm = event => setLoginForm({...loginForm, [event.taget.name]: event.target.value})

    return(
        <>
        <h1>Đăng nhập </h1>
     <Form className= 'my-4'>
        <Form.Group>
            <Form.Control type = 'text' placeholder='Tài khoản' name = 'username' required 
            value ={username}
            onChange = {onChangeLoginForm}/>
        </Form.Group>  
        <Form.Group>
            <Form.Control type = 'password' placeholder='Mật khẩu' name = 'password' required 
            value = {password}
            onChange = {onChangeLoginForm} />
        </Form.Group>
        <Button variant ='success' type = 'submit'>Đăng nhập</Button>  
    </Form>
    <p>Không có tài khoản?
        <Link to ='/register'>
            <Button variant = 'info' size = 'sm' className='m1-2'>Đăng ký</Button>
        </Link>
    </p>
    </>
    )
}

export default LoginForm
