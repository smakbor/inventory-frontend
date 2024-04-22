// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/products/Products";
import Brand from "./components/brand/Brand";
import Unit from "./components/unit/Unit";
import Category from "./components/category/Category";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route path="/products" element={<Products />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/unit" element={<Unit />} />
            <Route path="/category" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
