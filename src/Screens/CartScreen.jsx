import { useContext } from "react"
import { dataContext } from "../Context/AppContext"
import Card from "../Components/Card";
import Header from "../Components/Header";
const CartScreen = () => {
    const {cartList } = useContext(dataContext);
  
    return (
        <div >
        <Header></Header> 
<div className="flex flex-wrap ">
            
            <div className="h-20 w-full bg-red-200"></div>
            <div className="w-full flex flex-wrap p-10">
            {cartList.length ? (
                cartList.map((value) => (
                  <div key={value.id} className="my-10">
                    <Card  item={value} inCartList={true}></Card> 
                    </div>
                ))
                )
                :
                (
                    <div className="flex justify-center items-center text-3xl font-thin w-full h-[30rem]">NO Cart item</div>
                )}
            </div>
            
        </div>
        </div>
        
    )
}

export default CartScreen
