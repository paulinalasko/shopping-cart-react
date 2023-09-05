import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <h1 className='sidebar-header'>Shop</h1>
            <NavLink className='sidebar-text link' to='/newarrivals'>New Arrivals</NavLink>
            <NavLink className='sidebar-text link' to='/hiking'>Hiking Gear</NavLink>
            <NavLink className='sidebar-text link' to='/camping'>Camping Gear</NavLink>
</div>
    )
}

export default SideBar;