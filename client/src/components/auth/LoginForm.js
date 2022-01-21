import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link,useHistory } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'

const LoginForm = () => {
    //Context
    const {loginUser} = useContext(AuthContext)

    //Local state
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    const [alert,setAlert] = useState(null)

    const {username, password} = loginForm

    const onChangeLoginForm = event => setLoginForm({...loginForm, [event.taget.name]: event.target.value})
    const login = async event => {
        event.preventDefault()
        try{
            const loginData =  await loginUser(loginForm)
            if (loginData.success){
                //history.push('/dashboard')
            }
            else {
                setAlert({type: 'danger',message: loginData.message})
                setTimeout(() => setAlert(null),5000)
            }
        } catch(error){
            console.log(error)
        }
    }

    return(
        <>
        <h1>Đăng nhập </h1>
     <Form className= 'my-4' onSubmit={login}>
         <AlertMessage info={alert} />
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
