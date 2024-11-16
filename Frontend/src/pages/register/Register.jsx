import { Link, useNavigate } from 'react-router-dom'
import './register.scss'


const Register = () => {
    const navigate = useNavigate()
    const handelRegister = () => {
        navigate('/')
        alert('Now you can Login')
    }
    return (
        <div className='register'>
            <div className="card">
                <div className="left">
                    <h1>Register</h1>
                    <form >
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Username' />
                        <input type="text" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <button onClick={handelRegister}>Register</button>
                    </form>
                </div>
                <div className="right">
                    <h1>Sanu Social.</h1>
                    <p>
                        This is a register page where you can sign up register for SanuSocial
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/Login">
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Register