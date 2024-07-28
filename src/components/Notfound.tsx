import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate();
    const goToHomePage=()=>{
        navigate('/');
    }
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <p style={{color:'#fff',fontSize:'20px'}}>404 Not Found!</p>
            <button onClick={goToHomePage}>Go Back</button>
        </div>
        </div>
    )
}

export default Notfound
