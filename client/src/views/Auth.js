import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'

const Auth = ({ authRoute}) => {
    const {authState: {authLoading, isAuthenticated}} = useContext(AuthContext)


    let body

    if(authLoading)
        body = (
          <div clasName = "d-flex.justify-content-center.mt-2">
              <Spinner animation="border" variant="info" />
          </div>
        )
    else if (isAuthenticated) return <Redirect to='/dashboard' />
    else


    body = (
        <>
            {authRoute === 'login' && <LoginForm />}
            {authRoute === 'register' && <RegisterForm />}
        </>

    )
    return (
        <div className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h2>QUẢN LÍ KHÁM THAI VÀ SINH CON</h2>
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Auth
