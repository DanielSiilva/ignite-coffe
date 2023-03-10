import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Checkout } from "../pages/CheckoutFilled";
import { Home } from "../pages/Home";
import { SuccessOrder} from "../pages/SuccessOrder";



export function Router (){


    return(

        <Routes>
            <Route path="/" element ={<DefaultLayout/>}>
                <Route  path="/" element ={<Home/>} />
                <Route path="/coffee-delivery/checkout" element ={<Checkout />} />
                <Route path="/coffee-delivery/success" element ={<SuccessOrder />} />
            </Route>

        </Routes>
    )
}