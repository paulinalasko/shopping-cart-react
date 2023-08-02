import productHeader from '../images/pexels-photo-5994385.jpeg'
import Product from "../components/Product";
import SideBar from '../components/Sidebar';

const CampingProducts = (props) => {
  const { campingProducts, onAdd } = props; 
  
  return (
    <div className="second-row" >
    <SideBar />
    <div class="middle-content"style={{
        backgroundImage: `url(${productHeader})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        }}>
    <h2 className="product-header-text">Camping Gear</h2>
    <div className="product-container">
        {campingProducts.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </div>
  </div>
  );
};


export default CampingProducts;