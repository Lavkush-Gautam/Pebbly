import React from 'react';
import award from '../assets/award.svg';
import community1 from '../assets/img1.webp';
import community2 from '../assets/img2.webp';
import community3 from '../assets/img3.webp';
import community4 from '../assets/img4.webp';
import community5 from '../assets/img5.webp';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Community = () => {
  const communityImages = [community1, community2, community3, community4,community5];

  return (
    <div className="bg-white text-gray-800 px-4 py-12">
      {/* Heading with Award Icon */}
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <h1 className="md:text-[36px] text-3xl font-extrabold tracking-wide text-black">
          Pabbly Connect Has an Active 21,000+ Members
        </h1>

        <div className="flex flex-row gap-3 items-center pt-4">
          <img src={award} alt="Award" className="h-10 w-auto" />
          <Link to="/">
            <h2 className="text-blue-600 md:text-[36px] text-2xl font-extrabold underline decoration-blue-600">
              Automate your Tasks!
            </h2>
          </Link>
        </div>
      </div>

      {/* Community Cards with Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-6 max-w-6xl mx-auto">
        {communityImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden bg-gray-100 cursor-pointer"
          >
            <img
              src={img}
              alt={`Community ${index + 1}`}
              className="w-full h-[80px] object-cover "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Community;
