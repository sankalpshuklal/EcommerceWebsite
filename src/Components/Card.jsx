/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { dataContext } from "../Context/AppContext";
import { FaHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";



const Card = ({ item, infavList = false , inCartList = false}) => {
    const {favList, setFavList, setCartList, cartList } = useContext(dataContext);
    const [favActive, setFavActive] = useState(false);
    const [cartActive, setCartActive] = useState(false);
    const navigation = useNavigate();



    function handleFavClick(item) {
        if (favActive || infavList) {
            setFavActive(false);
            setFavList((prev)=>(prev.filter((ele)=>ele.id != item.id)))
        } else {
            setFavActive(true)
            if(!favList.includes(item)){
                setFavList(prev => [...prev, item])
            }
           
        }
    }
    function handleCartClick(item) {
     
        if(cartActive || inCartList){
           setCartActive(false);
           setCartList((prev)=>(prev.filter((ele)=>ele.id != item.id)))
        }else{
            setCartActive(true)

            if (!cartList.includes(item)) {
                setCartList(prev => [...prev, item])
            }
        }

    }
    function handleCardClick(item) {
        navigation(`/product/${item.id}`);

    }

    return (

        <div className="h-48 w-48 shadow-md m-2 relative ">
            <img onClick={() => { handleCardClick(item) }} className="h-32 w-full  cursor-pointer" src={item.thumbnail}></img>
            <p onClick={() => { handleCardClick(item) }} className="h-12 w-full cursor-pointer">{item.title}</p>
            <div className="h-5 w-5 text-2xl absolute right-4 bottom-4 hover:text-gray-500 cursor-pointer"
                onClick={() => { handleFavClick(item) }}
            >{
                    !infavList ? favActive ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>: <CiCircleRemove></CiCircleRemove>
                }

            </div>
            <div className="h-5 w-5 text-2xl hover:text-gray-500 cursor-pointer absolute right-12 bottom-4"
                onClick={() => { handleCartClick(item) }}
            >{

                   !inCartList ? cartActive ? <IoCart></IoCart> : <TiShoppingCart></TiShoppingCart>: <CiCircleRemove></CiCircleRemove>
                }

            </div>
        </div>

    )
}

export default Card
