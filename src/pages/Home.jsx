import { motion } from 'framer-motion';
import { FaTruck, FaBuilding, FaRoad, FaBullseye, FaEye, FaHistory } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const quickServices = [
        { icon: <FaTruck />, title: 'Transport & Logistics', link: '/services' },
        { icon: <FaBuilding />, title: 'Construction', link: '/services' },
        { icon: <FaRoad />, title: 'Civil Engineering', link: '/services' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center gradient-green-white overflow-hidden pt-20">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative section-container">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Building The Future Of{' '}
                                <span className="text-accent-300">Zambia</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
                        >
                            Your trusted partner in transport & logistics, construction, civil engineering, and infrastructure development across Southern Africa.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link to="/services" className="btn-primary text-lg">
                                Explore Our Services
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-secondary-700 transform hover:scale-105 transition-all duration-300 text-lg text-center"
                            >
                                Contact Us
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                        >
                            {[
                                { value: '10+', label: 'Years Experience' },
                                { value: '500+', label: 'Projects Completed' },
                                { value: '50+', label: 'Fleet Vehicles' },
                                { value: '100%', label: 'Client Satisfaction' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-accent-300 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-white/80 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Summary Section */}
            <section className="bg-white">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
                            Why Choose Veatiger?
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Choose Veatiger General Dealers Limited and experience the peace of mind that comes with expert knowledge,
                            meticulous attention to detail, and a commitment to delivering results. Our team of experienced professionals
                            is dedicated to providing exceptional services in all areas of our business, from transport and logistics to
                            construction and civil engineering.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            We go above and beyond to ensure that our clients' investments are safe and secure, and that their projects
                            are completed on time, within budget, and to the highest standards of quality.
                        </p>
                        <Link to="/about" className="btn-primary inline-block">
                            Learn More About Us
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Quick Services Section */}
            <section className="gradient-white-green">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-4">
                            Our Core Services
                        </h2>
                        <p className="text-xl text-gray-700">
                            Comprehensive solutions across transport, construction, and manufacturing
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {quickServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="card text-center"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-xl flex items-center justify-center text-white text-4xl mb-6 mx-auto">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                                    {service.title}
                                </h3>
                                <Link to={service.link} className="text-accent-600 hover:text-accent-700 font-semibold">
                                    Learn More →
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/services" className="btn-secondary">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission Preview Section */}
            <section className="bg-gradient-to-br from-secondary-700 via-secondary-600 to-secondary-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>
                </div>

                <div className="section-container relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <FaBullseye />, title: 'OUR MISSION', text: 'To provide innovative and cost-effective solutions, high-quality products, and reliable construction management services...' },
                            { icon: <FaEye />, title: 'OUR VISION', text: 'To become the top choice for clients and employees seeking long term business relationships through exceptional service delivery...' },
                            { icon: <FaHistory />, title: 'OUR HERITAGE', text: 'Founded in 2012, VEATIGER has evolved into a global leader in construction and infrastructure...' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-white rounded-2xl shadow-2xl p-8 text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-secondary-800 mb-4">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/about" className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-secondary-700 transform hover:scale-105 transition-all duration-300">
                            Read Full Story
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-secondary-700 to-secondary-900 rounded-3xl shadow-2xl p-12 text-center"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h3>
                        <p className="text-xl text-white/90 mb-8">
                            Let's discuss how we can help with your next project
                        </p>
                        <Link to="/contact" className="btn-primary text-lg">
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
