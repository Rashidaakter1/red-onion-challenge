import React from 'react';

const Signup = () => {
    return (
        <form className='logInForm' action="">

                <div className='inputField'>
                    <input className='' type="text" placeholder='Name' />
                    <input type="email" name="email" id="" placeholder='Email' required />
                    <input type="password" name="password" id="" placeholder='Password' required />
                    
                    <button className='btn text-white w-100 rounded py-2' >Sign Up</button>
                    <p className='mt-2'>Already have an account?</p>
                </div>
               
            </form>
    );
};

export default Signup;