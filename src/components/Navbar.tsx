import sipsync from '../assets/sipsynclogo.png';
import { IoMdCart } from "react-icons/io";

const Navbar=()=>{
    return(
        <>
            <div className="navContainer">
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#111315',padding:'5px 10px'}} >
                    <div>
                        <span><img src={sipsync} alt="" height={50} width={50} style={{borderRadius:'25px'}}/></span>
                    </div>
                    <div>
                        <span>
                            <IoMdCart style={{color:'#fff',width:'25px',height:'25px'}} />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;