import React from "react";
import { Link } from "react-router-dom";
import { HiPhoneMissedCall } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-100 text-black">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-5 row-gap-8 py-8">
          <div>
            <p className=" tracking-wide text-black font-bold">Services</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="services/veeners"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  Veeners
                </Link>
              </li>
              <li>
                <Link
                  to="/services/crown-and-bride"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  Crown & Bridge
                </Link>
              </li>
              <li>
                <Link
                  to="/services/implant-restoration"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  Implant Restoration
                </Link>
              </li>
              <li>
                <Link
                  to="/services/custom-shade-service"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  Custom Shade Service
                </Link>
              </li>

              <li>
                <Link
                  to="/services/dental-card-design"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  Dental Card Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/lab-to-lab"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  Lab To Lab
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="tracking-wide text-black font-bold">Menus</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="tracking-wide text-black font-bold">Legal</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  License
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="tracking-wide text-black font-bold">Supports</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="mt-2 space-y-2">
              <h2 className="tracking-wide text-black font-bold">
                Business Info
              </h2>
              <li>
                <h3>Elite Dental Studio USA</h3>
              </li>
              <address>
                <li>
                  <a href="mailto:Info@elitedentalstudiousa.com">
                    Info@elitedentalstudiousa.com
                  </a>

                  <br />
                </li>
                <li className="my-2">
                  <span className="flex">
                    <HiPhoneMissedCall className="mt-1" />
                    <a href="tel:+18446865534" className="ml-2">
                      +18446865534
                    </a>
                  </span>
                </li>
                <li className="my-2">
                  <span className="flex">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="home"
                      class="w-8 mr-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                      ></path>
                    </svg>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://goo.gl/maps/Ki9YZfeueNWQ11LF6"
                    >
                      621 Washington Street SW Suite A3 Gainesville, Ga 30501
                    </a>
                  </span>
                </li>
              </address>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright {currentYear} is a registered trademark. All Rights
            Reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://www.facebook.com/Elitedentalstudio"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/elitedentalstudiousa/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/EliteDentalusa"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/user/Elitedentalstudio"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />{" "}
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
