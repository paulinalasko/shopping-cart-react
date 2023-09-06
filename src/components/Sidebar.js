import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <h1 className='sidebar-header'>Shop</h1>
            <NavLink className='sidebar-text link' to='/shopping-cart-react/newarrivals'>New Arrivals</NavLink>
            <NavLink className='sidebar-text link' to='/shopping-cart-react/hiking'>Hiking Gear</NavLink>
            <NavLink className='sidebar-text link' to='/shopping-cart-react/camping'>Camping Gear</NavLink>
</div>
    )
}

export default SideBar;