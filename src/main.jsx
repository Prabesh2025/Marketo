import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route, } from "react-router";
import BottomNavbar from './components/BottomNavbar.jsx';
import TopNavbar from './components/TopNavbar.jsx';
import MyFooter from './components/MyFooter.jsx';
import ProductDescription from './pages/productDescription.jsx';
import Footer from './components/footer.jsx';
import Pages from './pages/Pages.jsx';
import ShopPage from './pages/ShopPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import MyTopNavbar from './components/MyTopNavbar.jsx';
import MyBottomNavbar from './components/MyBottomNavbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <BrowserRouter>

        <TopNavbar />
        <BottomNavbar />
        {/* <MyTopNavbar/> */}
        {/* <MyBottomNavbar/> */}
        
  
        
        

  <Routes>
      <Route path="/" element={<App />} />
      
      <Route path="/Pages" element={<Pages />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/gallery" element={< GalleryPage/>} />
      <Route path="/product-detail/:id" element={< ProductDescription/>} />       




    </Routes>

        {/* <Footer/> */}
  
        <MyFooter/> 

  </BrowserRouter>
    
  </StrictMode>,
)
