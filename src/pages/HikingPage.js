import productHeader from '../images/pexels-karol-z.jpg'
import Product from "../components/Product";
import SideBar from '../components/Sidebar';

const HikingProducts = (props) => {
  const { hikingProducts, onAdd } = props; 
  
  return (
    <div className="second-row" >
    <SideBar />
    <div class="middle-content"style={{
      backgroundImage: `url(${productHeader})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
    <h2 className="product-header-text">Hiking Gear</h2>
    <div className="product-container">
      {hikingProducts.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd}></Product>
      ))}
    </div>
  </div>
</div>
);
};


export default HikingProducts;