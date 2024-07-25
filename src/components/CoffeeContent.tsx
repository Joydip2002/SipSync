import React, { useEffect, useState } from 'react'
import coffeeContentImg from '../assets/vector.svg';
import CoffeeCard from './Coffeecard';
import FilterButtons from './FilterButtons';
import {CoffeeList} from '../Interface/interface';
import axios from 'axios';

const CoffeeContent:React.FC= () => {
    const [data,setData] = useState([]);
    const [isLoading,setLoading]=useState(true);
    const [activeButton, setActiveButton] = useState("All Products");

    const handleClick = (buttonName:string) => {
        setActiveButton(buttonName);
    };
    const getCoffeeList= async (activeButton:string)=>{
        try{
            // const dataList = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json').then((res)=>{console.log(res);}).then((data)=>{console.log(data)})
            const dataList=await axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
            if(dataList.status == 200){
                if(activeButton=="Available Now"){
                    setLoading(true);
                    const availableList=dataList.data.filter((list: { available: boolean; })=>list.available==true);
                    setData(availableList);
                    setLoading(false);
                }else{
                    setLoading(true);
                    setData(dataList.data);
                    setLoading(false);
                }
            }
        }catch (error){
            console.log(`getCoffeeList : ${error}`);
        }
    }
    useEffect(()=>{
        getCoffeeList(activeButton);
    },[activeButton])
  return (
    <>
        <div className="coffeeOuterContainer">
                <div className="coffeeMainContent"> 
                    <div style={{position:'relative', background:'transparent', display:'flex',justifyContent:'center',padding:'10px 0'}}>
                        <img src={coffeeContentImg} alt="coffeeContentImg" style={{background:'transparent'}} />
                        <div className="coffeeContentHeading">
                            <h2>Our Collection</h2>
                            <p className='truncatebyLine by4'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                        </div>
                    </div>
                    <div className="centerContent gap10 coffeeListFilterContainer">
                        {/* <p className="active">All Products</p> */}
                        <FilterButtons name='All Products' isActive={activeButton=="All Products"} onClick={handleClick}/>
                        <FilterButtons name='Available Now' isActive={activeButton=="Available Now"} onClick={handleClick}/>
                    </div>
                    {
                        isLoading
                        ?
                        <div style={{textAlign:'center',color:'#fff'}}>Loading data...</div>
                        :
                        <div className='coffeeListingContainer'>
                            {data.map((d:CoffeeList)=>(
                                <div className='innerListingContainer' key={d.id}>
                                    <CoffeeCard getData={d}/>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
    </>
  )
}

export default CoffeeContent    