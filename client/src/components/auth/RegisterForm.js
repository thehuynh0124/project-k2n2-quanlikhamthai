import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
const RegisterForm = () => {
    return(
        <>
        <h1>Đăng ký</h1>
     <Form className= 'my-4'>
        <Form.Group>
            <Form.Control type = 'text' placeholder='Tài khoản' name = 'username' required />
        </Form.Group>  
        <Form.Group>
            <Form.Control type = 'password' placeholder='Mật Khẩu' name = 'password' required />
        </Form.Group>
        <Form.Group>
            <Form.Control type = 'password' placeholder='Xác nhận mật khẩu' name = 'confirm Password' required />
        </Form.Group>
        <Button variant ='success' type = 'submit'>Đăng ký</Button>  
    </Form>
    <p>Đã có tài khoản?
        <Link to ='/login'>
            <Button variant = 'info' size = 'sm' className='m1-2'>Đăng nhập </Button>
        </Link>
    </p>
    </>
    )
}

export default RegisterForm
