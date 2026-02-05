import { motion } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaGlobeAfrica, FaCog, FaHandshake, FaAward, FaUserTie } from 'react-icons/fa';

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: <FaShieldAlt />,
            title: 'Expertise in Mitigating Risks',
            description: 'We understand that every investment comes with risks, and we believe in mitigating these risks through careful and prudent due diligence. Our team has extensive knowledge and expertise in identifying and managing risks associated with investments in Africa.',
        },
        {
            icon: <FaUsers />,
            title: 'Strong Focus on Client Satisfaction',
            description: 'At VEATIGER GENERAL DEALERS LIMITED, our clients\' satisfaction is our top priority. We are committed to providing high quality services that meet and exceed our clients\' expectations. Our focus on client satisfaction has earned us a reputation as a trustworthy and reliable company.',
        },
        {
            icon: <FaGlobeAfrica />,
            title: 'Extensive Experience in Africa',
            description: 'With years of experience in doing business in Africa, we have developed a deep understanding of the African market and culture. Our local knowledge and expertise allow us to navigate the complexities of doing business in Africa, ensuring that our clients achieve success.',
        },
        {
            icon: <FaCog />,
            title: 'Tailored Solutions',
            description: 'We understand that every client\'s needs are unique, and we provide tailored solutions to meet their specific requirements. Our team works closely with our clients to understand their goals and develop solutions that align with their business objectives.',
        },
        {
            icon: <FaHandshake />,
            title: 'Professionalism and Transparency',
            description: 'We operate with the highest level of professionalism and transparency in all our dealings. We believe in building long-term relationships with our clients based on trust, honesty, and integrity.',
        },
        {
            icon: <FaAward />,
            title: 'Comprehensive Services',
            description: 'VEATIGER GENERAL DEALERS LIMITED offers comprehensive services across various industries, including transport and logistics, construction, and civil engineering. This means that our clients can benefit from our wide range of expertise and services, making us a one-stop-shop for all their needs.',
        },
        {
            icon: <FaUserTie />,
            title: 'Owner-Run Company',
            description: 'As an owner-run company, we take personal responsibility for every transaction and ensure that our clients receive the highest level of service. Our founder, Mr. David Musonda, is actively involved in due diligence and deal structuring, ensuring that our clients\' investments are safe and secure.',
        },
    ];

    return (
        <section id="why-choose-us" className="bg-white">
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
                        Why Choose Us
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Experience the peace of mind that comes with expert knowledge, meticulous attention to detail, and a commitment to delivering results
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-gradient-to-br from-white to-secondary-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-accent-500"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                                {benefit.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-secondary-800 mb-4">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
