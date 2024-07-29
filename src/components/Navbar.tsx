import { FaCircleUser } from 'react-icons/fa6';
import sipsync from '../assets/sipsynclogo.png';
import { IoMdCart } from 'react-icons/io';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar=()=>{
    const navigate = useNavigate();
    const [tooltip,openTooltip] = useState(false);
    const toggleTooltip=()=>{
        openTooltip(!tooltip);
    }
    const handleTooltipHeading=()=>{
        openTooltip(false);
    }
    const logoutFunc=()=>{
        openTooltip(false);
        localStorage.clear();
        navigate('/login');
    }
    return(
        <>
            <div className="navContainer">
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#111315',padding:'5px 10px'}} >
                    <div>
                        <span><img src={sipsync} alt="" height={50} width={50} style={{borderRadius:'25px'}}/></span>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px'}}>
                        <span>
                            <IoMdCart style={{color:'#fff',width:'25px',height:'25px'}} />
                        </span>
                        
                        <span style={{position:'relative'}}>
                            <FaCircleUser style={{color:'#fff',width:'25px',height:'25px'}} onClick={toggleTooltip} />
                            {tooltip?<div className='user-panel-card' style={{borderRadius:'5px',left:'-40px',background:'#fff',position:'absolute',display:'flex',justifyContent:'center',flexDirection:'column',zIndex:'999'}}>
                                <span className='user-panel-heading' onClick={handleTooltipHeading}><Link to={'/profile'}>Profile</Link></span>
                                <span className='user-panel-heading' onClick={logoutFunc}>Logout</span>
                            </div>:''}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;