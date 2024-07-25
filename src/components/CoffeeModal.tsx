import { CoffeeList } from "../Interface/interface";
import { FaTimes } from "react-icons/fa";

const CoffeeModal:React.FC<CoffeeModalProps>=({data,onClose})=>{
    return(
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="modal-close" onClick={onClose}><FaTimes /></button>
                    <img src={data.image} alt={data.name} className="modal-image" />
                    {/* You can add more content here based on `data` */}
                </div>
            </div>
        </>
    )
}
export default CoffeeModal;