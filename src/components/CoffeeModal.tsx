import { FaTimes } from "react-icons/fa";
import ratings from "../assets/Star_fill.svg";
import noRatings from "../assets/Star.svg";
const CoffeeModal:React.FC<any>=({data,onClose})=>{
    return(
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <div style={{display:'flex',justifyContent:'space-between', flexDirection:'column'}}>
                        <div>
                            <button className="modal-close" onClick={onClose}><FaTimes/></button>
                            <img src={data.image} alt={data.name} className="modal-image" />
                            <div style={{display:'flex',justifyContent:'space-between',alignItems:"center"}}>
                                <h4>{data.name} <span>{data.available?<span className="availableItems">Available</span>:''}</span> </h4>
                                <h5 style={{display:'flex',alignItems:'center'}}>{data.rating!="" && data.rating > 0 ? <img src={ratings} alt="" />: <img src={noRatings} alt="" /> } {data.rating??'no ratings'}</h5>
                            </div>
                            <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                                {data.popular?<span className="pills-tab">Popular</span>:''}
                                {data.votes?<span className="pills-tab">{data.votes} Votes</span>:''}
                            </div>
                        </div>
                        <div className="footer">
                            {data.available?<button className="button add-to-cart">Add To Cart</button>:''}
                            <button className="button book-now">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CoffeeModal;