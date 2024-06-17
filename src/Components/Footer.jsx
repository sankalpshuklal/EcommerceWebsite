
const Footer = () => {
  return (
    <div className="h-80 w-full bg-gray-200 flex justify-evenly items-center">
      <div className="h-4/5 text-black flex justify-evenly flex-col w-1/5 ">
        <h5 className="text-bold text-xl hover:underline cursor-pointer ml-16">Shop</h5>
        <ul>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Gifts</li>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Student Discount</li>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Bulk orders</li>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Log out</li>
          
        </ul>
      </div>
      <div className="h-4/5 text-black flex justify-evenly flex-col w-1/5 ">
        <h5 className="text-bold text-xl hover:underline cursor-pointer ml-16">About</h5>
        <ul >
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">About us</li>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Social Responsibiliy</li>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Affiliates</li>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Sell</li>
          
        </ul>
      </div>
      <div className="h-4/5 text-black flex justify-evenly flex-col w-1/5 ">
        <h5 className="text-bold text-xl hover:underline cursor-pointer  ml-16">Help</h5>
        <ul>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Delivery</li>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Returns</li>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Help Center</li>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Guidelines</li>
          
        </ul>
      </div>
      <div className="h-4/5 text-black flex justify-evenly  flex-col w-1/5 ">
        <h5 className="text-bold text-xl hover:underline cursor-pointer ml-16">Social</h5>
        <ul >
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Instagram</li>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Twitter</li>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Facebook</li>
          <li className="hover:text-gray hover:underline cursor-pointer ml-16">Email</li>
          
        </ul>
      </div>
    </div>
  )
}

export default Footer
