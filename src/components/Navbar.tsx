import sipsync from '../assets/sipsynclogo.png';
const Navbar=()=>{
    return(
        <>
            <div className="navContainer">
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#111315',padding:'20px'}} >
                    <div>
                        <span><img src={sipsync} alt="" height={50} width={50} /></span>
                    </div>
                     
                    <div>
                        <span>
                            My-Cart
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;