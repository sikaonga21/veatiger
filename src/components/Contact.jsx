import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const offices = [
        {
            title: 'Head Office',
            address: 'Plot No. 251 Ngwerere Rd., Longacres - Lusaka',
            phones: ['+260 95 6431291', '+260 96 3627768'],
            email: 'info@veatiger.com',
        },
        {
            title: 'Branch Office',
            address: 'Plot No 162/10 Farmers Junction, Off Kafues Road - Lusaka',
            phones: ['+260 963 627768'],
            email: 'info@veatiger.com',
        },
        {
            title: 'Copperbelt Office',
            address: 'ECL Business Park, Office Block 2, Second Floor, Freedom Way - Kitwe',
            phones: ['+260 95 6431291'],
            email: 'mining@veatiger.com',
        },
    ];

    return (
        <section id="contact" className="gradient-white-green">
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
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Ready to start your next project? Contact us today and let's build something great together
                    </p>
                </motion.div>

                {/* Office Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {offices.map((office, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-secondary-600"
                        >
                            <h3 className="text-2xl font-bold text-secondary-800 mb-6">
                                {office.title}
                            </h3>

                            <div className="space-y-4">
                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 flex-shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <p className="text-gray-700 pt-2">{office.address}</p>
                                </div>

                                {/* Phones */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 flex-shrink-0">
                                        <FaPhone />
                                    </div>
                                    <div className="pt-2 space-y-2">
                                        {office.phones.map((phone, idx) => (
                                            <a
                                                key={idx}
                                                href={`tel:${phone}`}
                                                className="block text-gray-700 hover:text-accent-600 transition-colors duration-200"
                                            >
                                                {phone}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 flex-shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <a
                                        href={`mailto:${office.email}`}
                                        className="text-gray-700 hover:text-accent-600 transition-colors duration-200 pt-2"
                                    >
                                        {office.email}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-secondary-700 to-secondary-900 rounded-3xl shadow-2xl p-12 text-center max-w-4xl mx-auto"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Get Started?
                    </h3>
                    <p className="text-xl text-white/90 mb-8">
                        Let's discuss how we can help with your next project
                    </p>
                    <a
                        href="mailto:info@veatiger.com"
                        className="inline-block btn-primary text-lg"
                    >
                        Send Us a Message
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
