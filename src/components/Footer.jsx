import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className="bg-gradient-to-b from-secondary-900 to-secondary-950 text-white">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">V</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">VEATIGER</h3>
                                <p className="text-sm text-white/70">General Dealers Limited</p>
                            </div>
                        </Link>
                        <p className="text-white/80 mb-6 leading-relaxed max-w-md">
                            Your trusted partner in transport & logistics, construction, civil engineering, and infrastructure development across Southern Africa since 2012.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-all duration-300 transform hover:scale-110"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-all duration-300 transform hover:scale-110"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-all duration-300 transform hover:scale-110"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-all duration-300 transform hover:scale-110"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white/70 hover:text-accent-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Contact</h4>
                        <div className="space-y-3 text-white/70">
                            <p>Plot No. 251 Ngwerere Rd.</p>
                            <p>Longacres - Lusaka</p>
                            <p className="pt-2">
                                <a href="tel:+260956431291" className="hover:text-accent-400 transition-colors">
                                    +260 95 6431291
                                </a>
                            </p>
                            <p>
                                <a href="mailto:info@veatiger.com" className="hover:text-accent-400 transition-colors">
                                    info@veatiger.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 text-center text-white/60">
                    <p>
                        © {currentYear} Veatiger General Dealers Limited. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
