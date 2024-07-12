
import './App.css';
import Navbar from './components/navbar/navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './pages/shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/Loginsignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/assert/banner_mens.png'
import women_banner from './components/assert/banner_women.png'
import kid_banner from './components/assert/banner_kids.png'
function App() {
  return (
    <div >
    
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element ={<Shop/>}/>
    
      <Route path='/Men' element ={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/Women' element ={<ShopCategory banner={women_banner} category='women'/>}/>
      <Route path='/kids' element ={<ShopCategory  banner={kid_banner} category='kid'/>}/>
      <Route path="/product" element={<Product/>}>
      <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Login" element={<LoginSignUp/>}/>
     </Routes>
     <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
