import { NavLink } from 'react-router-dom';
import { LiaShoppingCartSolid } from 'react-icons/lia';

const NavBar = (props) => {
    const { cartItems } = props;

    return (
    <div className='nav-bar sticky-top'>
            <h1 className='logo'>higher ground</h1> 
            <NavLink className='link' exact to='/shopping-cart-react'>Home</NavLink>
            <NavLink className='link' to='/shopping-cart-react/newarrivals'>Products</NavLink>
            <div className="dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink className='link dropdown-toggle' to='/shopping-cart-react/cart'>
                <LiaShoppingCartSolid style={{ marginRight: 5 }}/>Cart</NavLink>
                <badge style={{ padding: 10, borderRadius: 10, background: "white" }}>{cartItems.length}</badge>
            </div>
        </div>
    )
}

export default NavBar;