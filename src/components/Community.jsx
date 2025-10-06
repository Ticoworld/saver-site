import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaDiscord, FaTiktok } from 'react-icons/fa';
import { UserGroupIcon, ChatBubbleLeftRightIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import SOS from '../config/sos';
import DinoBackground from './DinoBackground';
import SectionReveal from './SectionReveal';
import ScrollParallax from './ScrollParallax';

const Community = () => {
  const channels = [
    { 
      name: 'X (Twitter)', 
      icon: <FaTwitter />, 
      href: SOS.links.twitter || 'https://x.com',
      description: 'Latest updates and announcements'
    },
    { 
      name: 'Telegram', 
      icon: <FaTelegram />, 
      href: SOS.links.telegram || '#',
      description: 'Community discussions and support'
    },
    ...(SOS.links.discord ? [{ 
      name: 'Discord', 
      icon: <FaDiscord />, 
      href: SOS.links.discord,
      description: 'Real-time chat and governance'
    }] : []),
    { 
      name: 'TikTok', 
      icon: <FaTiktok />, 
      href: SOS.links.tiktok || '#',
      description: 'Educational content and updates'
    },
  ];

  const stats = [
    {
      icon: UserGroupIcon,
      title: 'Friendly Team',
      description: 'Real people who care about building something good together'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Transparent Communication',
      description: 'Open dialogue and regular community updates'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Reach',
      description: 'Building connections across the BSC community'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="community" className="py-24 bg-gradient-to-br from-emerald-50 via-neutral-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Enhanced Dino backgrounds with parallax */}
      <ScrollParallax speed={0.3}>
        <DinoBackground className="top-24 left-12" size="medium" opacity={0.04} />
      </ScrollParallax>
      <ScrollParallax speed={-0.5}>
        <DinoBackground className="bottom-24 right-20" size="large" opacity={0.03} />
      </ScrollParallax>

      {/* Floating background elements */}
      <Motion.div
        animate={{ 
          y: [0, -25, 0],
          x: [0, 15, 0]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-16 w-28 h-28 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl"
      ></Motion.div>

      <div className="container mx-auto px-4 relative">
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <Motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6"
          >
            Join Our Community
          </Motion.div>
          <Motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-display font-bold mb-8 text-neutral-900"
          >
            Connect & <span className="text-emerald-600">Collaborate</span>
          </Motion.h2>
          <Motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto mb-8 rounded-full"
          ></Motion.div>
          <Motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-4xl mx-auto text-neutral-600 leading-relaxed"
          >
            Join a welcoming community of builders, creators, and friends 
            who are growing together on BSC.
          </Motion.p>
        </Motion.div>

        {/* Community Stats with enhanced animations */}
        <Motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <Motion.div
              key={stat.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.03
              }}
              transition={{ duration: 0.3 }}
              className="text-center group cursor-pointer"
            >
              <Motion.div 
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </Motion.div>
              <h3 className="text-xl font-display font-bold text-neutral-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">{stat.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{stat.description}</p>
            </Motion.div>
          ))}
        </Motion.div>

        {/* Enhanced Social Channels with consistent containers */}
        <Motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {channels.map((channel) => (
            <Motion.a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 h-full flex flex-col">
                <Motion.div 
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white text-xl shadow-lg"
                >
                  {channel.icon}
                </Motion.div>
                <h3 className="text-lg font-display font-bold text-neutral-900 mb-2 text-center group-hover:text-emerald-600 transition-colors duration-300">{channel.name}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed text-center flex-grow">{channel.description}</p>
              </div>
            </Motion.a>
          ))}
        </Motion.div>

        {/* Enhanced Call to Action */}
        <Motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <Motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-white shadow-xl max-w-4xl mx-auto relative overflow-hidden"
          >
            {/* Animated background elements */}
            <Motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-xl"
            ></Motion.div>
            
            <div className="relative z-10">
              <Motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-3xl md:text-4xl font-display font-bold mb-6"
              >
                Ready to Build the Future?
              </Motion.h3>
              <Motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-xl mb-8 text-emerald-100 leading-relaxed"
              >
                Join thousands of community members who are learning and growing together 
                in a positive, supportive environment.
              </Motion.p>
              <Motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Motion.a
                  href={SOS.links.telegram || '#'}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-700 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-neutral-100 transition-colors inline-flex items-center justify-center"
                >
                  Join Telegram
                </Motion.a>
                {SOS.links.discord && (
                  <Motion.a
                    href={SOS.links.discord}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-emerald-700 transition-colors inline-flex items-center justify-center"
                  >
                    Join Discord
                  </Motion.a>
                )}
              </Motion.div>
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Community;
