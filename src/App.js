import Header from "./components/Header/Header";
import ProductList from "./products/ProductList";
import { products, categories } from "./helper/data"
import "./App.scss";


function App() {
 
  return (
    <div className="App">

      <Header categories={categories} text="Products List" />

      <ProductList products={products} />
      
    </div>
  );
}

export default App;
