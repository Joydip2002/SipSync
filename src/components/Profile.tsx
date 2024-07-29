import { LuLogOut } from "react-icons/lu";

const Profile=()=>{
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
                                    <input type="eamil" placeholder="Enter your mail" disabled/>
                                </div>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <label htmlFor="" style={{fontSize:'12px'}}>Address</label>
                                    <input type="text" />
                                </div>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <label htmlFor="" style={{fontSize:'12px'}}>Password</label>
                                    <input type="password" placeholder="Enter current password" />
                                </div>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <label htmlFor="" style={{fontSize:'12px'}}>New Password</label>
                                    <input type="password" placeholder="Set new password" />
                                </div>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <label htmlFor="" style={{fontSize:'12px'}}>Confirm Password</label>
                                    <input type="password" placeholder="Confirm password" />
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