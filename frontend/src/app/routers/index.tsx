import {createBrowserRouter} from "react-router-dom"
import Dashboard from "../../features/dashboard/pages/dashboard"
import Products from "../../features/products/pages/products"
import Orders from "../../features/orders/pages/orders"
import DashboardLayout from '../../layouts/DashboardLayout'
import Customers from "../../features/customers/pages/customers"

const router=createBrowserRouter([
    {
        path:"/" ,
        element:<DashboardLayout/>,
        children:[

    {
        path:"/dashboard" ,
        element:<Dashboard/>
    },
    {
        path:"/products",
        element:<Products/>
    },
    {
        path:"/orders",
        element:<Orders/>
    },
    {
        path:'/customers',
        element:<Customers/>
    },
    
        ],
    }
])

export default router