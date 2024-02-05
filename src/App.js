import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react'
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';
import ScrollToTop from './pages/ScrollToTop';

function App() {
  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 
  return (
    <Wrapper>
    <div>
      <MainHeader />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path='/' element={<Navigate to='/Home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/gallery/:productId' element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
    </Wrapper>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
