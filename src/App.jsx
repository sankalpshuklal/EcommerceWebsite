import { useContext, useEffect } from "react"
import { dataContext } from "./Context/AppContext"
import HomeScreen from "./Screens/HomeScreen"
import { Routes, Route } from 'react-router-dom'
import CartScreen from "./Screens/CartScreen"
import FavouriteScreen from "./Screens/FavouriteScreen"
import ProductScreen from "./Screens/ProductScreen"
import Profile from "./Screens/Profile"

const App = () => {
  const { fetchAPI, itemtag, itemCategory } = useContext(dataContext);

  useEffect(() => {
    fetchAPI()

   console.log(itemCategory)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ itemCategory, itemtag]);
  return (

    <div>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/cart" element={<CartScreen></CartScreen>}></Route>
        <Route path="/favouriteProducts" element={<FavouriteScreen></FavouriteScreen>}></Route>
        <Route path="/product:id" element={<ProductScreen></ProductScreen>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/*" element={<HomeScreen></HomeScreen>}></Route>
      </Routes>
    </div>
  )
}

export default App
