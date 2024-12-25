import { motion } from "framer-motion";

const Footer = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <footer className="bg-[#002366] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <h3 className="text-4xl sm:text-5xl font-bold">SFACC</h3>
            <p className="text-gray-300 text-xl sm:text-2xl leading-relaxed">
              SFACC 64 celebrates arts, culture, and cinema, connecting creators and fans to inspire and collaborate.
            </p>
          </motion.div>

          {/* Middle Section - Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
          >
            <h4 className="text-3xl sm:text-4xl font-semibold">Quick Links</h4>
            <ul className="space-y-4">
              {[
                "Home",
                "About",
                "Who We Are", 
                "What we focus",
                "Contact Us"
              ].map((link) => (
                <motion.li 
                  key={link}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a 
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-lg sm:text-xl block"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Section - Contact */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.4 }}
          >
            <h4 className="text-3xl sm:text-4xl font-semibold">Contact Us</h4>
            <div className="space-y-4">
              <motion.a 
                href="tel:+918637482632"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-lg sm:text-xl block"
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                +91 86374 82632
              </motion.a>

              <motion.a 
                href="mailto:raghu@sfacc.in"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-lg sm:text-xl block"
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                raghu@sfacc.in
              </motion.a>

              <motion.div className="text-gray-300 text-lg sm:text-xl space-y-2">
                <p>NO 211, SRI GANAPATHY NAGAR,</p>
                <p>SATTAMANGALAM, Maraimalai Nagar,</p>
                <p>Chengalpattu, Tamil Nadu</p>
              </motion.div>

              <motion.a
                href="https://goo.gl/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 text-lg sm:text-xl mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View on Map
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-center text-gray-400 text-lg sm:text-xl">
            © {new Date().getFullYear()} SFACC. All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;