import { useContext } from "react"
import { dataContext } from "../Context/AppContext"
import Card from "../Components/Card";
import Header from "../Components/Header";
const CartScreen = () => {
    const {cartList } = useContext(dataContext);
  
    return (
        <div>
<div className="flex flex-wrap ">
            <Header></Header> 
            <div className="h-20 w-full bg-red-200"></div>
            {cartList.length ? (
                cartList.map((value) => (
                  <div key={value.id} className="my-10">
                    <Card  item={value}></Card> 
                    </div>
                ))
                )
                :
                (
                    <div className="my-24">NO Cart item</div>
                )}
        </div>
        </div>
        
    )
}

export default CartScreen
