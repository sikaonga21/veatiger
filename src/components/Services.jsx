import { motion } from 'framer-motion';
import { FaTruck, FaBuilding, FaRoad, FaIndustry, FaTools, FaWarehouse } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaTruck />,
            title: 'Transport & Logistics',
            description: 'Comprehensive transport solutions including Super-Link Flat decks, Side Tippers, Taut liners, Low Bed Abnormal Loads, and Fuel Tankers (40,000L & 50,000L capacity).',
            features: ['Cross-border logistics', 'Fleet management', 'Timely delivery'],
        },
        {
            icon: <FaBuilding />,
            title: 'General Construction',
            description: 'Professional construction services for residential, commercial, and industrial projects with a commitment to quality and timely completion.',
            features: ['Project management', 'Quality assurance', 'Safety compliance'],
        },
        {
            icon: <FaRoad />,
            title: 'Civil Engineering',
            description: 'Expert civil engineering services including infrastructure development, structural design, and project execution to the highest standards.',
            features: ['Infrastructure design', 'Structural engineering', 'Site supervision'],
        },
        {
            icon: <FaTools />,
            title: 'Road Construction',
            description: 'Specialized road construction and earthworks services, delivering durable infrastructure solutions across the Southern African region.',
            features: ['Road development', 'Earthworks', 'Maintenance services'],
        },
        {
            icon: <FaIndustry />,
            title: 'Manufacturing',
            description: 'Manufacturing of mining and building products, empowering local industry and supporting Zambian economic development.',
            features: ['Mining products', 'Building materials', 'Quality control'],
        },
        {
            icon: <FaWarehouse />,
            title: 'Commodity Trading',
            description: 'Beneficiation and marketing of physical commodities with expertise in mining sector supply chain management.',
            features: ['Supply chain', 'Market analysis', 'Quality assurance'],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="services" className="gradient-white-green">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Comprehensive solutions across transport, construction, and manufacturing sectors
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-secondary-500"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
