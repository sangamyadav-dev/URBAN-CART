
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import CreateAcForm from "./pages/CreateAcForm"
import Navbar from './components/Navbar';
import BestSellers from './components/BestSellers';
import Promo from './components/Promo';
import ProductList from './components/ProductList';
import WomenCollectionList from './components/WomenCollectionList';

function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='/CreateAcForm' element={<CreateAcForm/>} />
        <Route path='/Promo' element={<Promo/>} />
        <Route path='/ProductList' element={<ProductList/>} />
        <Route path='/WomenCollectionList' element={<WomenCollectionList/>} />
        <Route path='/BestSellers' element={<BestSellers/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router;