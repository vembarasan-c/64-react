
import { useState } from 'react';
import '../css/member.css'

const Member = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    city: '',
    document: '',
    pan: '',
    aadhar: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('.submit-btn');
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    try {
      await fetch('YOUR_GOOGLE_SHEET_URL', {
        method: 'POST',
        mode: 'no-cors',
        body: new FormData(e.target)
      });

      alert('Success! Your membership details have been submitted.');
      setFormData({
        name: '',
        email: '',
        address: '',
        phone: '',
        city: '',
        document: '',
        pan: '',
        aadhar: ''
      });
      window.location.href = "https://rzp.io/rzp/PpDMFTz";
    } catch (error) {
      console.error('Error!', error.message);
      alert('There was an error submitting your details. Please try again.');
    } finally {
      submitBtn.textContent = 'Submit Application';
      submitBtn.disabled = false;
    }
  };

  return (
    <>
      <header className="header sticky top-0 z-50 bg-white shadow-md">
        <nav className=" flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          {/* Left side - Logo and Name */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
            <span className="text-[var(--st-patricks-blue)] text-2xl font-bold">Sixty Four</span>
          </div>

          {/* Right side - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="nav-link text-[var(--space-cadet-1)] hover:text-[var(--st-patricks-blue)] transition-colors">
              Home
            </a>
            <a href="/about" className="nav-link text-[var(--space-cadet-1)] hover:text-[var(--st-patricks-blue)] transition-colors">
              About
            </a>
            <a href="/contact" className="nav-link text-[var(--space-cadet-1)] hover:text-[var(--st-patricks-blue)] transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[var(--space-cadet-1)] block"
            onClick={() => {
              const mobileMenu = document.querySelector('.absolute.top-full');
              mobileMenu.classList.toggle('hidden');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Menu - Hidden by default */}
          <div className="hidden absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
            <a href="/" className="block px-6 py-3 text-[var(--space-cadet-1)] hover:bg-gray-100">Home</a>
            <a href="/about" className="block px-6 py-3 text-[var(--space-cadet-1)] hover:bg-gray-100">About</a>
            <a href="/contact" className="block px-6 py-3 text-[var(--space-cadet-1)] hover:bg-gray-100">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="banner-section bg-gradient-to-r from-[#1e3c72] to-[#2a5298] bg-cover bg-center">
          <div className="banner-container">
            <div className="banner-content ml-[5%] text-left">
              <h2 className="banner-title">Become a Member Today</h2>
              <p className="banner-text">
                Join our community of change-makers and help make a difference.
                Your membership supports our mission to provide shelter, food,
                and education to those in need.
              </p>
              <button className="membership-btn ml-0">Join Membership</button>
            </div>
          </div>
        </section>

        <section className="membership-form-section" id="member">
          <div className="form-container">
            <form className="membership-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Become a Member</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email" 
                  name="email"
                  required
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pan">PAN Number</label>
                <input
                  type="text"
                  id="pan"
                  name="pan"
                  required
                  placeholder="Enter your PAN number"
                  value={formData.pan}
                  onChange={(e) => setFormData({...formData, pan: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label htmlFor="aadhar">Aadhar Number</label>
                <input
                  type="text"
                  id="aadhar"
                  name="aadhar"
                  required
                  placeholder="Enter your Aadhar number"
                  value={formData.aadhar}
                  onChange={(e) => setFormData({...formData, aadhar: e.target.value})}
                />
              </div>
              
              
              
              <button type="submit" className="submit-button submit-btn">
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        {/* Footer content */}
      </footer>
    </>
  );
};

export default Member;