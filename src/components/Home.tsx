import Login from "./auth/Login";
import CoffeeContent from "./CoffeeContent";
import { Header } from "./Header";

const Home=()=>{
    console.log('====================================');
    console.log(localStorage.getItem('user'));
    console.log('====================================');
    if(!localStorage.getItem('user')){
        return (
            <Login/>
        )
    }
    return(
        <>
            <Header/>
            <CoffeeContent/>
        </>
    )
}
export default Home;