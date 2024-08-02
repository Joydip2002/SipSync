import { useEffect, useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { toast } from "react-toastify";
import { ProfileType } from "../Interface/interface";
import axios from "axios";

const Profile=()=>{
    const [isProfile,setProfile] = useState<any>();
    const [isCheckedPassword,setCheckedPassword]=useState<any>("");

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setProfile({...isProfile,[e.target.name]:e.target.value})
        console.log(isProfile);
    }
    
    const checkedPasswordFunc=async ()=>{
        try {
            var data = {
                'email':isProfile.email??"",
                'password':isCheckedPassword.password??""
            }
            var query=await axios.post(`http://localhost:200/checkPassword`,data);
            console.log(query);
            if(query.data.status==200){
                toast.success(query.data.msg)
            }
            
        } catch (error) {
            
        }
    }
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedPassword(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    
    const getProfileData=async ()=>{
        try{
            if(localStorage.getItem('user')!=""){
                var loggedEmail=localStorage.getItem('user');
                var getProfileUrl="http://127.0.0.1:200/profile";
                const dataReq =await fetch(`${getProfileUrl}/${loggedEmail}`);
                const profileData=await dataReq.json();
                if(profileData.status==200){
                    setProfile(profileData.data);
                }
            }
        }catch(error) {
            toast.error(`Profile.tsx : getProfileData ${error}`);
        }
    }
    useEffect(()=>{
        getProfileData();
    },[])
    return(
        <>
            <div style={{display:'flex',flexWrap:'wrap'}}>
                <div style={{width:'20%',height:'100vh',backgroundColor:"#fff",display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <div style={{padding:'0 10px'}}>
                        <div style={{textAlign:"center"}}>
                            <img src="https://tse4.mm.bing.net/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?" height={80} width={80} alt="" style={{borderRadius:'50%'}} />
                            <p style={{margin:0}}>Joydip Manna</p>
                        </div>
                        <div className="profile-Deatils">
                            <form action="" className="profile-form">
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <label htmlFor="" style={{fontSize:'12px'}}>Email</label>
                                    <input type="email" value={isProfile?.email??""} placeholder="Enter your mail" disabled/>
                                </div>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <label htmlFor="" style={{fontSize:'12px'}}>Address</label>
                                    <input type="text" name="address" value={isProfile?.address} placeholder="Enter your address" onChange={handleChange} />
                                </div>
                                <div style={{position:'relative',display:'flex',flexDirection:'column'}}>
                                        <label htmlFor="" style={{fontSize:'12px'}}>Password</label>
                                        <input type="password" name="password" placeholder="Enter current password" onChange={handleChangePassword}/>
                                    <div style={{position:'absolute',top:'16px',right:'10px'}}>
                                        <span style={{fontSize:'10px',background:'#FFDE59',padding:'5px'}}>Verify</span>
                                    </div>
                                </div>
                                
                                <button style={{fontSize:'12px'}}>Update Profile</button>
                            </form>
                        </div>
                    </div>
                    <div style={{padding:'0 10px'}}>
                        <p  className="profile-logout" style={{float:'right'}}>
                            <LuLogOut/>
                        </p>
                    </div>
                </div>
                <div style={{width:'80%',height:'100vh'}}>
                    <p style={{padding:'10px',background:'#fff',margin:0}}>My Cart</p>
                    
                </div>
            </div>
        </>
    )
}
export default Profile;