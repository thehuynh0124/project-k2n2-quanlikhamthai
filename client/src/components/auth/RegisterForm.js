import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'

const RegisterForm = () => {
   //context
   const {registerUser} = useContext(AuthContext)


   //local state
   const [registerForm, setRegisterForm] = useState({
     username: '',
     password: '',
     confirmPassword: '',
     email: '',
     fullname:'',
     phone:'',
     cccd:'',
     address:'',
     ward:'',
     district:'',
     city:'',

   })
 
   const [alert, setAlert] = useState(null)
 
 
   const {username, password, confirmPassword , email, fullname, phone, cccd, address, ward, district, city} = registerForm
 
   const onChangeRegisterForm = event =>
      setRegisterForm({...registerForm, [event.target.name]: event.target.value})
 
   const register = async event => {
      event.preventDefault()
    
      if (password !== confirmPassword){
        setAlert({type: 'danger', message: 'mật khẩu không khớp'})
        setTimeout(() => setAlert(null), 3000)
        return
      }
    
     try {
        const registerData = await registerUser(registerForm)
        if (!registerData.success){
          setAlert({type: 'danger', message: registerData.message})
          setTimeout(() => setAlert(null), 3000)
       }
      }catch (error) {
        console.log(error)
      }
     
   }
 


  return( 
  <>
  <Form className='my-4' onSubmit={register}>
    <AlertMessage info={alert}/> 
    <h4>ĐĂNG KÝ</h4>
    
    <Form.Group className='my-1'>
      <Form.Control 
        type = 'text' 
        size = 'sm'
        placeholder='email' 
        name='email' 
        required 
        value={email} 
        onChange={onChangeRegisterForm}
      />
    </Form.Group>

    <Form.Group>
      <Form.Control
        type = 'password' 
        size = 'sm'
        placeholder='Mật khẩu' 
        name='password' 
        required 
        value={password} 
        onChange={onChangeRegisterForm}
      />
    </Form.Group>

    <Form.Group className='my-1'>
      <Form.Control 
        type = 'password' 
        size = 'sm'
        placeholder='Xác nhận mật khẩu' 
        name='confirmPassword' 
        required
        value={confirmPassword} 
        onChange={onChangeRegisterForm}
      />
    </Form.Group>


    <Form.Group className='my-1'>
      <Form.Control 
        type = 'text'
        size = 'sm'
        placeholder='Họ và tên' 
        name='fullname' 
        required 
        value={fullname} 
        onChange={onChangeRegisterForm}
      />
    </Form.Group>


    <Form.Group className='my-1'>
      <Form.Control 
        type = 'text'
        size = 'sm'
        placeholder='Số điện thoại' 
        name='phone' 
        required 
        value={phone} 
        onChange={onChangeRegisterForm}
      />
    </Form.Group>

    <Form.Group className='my-1'>
      <Form.Control 
        type = 'text'
        size = 'sm'
        placeholder='Số căn cước công dân' 
        name='cccd' 
        required 
        value={cccd} 
        onChange={onChangeRegisterForm}
      />
    </Form.Group>

    <Form.Group className='my-1'>
      <Form.Control 
        type = 'text' 
        size = 'sm'
        placeholder='Số nhà, đường' 
        name='address' 
        required 
        value={address} 
        onChange={onChangeRegisterForm}
      />
    </Form.Group>

    <Form.Group className='my-1'>
      <Form.Control 
        type = 'text'
        size = 'sm'
        placeholder='Xã/Phường' 
        name='ward' 
        required 
        value={ward} 
        onChange={onChangeRegisterForm}
      />
    </Form.Group>

    <Form.Group className='my-1'>
      <Form.Control 
        type = 'text'
        size = 'sm'
        placeholder='Quận/huyện' 
        name='district' 
        required 
        value={district} 
        onChange={onChangeRegisterForm}
      />
    </Form.Group>

    <Form.Group className='my-1'>
      <Form.Control 
        type = 'text'
        size = 'sm'
        placeholder='Tỉnh/TP' 
        name='city' 
        required 
        value={city} 
        onChange={onChangeRegisterForm}
      />
    </Form.Group>
    


    <Button className='my-3' size='md' variant='success' type='submit'>Đăng ký</Button>
  </Form>
  <h6>Bạn đã có tài khoản?
    <Link to='login'>
      <Button variant='info' size='md' className='ml-2'>
        Đăng nhập
      </Button>
    </Link>
  </h6>
  </>)
}

export default RegisterForm
