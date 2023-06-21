import { Home } from "./components/home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart } from "./components/cart/Cart"
import { DataProvider } from "./components/context/DataContext"

export function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

