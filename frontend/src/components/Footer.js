import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <footer className="py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-20 align-items-center">
              <img src={newsletter} alt="newsletter" />
              <h2 className="mb-0 text-white fs-5">Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control py-1"
                placeholder="Your E-Mail Address"
                aria-label="Your E-Mail Address"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-2" id="basic-addon2">
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white mb-3 mt-2">Contact Us</h4>
            <address className="text-white fs-6">
              No.65,<br />
              Opposite People’s Bank,<br />
              Dambulla Road,<br />
              Ibbagamuwa.<br /><br />
            </address>
            <a href="tel: +94 368674536" className="mt-2 d-block mb-1 text-white fs-6">
              +94 368674536
            </a>
            <a href="mailto: chathu@gmail.com" className="mt-1 d-block mb-0 text-white fs-6">
              chathu@gmail.com
            </a>
            <div className="social_icons d-flex align-items-center gap-30 mt-4">
              <a className="text-white" href="google.lk">
                <BsFacebook className="fs-4" />
              </a>
              <a className="text-white" href="google.lk">
                <BsInstagram className="fs-4" />
              </a>
            </div>
          </div>
          <div className="col-3 mt-2">
            <h4 className="text-white mb-3">Information</h4>
            <div className="footer-link d-flex flex-column">
              <Link className="text-white py-1 mb-1 fs-6">Privacy Policy</Link>
              <Link className="text-white py-1 mb-1 fs-6">Emergency Service Policy</Link>
              <Link className="text-white py-1 mb-1 fs-6">Shipping Policy</Link>
              <Link className="text-white py-1 mb-1 fs-6">Terms and Conditions</Link>
            </div>
          </div>
          <div className="col-3 mt-2">
            <h4 className="text-white mb-3">Accounts</h4>
            <div className="footer-link d-flex flex-column">
              <Link className="text-white py-1 mb-1 fs-6">About Us</Link>
              <Link className="text-white py-1 mb-1 fs-6">FAQ</Link>
              <Link className="text-white py-1 mb-1 fs-6">Contact</Link>
            </div>
          </div>
          <div className="col-2 mt-2">
            <h4 className="text-white mb-3">Quick Links</h4>
            <div className="footer-link d-flex flex-column">
              <Link className="text-white py-1 mb-1 fs-6">Laptops</Link>
              <Link className="text-white py-1 mb-1 fs-6">Headphones</Link>
              <Link className="text-white py-1 mb-1 fs-6">Tablets</Link>
              <Link className="text-white py-1 mb-1 fs-6">Watches</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white fs-6">
              &copy; {new Date().getFullYear()}, Powered by Chathura Motors
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
