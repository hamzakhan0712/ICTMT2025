import { Link as ScrollLink } from "react-scroll";
import { Phone, Globe, Calendar } from "lucide-react";
import collegeNameImage from "@/assets/images/m-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-400">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* College Logo & Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img 
            src={collegeNameImage} 
            alt="SCOE Logo" 
            className="w-76 h-auto object-contain transition-transform hover:scale-105 duration-300" 
          />
          <a 
            href="https://www.sce.edu.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 text-lg font-semibold text-[#6D1B8C] hover:underline transition-all duration-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Saraswati College of Engineering, Navi Mumbai
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#6D1B8C] flex items-center mb-4">
            <Globe className="w-5 h-5 mr-2 text-[#6D1B8C]" /> Quick Links
          </h3>
          <hr className="border-gray-400 mb-4" />
          <ul className="space-y-3">
            <li><ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-[#998fc7] text-sm">Home</ScrollLink></li>
            <li><ScrollLink to="scoe" smooth={true} duration={500} className="cursor-pointer hover:text-[#998fc7] text-sm">About SCOE</ScrollLink></li>
            <li><ScrollLink to="conference" smooth={true} duration={500} className="cursor-pointer hover:text-[#998fc7] text-sm">Conference</ScrollLink></li>
            <li><ScrollLink to="patrons-chairs" smooth={true} duration={500} className="cursor-pointer hover:text-[#998fc7] text-sm">Patrons & Chairs</ScrollLink></li>
            <li><ScrollLink to="committee" smooth={true} duration={500} className="cursor-pointer hover:text-[#998fc7] text-sm">Committee</ScrollLink></li>
          </ul>
        </div>

        {/* Conference Details */}
        <div>
          <h3 className="text-xl font-semibold text-[#6D1B8C] flex items-center mb-4">
            <Calendar className="w-5 h-5 mr-2 text-[#6D1B8C]" /> Conference Details
          </h3>
          <hr className="border-gray-400 mb-4" />
          <ul className="space-y-3">
            <li><ScrollLink to="timeline" smooth={true} duration={500} className="cursor-pointer hover:text-[#998fc7] text-sm">Conference Timeline</ScrollLink></li>
            <li><ScrollLink to="conference-tracks" smooth={true} duration={500} className="cursor-pointer hover:text-[#998fc7] text-sm">Tracks</ScrollLink></li>
            <li><ScrollLink to="call-for-paper" smooth={true} duration={500} className="cursor-pointer hover:text-[#998fc7] text-sm">Call for Papers</ScrollLink></li>
            <li><ScrollLink to="registration" smooth={true} duration={500} className="cursor-pointer hover:text-[#998fc7] text-sm">Registrations</ScrollLink></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-[#6D1B8C] flex items-center mb-4">
            <Phone className="w-5 h-5 mr-2 text-[#6D1B8C]" /> Contact Us
          </h3>
          <hr className="border-gray-400 mb-4" />
          <ul className="space-y-3 text-sm">
          <li> Prof. Dr. Roohum Jegan: <a href="tel:8879017546" className="text-[#6D1B8C] text-sm font-bold">88790 17546</a></li>
          <li> Prof. Ranjeeta Padlikar: <a href="tel:9930122787" className="text-[#6D1B8C] text-sm font-bold">9930122787</a></li>
          <li> Prof. Jayamala Chavan: <a href="tel:9987585321" className="text-[#6D1B8C] text-sm font-bold">99875 85321</a></li>
          <li> Prof. Sarita Kale: <a href="tel:7021188653" className="text-[#6D1B8C] text-sm font-bold">70211 88653</a></li>

          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 mt-8"></div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-600 mt-6">
        &copy; {new Date().getFullYear()} <a href="https://www.sce.edu.in/" className="text-[#6D1B8C] hover:underline">sce.edu.in</a>. All rights reserved.
        <br /> Website Designed by <span className="text-[#6D1B8C] font-semibold">Saraswati College of Engineering</span>.
      </div>
    </footer>
  );
};

export default Footer;
