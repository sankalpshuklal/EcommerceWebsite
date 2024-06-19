import { useContext } from "react"
 import Header from "./Header"
import { dataContext } from "../Context/AppContext"
import Card from "./Card"
const Hero = () => {

    const { allProducts, firstVisit, loading, setItemCategory, setItemtag } = useContext(dataContext);
    
    function handleCategory(value){
        setItemCategory(value);
        setItemtag(null)
    }


    return (
        <div className="h-auto w-full  relative">
            <Header></Header> 
            <div className="h-20 w-full "></div>
            <div className="h-12 w-full  my-30 flex justify-between shadow-md items-center">
                <div onClick={()=>{handleCategory('beauty')}} className="h-full w-1/6 font-semibold flex justify-center items-center text-xl cursor-pointer">Beauty</div>
                <div onClick={()=>{handleCategory('fragrances')}} className="h-full w-1/6 font-semibold flex justify-center items-center text-xl cursor-pointer">Fragrances</div>
                <div onClick={()=>{handleCategory('furniture')}} className="h-full w-1/6 font-semibold flex justify-center items-center text-xl cursor-pointer">Furniture</div>
                <div onClick={()=>{handleCategory('groceries')}} className="h-full w-1/6 font-semibold flex justify-center items-center text-xl cursor-pointer">Groceries</div>
                <div onClick={()=>{handleCategory('smartphones')}} className="h-full w-1/6 font-semibold flex justify-center items-center text-xl cursor-pointer">Smart-phones</div>

            </div>
            <div className="h-3/5 w-full  my-5 flex flex-wrap justify-evenly p-10">
                {firstVisit === true ? (
                    loading === true ? (<div>loading</div>) : (
                        allProducts.length? (
                    allProducts.map((value)=>(
                        <Card key={value.id} item = {value}></Card>
                ))
                )
                :
                (
                <div> No items found </div>
                )
                    )
                )
                : (
                allProducts.length? (
                    allProducts.map((item)=>(
                <Card key={item.id} item = {item}></Card>
                ))
                )
                :
                (
                <div> No items found </div>
                )
                )
                    }
            </div>

        </div>
    )
}

export default Hero
