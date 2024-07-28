import { useState } from 'react';
import sipsync from '../../assets/sipsynclogo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Home from '../Home';

const Login=()=>{
    const navigate=useNavigate();
    const [isForm,setForm] = useState("login");
    const [activeForm,setActiveForm]=useState(true);
    const [login,setLoginData]=useState({
        username:'',
        password:''
    });

    const openForm=(type:string)=>{
        setForm(type);
        setActiveForm(true);
    }
    const loginhandleFunc=(e : React.ChangeEvent<HTMLInputElement>)=>{
        setLoginData({...login,[e.target.name]:e.target.value});
    }
    const loginFunc=async (e:React.DOMAttributes<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            if(login.password!="" && login.password!=""){
                const loginApi='http://127.0.0.1:200/login';
                const data = await axios.post(loginApi,login);
                if(data.data.status==200){
                    toast.success(data.data.msg);
                    localStorage.setItem('user',data.data?.data.email);
                    return navigate('/');
                }else{
                    toast.error(data.data.msg)
                }
            }else{
                toast.info('Please fill up required field')
            }
        }catch (e) {
            return toast.error(e);
        }
    }
    if(localStorage.getItem('user')){
        return (
            <Home/>
        )
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
                                <form action="" onSubmit={loginFunc}>
                                    <div className='login'>
                                        <input type="text" name="username" value={login.username} placeholder="Username/Email" onChange={loginhandleFunc}/>
                                        <input type="password" name="password" value={login.password} placeholder="Password" onChange={loginhandleFunc}/>
                                        <button>Login</button>
                                    </div>
                                </form>
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