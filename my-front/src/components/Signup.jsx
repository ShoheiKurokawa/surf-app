import React, {useState} from 'react'
import './styles/SignInOut.css'
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [repeatPasswordError, setRepeatPasswordError] = useState('');

    const onButtonClick = () => {
        validateEmail(email);
        validatePassword(password);
        validateRepeatPassword(repeatPassword);

        // Check for errors after validation
        if (validateEmail(email) && validatePassword(password) && validateRepeatPassword(repeatPassword)) {
            axios.post('http://localhost:3000/auth/register', { email, password })
                .then((res) => {
                    alert('Signup successful');
                    console.log(res);
                    window.location.href = '/login';
                })
                .catch((err) => {
                    console.log(err);
                    alert('Signup failed');
                });
        } else {
            alert('Invalid email or password');
        }
    }

    const validateEmail = (email) => {
        if (!email.includes('@')) {
            setEmailError('Invalid email');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };

    const validatePassword = (password) => {
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };

    const validateRepeatPassword = (repeatPassword) => {
        if (repeatPassword !== password) {
            setRepeatPasswordError('Passwords do not match');
            return false;
        } else {
            setRepeatPasswordError('');
            return true;
        }
    };


  return (
    <div className='container'>
        <div className='field'>

            <div className='title'>Sign Up</div>
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
                <label className='inputLabel' for="repeat password"><b>Repeat Password</b></label>
                <br />
                <input
                    type="password"
                    value={repeatPassword}
                    placeholder="Repeat your password"
                    onChange={(ev) => setRepeatPassword(ev.target.value)}
                    className={'inputBox'}
                />
                <br />
                <label className="errorLabel">{repeatPasswordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input className={'inputSignup'} type="button" onClick={onButtonClick} value={'Sign Up'} />
            </div>
        </div>
    </div>
  )
}

export default Signup
