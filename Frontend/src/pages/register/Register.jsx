import { Link } from 'react-router-dom'
import './register.scss'


const Register = () => {
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
                        <button>Register</button>
                    </form>
                </div>
                <div className="right">
                    <h1>Sanu Social.</h1>
                    <p>
                        This is a register page where any new user can come up and register for social media.
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