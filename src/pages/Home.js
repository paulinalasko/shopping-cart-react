import { NavLink } from "react-router-dom";
import background from '../images/pexels-oziel-gómez.jpg';
import imageOne from '../images/pexels-lu-li.jpg';
import imageTwo from '../images/pexels-andre-furtado.jpg';
import imageThree from '../images/pexels-cliford-mervil.jpg';
import imageFour from '../images/pexels-photo-1000445.jpeg';
import bottomHeroPhoto from '../images/pexels-photo-618848.jpeg';
import Footer from "../components/Footer";

const Home = () => {
  return (
      <div className="second-row" style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: 420,
      }}>
          <h2 className='quote'>“Live in the sunshine, swim in the sea, drink the wild air.”<br />– Ralph Waldo Emerson</h2>
          <div class="bottom-text">
              <p>LET OUR GEAR TAKE <br/>YOU THERE</p>
              <NavLink to='/shopping-cart-react/newarrivals'><button className='push-right scale standard-btn'>Explore</button></NavLink>
          </div>
      <div className='bottom-content'>
            <div className="image-container">
              <NavLink to='/shopping-cart-react/newarrivals'>
                <img className='image' src={imageOne} alt='Hikers hiking in snow' />
                <p className='image-text-one'>New Arrivals</p>
                <button className='button-one scale standard-btn'>Shop</button>
              </NavLink>
              <NavLink to='/shopping-cart-react/hiking'>
                <img className='image' src={imageTwo} alt='Hiker sitting overlooking alpine lake' />
                <p className='image-text-two'>Hiking Gear</p>
                <button className='button-two scale standard-btn'>Shop</button>
              </NavLink>
              <NavLink to='/shopping-cart-react/camping'>
                <img className='image' src={imageThree} alt='Person admiring the view from their tent' />
                <p className='image-text-three'>Camping Gear</p>
                <button className='button-three scale standard-btn'>Shop</button>
            </NavLink>
              <img className='image' src={imageFour} alt='group of people jumping during sunset' />
              <p className='image-text-four'>Learn about us</p>
              <button className='button-four scale standard-btn'>About us</button>
            </div>
      </div>
      <div className="bottom-content-two">
        <img className='bottom-hero-image' src={bottomHeroPhoto} alt='night camping near mountains' />
        <p className="bottom-hero-text spacing-animation">Come join our backpacking <br /> expedition in Italy this summer! <br /><span className="smaller-hero-text">Volunteer on local farms | Go on stunning hikes | Learn about the local community in Italy</span> </p>
        <button className='scale standard-btn'>Read More</button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;