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
    const [signup,setSignupData] = useState({
        name:'',
        email:'',
        address:'',
        password:'',
        cpassword:''
    })
    // const [register,handleSubmit] = useForm(); 
    // console.log(register);
    
    const openForm=(type:string)=>{
        setForm(type);
        setActiveForm(true);
    }
    const loginhandleFunc=(e : React.ChangeEvent<HTMLInputElement>)=>{
        setLoginData({...login,[e.target.name]:e.target.value});
    }
    const loginFunc=async (e)=>{
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
    const signupFunc=async (e)=>{
        e.preventDefault();
        // console.log(signup);
        const signupUrl="http://127.0.0.1:200/register";
        const data = await axios.post(signupUrl,signup);
        console.log(data);
        
        if(data.status==200){
            toast.success(data.data?.msg);
            setSignupData({
                name:'',
                email:'',
                address:'',
                password:'',
                cpassword:''
            });
            navigate('/login');
        }else{
            toast.error(data.data?.msg);
        }
        
    }
    const signupHandleFunc=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSignupData({...signup,[e.target.name]:e.target.value});
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
                            <form onSubmit={signupFunc}>
                                <div className='signup'>
                                    <input type="text" name="name" value={signup.name} placeholder='Enter your name' onChange={signupHandleFunc}/>
                                    {/* {errors.firstName?.type === "required" && (
                                        <p role="alert">First name is required</p>
                                    )} */}
                                    <input type="email" name="email"  value={signup.email} placeholder='Enter your email' onChange={signupHandleFunc}/>
                                    <input type="text" name="address"  value={signup.address} placeholder='Enter your address' onChange={signupHandleFunc}/>
                                    <input type="password" name="password" value={signup.password} placeholder='Enter password' onChange={signupHandleFunc}/>
                                    <input type="password" name="cpassword" value={signup.cpassword} placeholder='Enter confirm password'onChange={signupHandleFunc}/>
                                    <button>Register</button>
                                </div>
                            </form>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;