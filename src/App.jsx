import './App.css'
import { createBrowserRouter, Outlet, } from "react-router-dom"
import Seller from './Components/SellerHome/Seller';
import SellerRegistration from './Components/SellerAuth/SellerRegistration';
import SellerLogin from './Components/SellerLogin/SellerLogin';
import PersonalDetailsForm from './Components/SellerAuth/PersonalDetailsForm';

function App() {
  return (
    <>
      <Seller />
      {/* <SellerRegistration /> */}
      <Outlet />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/sellerlogin",
    element: <SellerLogin />

  },
  {
    path: "/sellerRegistration",
    element: <SellerRegistration />,

  },

])

export default appRouter;
