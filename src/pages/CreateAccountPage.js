import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if (password !== confirmPassword) {
                setError('Password and confirm password do not match');
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <div className='login-page'>
                <h1>Create Account</h1>
                {error && <p className="error">{error}</p>}
                <div className='input-field'>
                    <input
                        placeholder="Your email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <input
                        type="password"
                        placeholder="Re-enter your password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)} />
                </div>
                <div className='log-btn'>
                    <button onClick={createAccount}>Create Account</button>
                </div>
                <div>
                    <Link to="/login">Already have an account? Log in here</Link>
                </div>
            </div>
        </>
    );
}

export default CreateAccountPage