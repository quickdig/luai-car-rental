import React from 'react'
import footer_logo from "../assets/logo_black.png";
import footer_back from "../assets/footer_back.png";
import social_imgOne from "../assets/fb.png";
import social_imgTwo from "../assets/wa.png";
import social_imgThree from "../assets/insta.png";
import { Link } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <section className="footer_Card relative mt-10">
            <div
                className="relative flex items-center justify-center bg-cover bg-center h-100 sm:h-[30rem] md:h-[30rem] w-full"
                style={{ backgroundImage: `url(${footer_back})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/95"></div>
                <footer className="flex flex-col max-w-screen-lg w-full mx-auto items-center px-4 md:px-6 z-10">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full">
                        {/* Logo and Description */}
                        <div className="col-span-1 w-full text-center md:text-left">
                            <img
                                src={footer_logo}
                                className="object-contain h-10 w-40 md:h-12 mx-auto md:mx-0"
                                alt="footer_logo"
                            />
                            <p className="text-white text-sm font-light leading-6 mt-4">
                                <b className="font-medium">
                                    Here comes a top-rated car rental service in Dubai.
                                </b>
                                <br />
                                Enjoy low prices and great deals when you rent a car with us. Convenient
                                pick-up locations and top-notch customer service ensure you get a smooth,
                                stress-free rental experience.
                            </p>
                            <div className="flex flex-row justify-center md:justify-start items-center mt-3">
                                <Link to={"#"}>
                                    <img
                                        src={social_imgOne}
                                        className="object-contain w-8 mr-3"
                                        alt="footer_social1"
                                    />
                                </Link>
                                <Link to={"#"}>
                                    <img
                                        src={social_imgTwo}
                                        className="object-contain w-8 mr-3"
                                        alt="footer_social2"
                                    />
                                </Link>
                                <Link to={"#"}>
                                    <img
                                        src={social_imgThree}
                                        className="object-contain w-8"
                                        alt="footer_social3"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-span-1 w-full md:pl-10 text-center md:text-left">
                            <div className="border-l-4 border-l-primary pl-3 mx-auto md:mx-0">
                                <h4 className="text-white font-medium text-lg">Quick Links</h4>
                            </div>
                            <ul className="text-white mt-2 space-y-3">
                                <li>
                                    <Link to={"#"}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>About</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Brands</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Cars</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Faqs</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Details */}
                        <div className="col-span-1 w-full md:pl-10 text-center md:text-left">
                            <div className="border-l-4 border-l-primary pl-3 mx-auto md:mx-0">
                                <h4 className="text-white font-medium text-lg">Contact Details</h4>
                            </div>
                            <ul className="text-white mt-2 space-y-3">
                                <li className="flex flex-col md:flex-row justify-center md:justify-start items-center">
                                    <span className="p-2 rounded-full bg-primary text-white mr-2">
                                        <FiPhoneCall />
                                    </span>
                                    <Link to={"#"}>(+971) 505 123 558</Link>
                                </li>
                                <li className="flex flex-col md:flex-row justify-center md:justify-start items-center">
                                    <span className="p-2 rounded-full bg-primary text-white mr-2">
                                        <FaRegEnvelope />
                                    </span>
                                    <Link to={"#"}>sales@luai.ae</Link>
                                </li>
                                <li className="flex flex-col md:flex-row justify-center md:justify-start items-center">
                                    <span className="p-2 rounded-full bg-primary text-white mr-2">
                                        <FaLocationDot />
                                    </span>
                                    <Link to={"#"}>
                                        Shop No. 02, <br />
                                        Azurite Tower, Al Jaddaf
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </section>

    )
}

export default Footer