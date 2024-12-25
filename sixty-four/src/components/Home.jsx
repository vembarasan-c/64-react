import '../css/home.css';

import profile3 from '../assets/images/profile-3.webp';
import Footer from './footer/Footer';
import Navbar from './Navbar';
import NewNav from './pages/NewNav';

const Home = () => {
  return (
    <>
    <main>
        {/* <Navbar />  */}
        <NewNav />

    <section>
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title" style={{ whiteSpace: 'nowrap' }}>Empowering Creators, Building Futures</h1>
        <p className="banner-description">
          Elevating Arts, Crafts & Cinema Across Tamil Nadu, Puducherry & Karnataka
        </p>
      </div>
    </div>
    </section>

    <section>
    <div className="bg-gray-400 announcement-banner">
    <div className="announcement-content">
      <div className="announcement-item">
        <span>Welcome to Sixty-Four Arts and Crafts & Cinemas</span>
      </div>
      <div className="announcement-item">
        <span>SFACC Members: Please share the Police Verification Document at</span>
        <a href="mailto:raghu@sfacc.in">raghu@sfacc.in</a>
      </div>
      <div className="announcement-item">
        <span>To be Updated Soon</span>
      </div>
    </div>
  </div>
    </section>


    <section className="about-section">
      <div className="about-container">
        <div className="about-image-container">
          <img 
            src={profile3}
            alt="Heritage and Culture Collage"
            className="about-image"
          />
        </div>
        
        <div className="about-content">
          <h2 className="about-title">About SFACC</h2>
          <div className="title-underline"></div>
          
          <p className="about-description">
            SFACC is a revolutionary multi-state cultural cooperative society dedicated 
            to promoting and empowering arts, crafts, and cinema. With a focus on 
            innovation and tradition, we aim to create opportunities for cultural growth 
            and economic development in Tamil Nadu, Puducherry, and Karnataka.
          </p>

          <div className="stats-container">
            <div className="stat-item">
              <h3 className="stat-number">3</h3>
              <p className="stat-label">States</p>
            </div>

            <div className="stat-item">
              <h3 className="stat-number">500<span className="plus">+</span></h3>
              <p className="stat-label">WorkShops<br />Milestone</p>
            </div>

            <div className="stat-item">
              <h3 className="stat-number">1000<span className="plus">+</span></h3>
              <p className="stat-label">Members<br />Milestone</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="info-section">
      <div className="container">
        <h2 className="section-title">Who We Are</h2>
        <div className="title-underline"></div>
        
        <p className="section-description">
          SFACC (Sixty-Four Arts, Crafts & Cinemas) is a multi-state cooperative society dedicated to preserving traditional arts, promoting innovative crafts, and nurturing cinema. We empower creators, connect communities, and drive cultural and economic growth.
        </p>

        <div className="cards-container">
          <div className="info-card">
            <div className="icon-circle">
              <i className="globe-icon"></i>
            </div>
            <h3>Mission</h3>
            <p>Leading India's cultural cooperative, preserving heritage, fostering creativity, sustaining artists' economic growth.</p>
            <button className="arrow-button" >→</button>
          </div>

          <div className="info-card">
            <div className="icon-circle">
              <i className="award-icon"></i>
            </div>
            <h3>Vision</h3>
            <p>Bridging traditional arts with technology, empowering cultural innovators through financial and infrastructural support.</p>
            <button className="arrow-button">→</button>
          </div>

          <div className="info-card">
            <div className="icon-circle">
              <i className="graph-icon"></i>
            </div>
            <h3>Milestone</h3>
            <p>SFACC safeguards India's cultural heritage by supporting artisans, craftsmen, and the film industry.</p>
            <button className="arrow-button">→</button>
          </div>
        </div>
      </div>
    </section>


    {/* Footer */}
    <Footer />
    </main>

    </>

  );
};

// Add this CSS to your homepage.css

export default Home;
