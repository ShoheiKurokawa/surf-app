import React, {useState} from 'react'
import './styles/SignInOut.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const link = 'http://localhost:3000/auth/login';
    const navigate = useNavigate(); 

    const onButtonClick = () => {
        validateEmail(email);
        validatePassword(password);
        if (emailError === '' && passwordError === '') {
            axios.post(link, { email, password })
                .then((res) => {
                    console.log(res);
                    if (res.data.token) {
                        localStorage.setItem('token', res.data.token);
                        setIsLoggedIn(true);
                        // window.location.href = '/dashboard';
                        navigate('/dashboard');
                        window.dispatchEvent(new Event('storage'));
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert('Login failed');
                });
        } else {
            alert('Invalid email or password');
        }
    }

    const validateEmail = (email) => {
        if(!email.includes('@')){
            setEmailError('Invalid email');
        }else{
            setEmailError('');
        }
    }


    const validatePassword = (password) => {
        if(password.length < 8){
            setPasswordError('Password must be at least 8 characters long');
        }else{
            setPasswordError('');
        }
    }


  return (
    <div className='container'>
        <div className='field'>
        <div className='title'>Login</div>
        <br />
        <div className={'inputContainer'}>
            <label className='inputLabel' for="email"><b>Email</b></label>
            <br />
            <input 
                type="email"
                placeholder="Enter Your Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className={'inputBox'}
            />
            <br />
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
            <label className='inputLabel' for="password"><b>Password</b></label>
            <br />
            <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(ev) => setPassword(ev.target.value)}
                className={'inputBox'}
            />
            <br />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
            <input className={'inputLogin'} type="button" onClick={onButtonClick} value={'Login'} />
        </div>
      </div>
    </div>
  )
}

export default Login
