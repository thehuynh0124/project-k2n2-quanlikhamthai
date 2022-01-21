import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import {useContext,useState} from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'

const RegisterForm = () => {
    //Context
    const {registerUSer} = useContext(AuthContext)

    //Local state
    const [RegisterForm, setRegisterForm] = useState({
        username: '',
        password: '',
        confirmPassWord: '',
    })
    const [alert,setAlert] = useState(null)

    const {username, password,confirmPassWord} = RegisterForm

    const onChangeRegisterForm = event => setRegisterForm({...RegisterForm, [event.taget.name]: event.target.value})
    const register = async event => {
        event.preventDefault()
        if (password !== confirmPassWord){
            setAlert({type: 'danger', message: 'Password do not match '})
            setTimeout(() => setAlert (null),5000)
            return 
        }
        try{
            const registerData =  await registerUSer(RegisterForm)
            if (!registerData.success){
                setAlert({type: 'danger',message: registerData.message})
                setTimeout(() => setAlert(null),5000)
            }
        } catch(error){
            console.log(error)
        }
    }



    return(
        <>
        <h1>Đăng ký</h1>
     <Form className= 'my-4' onSubmit = {register}>
         <AlertMessage info = {alert}/>
        <Form.Group>
            <Form.Control type = 'text' placeholder='Tài khoản' name = 'username' required 
            value = {username}
            onChange={onChangeRegisterForm}
            
            />
        </Form.Group>  
        <Form.Group>
            <Form.Control type = 'password' placeholder='Mật Khẩu' name = 'password' required        
            value = {password}
            onChange={onChangeRegisterForm}/>
        </Form.Group>
        <Form.Group>
            <Form.Control type = 'password' placeholder='Xác nhận mật khẩu' name = 'confirmPassword' required 
            value = {confirmPassWord}
            onChange={onChangeRegisterForm}
            />
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
