import { filterProps } from "../Interface/interface";
const FilterButtons:React.FC<filterProps>=({name,onClick,isActive})=>{
    const filterFunc=()=>{
        onClick(name);
    }
    return(
        <>
            <p onClick={filterFunc} className={isActive?'active':''}>{name}</p>
        </>
    )
}
export default FilterButtons;