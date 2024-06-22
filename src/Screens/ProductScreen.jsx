import { useContext } from "react";
import { useLocation } from "react-router-dom"
import { dataContext } from "../Context/AppContext";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const ProductScreen = () => {
  const {allProducts, setCartList} = useContext(dataContext);
  
  
  const locate = useLocation();
  const itemID = parseInt(locate.pathname.split("/").at(-1))
  
  const currentProduct = allProducts.find((ele)=>ele.id === itemID)

  function handleAddToCart(item){
    setCartList(prev => [...prev, item])

  }
  function handlePurchase(){
    console.log("not allowed")
  }
  return (
    <div className=" w-full ">
    <Header></Header> 
    <div className="h-20 w-full "></div>
      {currentProduct? (
        
        <div className="h-[30rem] w-full  flex p-10">
        <div className="h-96 w-2/5 shadow-lg rounded-md mr-10">
          <img src={currentProduct.thumbnail}></img>
        </div>
        <div className="h-96 w-4/5  ml-10 relative"> 
        <h3 className="text-5xl font-bold mb-10">{currentProduct.title}</h3>
        <p className="text-2xl font-thin"> {currentProduct.description}</p>
        <p className="text-2xl font-thin my-5"> {`$${currentProduct.price}`}</p>
        <div className="w-full flex justify-evenly items-center absolute bottom-10">
        <button className="h-10 w-80 bg-black text-white shadow-md" onClick={()=>{handleAddToCart(currentProduct)}}>Add to Cart</button>
        <button className="h-10 w-80 bg-black text-white shadow-md" onClick={()=>{handlePurchase}}>Purchase</button>
        </div>
        
        </div>
        </div>
      
      
      ):(<div> loading</div>)}
      <Footer></Footer>
    </div>

  )
}

export default ProductScreen
