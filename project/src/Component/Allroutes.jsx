import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import AllProductDetail from "../Pages/AllProductDetails";

export default function Allroutes(){

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product" element={<ProductDetails />}></Route>
            <Route path="/allproducts" element={<AllProductDetail />}></Route>
        </Routes>
    )
}