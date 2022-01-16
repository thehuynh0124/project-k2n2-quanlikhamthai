import LoginForm from "../components/auth/LoginForm"
import RegisterForm from "../components/auth/RegisterForm"
const Auth = ({authRoute}) => {
    let body
    body = (
        <>
        {authRoute === 'login' && <LoginForm />}
        {authRoute === 'register' && <RegisterForm/>}
        </>
    )
    return (
        <div className="landing">
            <div className = "dark-overlay">
                <div className = "landing-inner">
                    <h4>Sức khỏe là điều quan trọng nhất cho thai nhi</h4>
                    {body}
                </div>
            </div>
        </div>
    )
    
}

export default Auth
