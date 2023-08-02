import productHeader from '../images/pexels-jedypictures.jpg'
import Product from "../components/Product";
import SideBar from "../components/Sidebar";

const NewProducts = (props) => {
  const { newProducts, onAdd } = props; 
  return (
    <div className="second-row" >
    <SideBar />
    <div class="middle-content"style={{
      backgroundImage: `url(${productHeader})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
    <h2 className="product-header-text">New Arrivals</h2>
    <div className="product-container">
      {newProducts.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd}></Product>
      ))}
    </div>
  </div>   
</div>
);
};


export default NewProducts;