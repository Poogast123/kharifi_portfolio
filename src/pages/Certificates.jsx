import { useState } from 'react';
import { motion } from 'framer-motion';
import CertificateCard from '../components/CertificateCard';

const Certificates = () => {
  // Sample certificate data - replace with your own certificates
  const allCertificates = [
    {
      title: 'Introduction to MongoDB',
      issuer: 'MongoDB',
      date: 'January 2025',
      image: 'https://s3.amazonaws.com/info-mongodb-com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png',
      link: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/55874430-9ddd-46a5-b2ec-fdb14938820e-oussama-kharifi-3c859e78-1650-4cbc-95e4-8310de11f499-certificate.pdf',
      category: 'nosql',
    },
    {
      title: 'English for IT 1',
      issuer: 'Cisco Networking Academy',
      date: 'December 2023',
      image: 'https://facialix.com/wp-content/uploads/2023/09/image-16.png',
      link: '/Certificates/English_for_IT_1_certificate_oussamakharifi2003-gmail-com_ccabc0cf-abb6-4287-8000-2c56aed1b4f5.pdf',
      category: 'english',
    },
    {
      title: 'Networking Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'January 2024',
      image: 'https://itdssmartsystem.ae/wp-content/uploads/2024/06/What-is-IT-Networking-scaled.webp',
      link: '/Certificates/Networking_Essentials_certificate_oussamakharifi2003-gmail-com_8b468aac-9f95-4bf3-a924-52a622d772b0.pdf',
      category: 'networking',
    },
    {
      title: 'Partner: NDG Linux Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'May 2024',
      image: 'https://www.netacad.az/wp-content/uploads/2020/04/linux2.jpg',
      link: '/Certificates/Partner-_NDG_Linux_Essentials_certificate_oussamakharifi2003-gmail-com_e4afd775-9c69-4087-9ca8-f7cac3d01aa8.pdf',
      category: 'linux',
    },
    {
      title: 'Partner: NDG Linux Unhatched',
      issuer: 'Cisco Networking Academy',
      date: 'May 2024',
      image: 'https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/6851b848-bfec-40de-8e70-19d2f5d0cb23/image.png',
      link: '/Certificates/Partner-_NDG_Linux_Unhatched_certificate_oussamakharifi2003-gmail-com_2e34cbcb-5c8b-493f-b5ab-9320fcf94f76.pdf',
      category: 'linux',
    },
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [certificates, setCertificates] = useState(allCertificates);

  const filterCategories = [
    { name: 'All', value: 'all' },
    { name: 'NO Sql', value: 'nosql' },
    { name: 'English', value: 'english' },
    { name: 'Networking', value: 'networking' },
    { name: 'Linux', value: 'linux'},
  ];

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    
    if (category === 'all') {
      setCertificates(allCertificates);
    } else {
      setCertificates(allCertificates.filter(cert => cert.category === category));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-6">
        <h2 className="section-heading">My Certificates</h2>
        <p className="text-tertiary max-w-2xl mb-8">
          These certificates represent my commitment to continuous learning and professional development in various areas of technology and software development.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleFilterChange(category.value)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === category.value
                  ? 'bg-secondary text-primary font-medium'
                  : 'bg-tertiary/20 text-tertiary hover:bg-tertiary/30'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;