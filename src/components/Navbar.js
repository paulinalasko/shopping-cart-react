import { NavLink } from 'react-router-dom';
import { LiaShoppingCartSolid } from 'react-icons/lia';

const NavBar = (props) => {
    const { cartItems } = props;

    return (
    <div className='nav-bar sticky-top'>
            <h1 className='logo'>higher ground</h1> 
            <NavLink className='link' exact to='/home'>Home</NavLink>
            <NavLink className='link' to='/newarrivals'>Products</NavLink>
            <div className="dropdown">
                <NavLink className='link dropdown-toggle' to='/cart'>
                <LiaShoppingCartSolid style={{ marginRight: 5 }}/>Cart</NavLink>
                <badge style={{ padding: 10, borderRadius: 10, background: "white" }}>{cartItems.length}</badge>
            </div>
        </div>
    )
}

export default NavBar;