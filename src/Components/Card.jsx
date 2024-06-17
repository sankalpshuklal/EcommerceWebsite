/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { dataContext } from "../Context/AppContext";
import { FaHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoCart } from "react-icons/io5";

const Card = ({item}) => {
    const { setFavList, setCartList} = useContext(dataContext);
    const [favActive, setFavActive] = useState(false);
    const [cartActive, setCartActive] = useState(false);
   

    function handleFavClick(item){
        setFavActive(true)
     
        setFavList(prev => [...prev, item])
    }
    function handleCartClick(item){
        setCartActive(true)
     
        setCartList(prev => [...prev, item])
    }
    
    return (

        <div className="h-48 w-48 shadow-md m-2 relative ">
            <img className="h-32 w-full" src={item.images}></img>
            <p className="h-12 w-full">{item.title}</p>
            <div className="h-5 w-5 text-2xl absolute right-4 bottom-4" 
        onClick={()=>{handleFavClick(item)}}
            >{
                
                favActive? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>
            }

            </div>
            <div className="h-5 w-5 text-2xl absolute right-12 bottom-4" 
        onClick={()=>{handleCartClick(item)}}
            >{
                
                cartActive? <IoCart></IoCart> : <TiShoppingCart></TiShoppingCart>
            }

            </div>
        </div>
    
    )
}

export default Card
