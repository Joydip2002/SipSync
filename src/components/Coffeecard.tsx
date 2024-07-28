import React, { useState } from 'react';
import fillrating from '../assets/Star_fill.svg';
import rating from '../assets/Star.svg';
import CoffeeModal from './CoffeeModal';

const CoffeeCard:React.FC<any>=({getData})=>{
    const [isModalOpen,setModalOpen] = useState(false);
    const [modalData,setModalData] = useState([]);
    const openCoffeeModal=(data:any)=>{
        setModalOpen(true);
        setModalData(data);
    }
    const onCloseModal=()=>{
        setModalOpen(false);
        setModalData([]);
    }    
    
    return (
        <>
            {getData && <div key={getData.id??''} onClick={()=>openCoffeeModal(getData)}>
                <div className='cardImage' style={{position:'relative'}}>
                    <img src={getData.image} alt={getData.name} height="150px" width="250px"/>
                    <span>{getData.popular?<span style={{margin:'8px 0 0 8px',padding:'4px 8px', borderRadius:'10px',position:'absolute',left:'0',color:'#000',fontSize:'10px',background:'#F6C768'}}>Popular</span>:''}</span>
                </div>
                <div className='cardDetails'>
                    <span>{getData.name??''}</span>
                    <span>{getData.price??''}</span>
                </div>
                <div className='ratingVoteDetails'>
                    <p className='ratingPart'>
                        <img src={getData.rating?fillrating:rating} alt="rating"/>
                        {getData.rating?
                        <>
                            <span>{getData.rating}</span>
                            <span style={{color:'gray'}}>({getData.votes+' votes'})</span>
                        </>
                        :<span style={{color:'gray'}}>No ratings</span>}
                    </p>
                    <span>{getData.available?'':<span style={{color:'red',fontSize:'12px'}}>Sold out</span>}</span>
                </div>
            </div>
            }
            {
                isModalOpen && modalData && (<CoffeeModal data={modalData} onClose={onCloseModal} />)
            }
        </>
    )
}

export default CoffeeCard;