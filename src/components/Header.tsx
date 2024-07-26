import heroImg from '../assets/bg-cafe.jpg';
import Navbar from './Navbar';
export const Header=()=>{
    return(
        <>
            <Navbar/>
            <div className='' style={{position:'relative'}}>
                <img src={heroImg} alt="hero-img" height="300px" width="100%"/>
            </div>
        </>
    )
}