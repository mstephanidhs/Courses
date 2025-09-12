import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./views/products/products";
import AddProduct from "./views/products/add-product";
import EditProduct from "./views/products/edit-product";
import DeleteProduct from "./views/products/delete-product";
import ViewProduct from "./views/products/view-products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id/edit" element={<EditProduct />} />
          <Route path=":id/delete" element={<DeleteProduct />} />
          <Route path=":id" element={<ViewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
