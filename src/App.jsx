
import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import Shop from './pages/Shop'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Trending from './pages/Trending'
import Desktop from './components/Desktop-nav'
import MobileNavigation from './components/Mobile-navigation'
const App = () => {
  return (
    <div className='pt-18' >
      

      <BrowserRouter>
      
         <Desktop />
         <MobileNavigation />
         <Outlet/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App

