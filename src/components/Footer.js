const Footer = () => {
    return (
      <div>
        <div className="footer">
          <div class="more-info-box">
            <h2 className="more-info-header">More Info</h2>
          <div class="row">
            <div className="more-info-left">
              <p className="footer-btn">Used gear</p>
              <p className="footer-btn">Find a Store</p>
              <p className="footer-btn">Help Center</p>
            </div> 
            <div className="more-info-right">
              <p className="footer-btn-longer">Join the team</p>
              <p className="footer-btn-longer">Privacy Policy</p>
              <p className="footer-btn">Our Mission</p>
            </div>  
          </div>
        </div>
        <div className="newsletter-box">
          <h2>Newsletter Sign-up</h2>
          <p>Sign up for exclusive offers, exciting stories, <br /> activism awareness, events and more.</p>
          <form action="">
            <label htmlFor='email'>E-mail: </label>
            <input type='text' id='email'></input>
          </form>
          <button className="scale standard-btn">Sign Me Up</button>
        </div>
      </div>
      <p className="copyright-text">Copyright 2023 © paulinalasko</p>
    </div>
  )
}

export default Footer;