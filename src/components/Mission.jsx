import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaHistory } from 'react-icons/fa';

const Mission = () => {
    const sections = [
        {
            icon: <FaBullseye />,
            title: 'OUR MISSION',
            content:
                'To provide innovative and cost-effective solutions, high-quality products, and reliable construction management services to our customers through a commitment and a passion for what we do, a drive for excellence, and a dedication to professionalism. We strive to create a legacy of success and synergy in all the places where we do business, empowering our fellow Zambians, and contributing positively to the economy and the community.',
        },
        {
            icon: <FaEye />,
            title: 'OUR VISION',
            content:
                'To become the top choice for clients and employees seeking long term business relationships through exceptional service delivery and market leadership. By 2030, we aim to be the preferred provider of cost-effective and innovative transportation, construction management, and manufacturing solutions in the Southern African region. Our goal is to continuously raise the bar for excellence and maintain a culture of passion, commitment, and pride among our team.',
        },
        {
            icon: <FaHistory />,
            title: 'OUR HERITAGE',
            content:
                'Founded in 2012, VEATIGER has evolved into a global leader in construction and infrastructure, offering over 40 world-class models. Known for innovative techniques and strong market competitiveness, it provides services nationally and internationally, excelling in housing, wiring, and infrastructure development. VEATIGER remains at the forefront of the construction industry through innovation and quality.',
        },
    ];

    return (
        <section id="about" className="bg-gradient-to-br from-secondary-700 via-secondary-600 to-secondary-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About Veatiger
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Building excellence since 2012, driving innovation across Southern Africa
                    </p>
                </motion.div>

                {/* Mission Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                                {section.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-secondary-800 mb-4 text-center">
                                {section.title}
                            </h3>

                            {/* Content */}
                            <p className="text-gray-700 leading-relaxed text-center">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mission;
