import { useState } from 'react';
import sipsync from '../../assets/sipsynclogo.png';
const Login=()=>{
    const [isForm,setForm] = useState("login");
    const [activeForm,setActiveForm]=useState(true);
    const openForm=(type:string)=>{
        setForm(type);
        setActiveForm(true);
    }
    return(
        <>
            <div className="loginSignupConatiner">
                <div className='card-container'>
                    <div className="loginSignupButton">
                        <p className={isForm=='login'?'active':''} onClick={()=>openForm('login')}>Login</p>
                        <p className={isForm=='register'?'active':''} onClick={()=>openForm('register')}>Register</p>
                    </div>
                    <div className="formCard">
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src={sipsync} alt="" height={80} width={80} style={{borderRadius:'50%',margin:'2px'}}/>
                        </div>
                        {/* <hr /> */}
                        <div className="loginSignupform">
                            {
                                isForm=='login'?
                                <div className='login'>
                                    <input type="text" placeholder="Username/Email" />
                                    <input type="password" placeholder="Password" />
                                    <button>Login</button>
                                </div>
                                :
                            <div className='signup'>
                                <input type="text" placeholder='Enter your name' />
                                <input type="email" placeholder='Enter your email' />
                                <input type="text" placeholder='Enter your address' />
                                <input type="password" placeholder='Enter password' />
                                <input type="password" placeholder='Enter confirm password' />
                                <button>Register</button>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;