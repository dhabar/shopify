
import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import Shop from './pages/Shop'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Trending from './pages/Trending'
import Desktop from './components/Desktop-nav'
import MobileNavigation from './components/Mobile-navigation'
import SigninPage from './pages/Sign-in'
import Protected from './components/Protected'
const App = () => {
  return (
    <div className='pt-18' >
      

    
         <Desktop />
         <MobileNavigation />
         <Outlet/>

        <Routes>
          <Route path='sign-in/*' element={<SigninPage/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={
             <Protected>
            <Cart />
            </Protected>
          } />
          <Route path="/trending" element={<Trending />} />
        </Routes>


    </div>
  )
}

export default App

