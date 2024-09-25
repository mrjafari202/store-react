import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import DetailsPage from "./pages/DetailsPage"
import CheckOutPage from "./pages/CheckOutPage"
import NotFound from "./pages/404"
import ProductsProvider from "./context/ProductContext"

function App() {


  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </ProductsProvider>
  )
}

export default App
