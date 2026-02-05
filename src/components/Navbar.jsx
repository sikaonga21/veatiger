import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-lg'
                    : 'bg-white/90 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">V</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-secondary-700">VEATIGER</h1>
                            <p className="text-xs text-gray-600">General Dealers Ltd</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition-colors duration-200 relative group ${isActive(link.path)
                                        ? 'text-secondary-600'
                                        : 'text-gray-700 hover:text-secondary-600'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary-600 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="btn-primary"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-secondary-700 text-2xl"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
                className="md:hidden overflow-hidden bg-white border-t border-gray-200"
            >
                <div className="px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${isActive(link.path)
                                    ? 'bg-secondary-50 text-secondary-700'
                                    : 'text-gray-700 hover:bg-secondary-50 hover:text-secondary-700'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="btn-primary w-full"
                    >
                        Get In Touch
                    </Link>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
