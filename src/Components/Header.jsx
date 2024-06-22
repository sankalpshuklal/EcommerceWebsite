import { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { dataContext } from "../Context/AppContext";
import { Link, useNavigate} from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";



const Header = () => {
    const { setItemtag,  setItemCategory,} = useContext(dataContext);
    const [searchItem, setSearchItem] = useState(null);
    const navigation =useNavigate();

    function handleSearch(e){
        e.preventDefault();
        setItemtag(searchItem)
    
    }
    function handleSearchValueChange(e){
        setSearchItem(e.target.value)
        // setItemtag(e.target.value)
       
    }
    function handleLogoClick(){
        navigation("/");
        setItemCategory(null)
        setItemtag(null)


    }
    return (

        <div className="h-20 w-full bg-white flex justify-between items-center fixed z-10" >
            <div onClick={handleLogoClick} className="h-3/5 cursor-pointer w-1/5 flex justify-center items-center font-bold text-3xl">SHOPHALL</div>
            <form className="h-3/5 w-2/5 flex ">
                <input className="h-full w-4/5 bg-gray-200 rounded-md rounded-e-none px-5 "
                 onChange={handleSearchValueChange}
                 
                 ></input>
                 
                <button type="submit" className="h-full w-1/5 bg-black text-2xl flex justify-center items-center text-white rounded-md rounded-s-none border-none"
                onClick={handleSearch}> <IoIosSearch></IoIosSearch></button>
            </form>
            <div className="h-3/5 w-1/5  flex justify-evenly items-center ">
                
                <Link className="h-full w-1/5  flex justify-center items-center text-3xl"
                to="/profile"> <FaUser></FaUser></Link>
                <Link className="h-full w-1/5  flex justify-center items-center text-3xl"
                to="/favouriteProducts"> <FaRegHeart></FaRegHeart></Link>
                <Link className=" h-full w-1/5  flex justify-center items-center text-3xl"
                to="/cart"> <TiShoppingCart></TiShoppingCart></Link>
              
            </div>
        </div>


    )
}

export default Header
