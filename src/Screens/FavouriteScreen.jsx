import { useContext } from "react"
import { dataContext } from "../Context/AppContext"
import Card from "../Components/Card";
import Header from "../Components/Header";
const FavouriteScreen = () => {
    const { favList } = useContext(dataContext);
    return (
        <div>
<div className="flex flex-wrap ">
            <Header></Header> 
            <div className="h-20 w-full bg-red-200"></div>
            {favList.length ? (
                favList.map((value) => (
                    <div key={value.id} className="my-10">
                    <Card  item={value} infavList={true}></Card> 
                    </div>
                   
                ))
                )
                :
                (
                    <div className="flex justify-center items-center text-3xl font-thin w-full h-[30rem]">NO Favourite item</div>
                )}
        </div>
        </div>
        
    )
}

export default FavouriteScreen
