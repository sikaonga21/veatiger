import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center gradient-green-white overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative section-container">
                <div className="max-w-4xl">
                    {/* Main Heading */}
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

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
                    >
                        Your trusted partner in transport & logistics, construction, civil engineering, and infrastructure development across Southern Africa.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button
                            onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary text-lg"
                        >
                            Explore Our Services
                        </button>
                        <button
                            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-secondary-700 transform hover:scale-105 transition-all duration-300 text-lg"
                        >
                            Contact Us
                        </button>
                    </motion.div>

                    {/* Key Stats */}
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

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-white text-3xl cursor-pointer"
                    onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
                >
                    <FaArrowDown />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
