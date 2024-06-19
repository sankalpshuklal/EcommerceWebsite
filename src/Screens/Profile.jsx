import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const navigation = useNavigate();
 
  return (
    <div className=" w-full ">
    <Header></Header> 
    <div className="h-20 w-full "></div>
      
        
        <div className="h-[30rem] w-full  flex p-10">
        <div className="h-96 w-2/5 text-black-200 text-[20rem] shadow-lg rounded-md mr-10">
        <FaUser></FaUser>
        </div>
        <div className="h-96 w-4/5  ml-10 relative"> 
        <h3  className="text-5xl font-bold ml-5 mb-10">UserName</h3>
        <div className="w-full flex justify-evenly items-center absolute top-20">
        <button  title="This does NOTHING rn" onClick={()=>{navigation("/cart")}} className="h-10 w-80 bg-black text-white shadow-md" >My Addresses</button>
        <button   title="This does NOTHING rn" className="h-10 w-80 bg-black text-white shadow-md">Bank Details</button>
        </div>
        <div className="w-full flex justify-evenly items-center absolute top-32">
        <button title="This will take you to your cart List" onClick={()=>{navigation("/cart")}} className="h-10 w-80 bg-black text-white shadow-md" >Go to Cart</button>
        <button title="This does NOTHING rn" className="h-10 w-80 bg-black text-white shadow-md">MyOrders</button>
        </div>
        </div>
        </div>
      
      
      
      <Footer></Footer>
    </div>

  
  )
}

export default Profile
