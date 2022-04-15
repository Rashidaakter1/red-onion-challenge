import React from 'react';
import './Login.css'
const Login = () => {
    return (
        
            <form className='logInForm' action="">

                <div className='inputField'>
                    <input className='' type="text" placeholder='Name' />
                    <input type="email" name="email" id="" placeholder='Email' required />
                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input type="password" name=" password" id="" placeholder='Confirm Password' required />
                    <button className='btn text-white w-100 rounded py-2' >Sign In</button>
                    <p className='mt-2'>Already have an account?</p>
                </div>
               
            </form>
       
    );
};

export default Login;