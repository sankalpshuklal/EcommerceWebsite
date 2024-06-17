import { createContext, useState } from "react"

//creating context
export const dataContext = createContext();

//base url for fetching all data
const baseURL = 'https://dummyjson.com/products';


//yahan pe red line kyun aa rahi hai ab?
// eslint-disable-next-line react/prop-types
export default function AppContext({ children }) {

    const [loading, setLoading] = useState(false);
    const [pages, setPages] = useState(null);
    const [allProducts, setAllProducts] = useState([]);
    const [itemtag, setItemtag] = useState(null);
    const [categoryList, setcategoryList]  = useState([]);
    const [itemCategory, setItemCategory] = useState(null);
    const [firstVisit, setFirstVisit] = useState(true);
    const [favList, setFavList] = useState([]);
    const [cartList, setCartList] = useState([]);



    //function for fetching all data from api
    async function fetchAPI() {
        setLoading(true);

        try {
            //calling for filling up the category list
            const catRes = await fetch(`${baseURL}/category-list`);
            const catResSet = await catRes.json();
            setcategoryList(catResSet)
            
            if (itemtag) {
                const response = await fetch(`${baseURL}/search?q=${itemtag}`);
                const data = await response.json()
                setAllProducts(data.products);
                setFirstVisit(false);
            }else if (itemCategory){
                const response = await fetch(`${baseURL}/category/${itemCategory}`);
                const data = await response.json()
                setAllProducts(data.products);
            }else {
                const response = await fetch(`${baseURL}`)
                const data = await response.json()
                setAllProducts(data.products);
            }


        } catch (error) {
            console.log(error);
        }
        setLoading(false);
       
    }


    const values = {
        loading,
        setLoading,
        pages,
        setPages,
        allProducts,
        setAllProducts,
        itemtag,
        setItemtag,
        fetchAPI,
        categoryList,
        setcategoryList,
        firstVisit,
        setFirstVisit,
        favList,
        setFavList,
        cartList,
        setCartList, 
        itemCategory,
        setItemCategory
    };

    return <dataContext.Provider value={values}>
        {children}
    </dataContext.Provider>
}