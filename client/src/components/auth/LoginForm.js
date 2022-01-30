import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link} from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'


const LoginForm = () => {
  //context
  const {loginUser} = useContext(AuthContext)


  //local state
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  })

  const [alert, setAlert] = useState(null)


  const {username, password} = loginForm

  const onChangeLoginForm = event =>
    setLoginForm({...loginForm, [event.target.name]: event.target.value})

  const login = async event => {
    event.preventDefault()


    try {
      const loginData = await loginUser(loginForm)
      if (!loginData.success){
        setAlert({type: 'danger', message: loginData.message})
        setTimeout(() => setAlert(null), 3000)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  return( 
  <>
    <Form className='my-4' onSubmit ={login}>
    <h4>ĐĂNG NHẬP</h4>
    <AlertMessage info = {alert} />
      <Form.Group className='my-2'>
        <Form.Control type = 'text'
          size = 'md' 
          placeholder='Tên đăng nhập' 
          name='username' 
          required value={username} 
          onChange={onChangeLoginForm}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control 
          type = 'password'
          size = 'md'
          placeholder='Mật khẩu' 
          name='password' 
          required value={password} 
          onChange={onChangeLoginForm} 
        />
      </Form.Group>

      <Button className='my-2' size='md' variant='success' type='submit'>Đăng nhập</Button>
    </Form>
    <h6>Bạn chưa có tài khoản?
      <Link to='register'>
        <Button variant='info' size='md' className='ml-4'>
          Đăng ký
        </Button>
      </Link>
    </h6>
  </>)
}

export default LoginForm
