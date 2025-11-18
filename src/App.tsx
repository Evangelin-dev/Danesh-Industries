import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsPage from '../components/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/valve-components" element={<ProductsPage />} />
        <Route path="/fittings" element={<ProductsPage />} />
        <Route path="/flanges" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;