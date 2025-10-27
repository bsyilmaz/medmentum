import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, MapPin, Phone } from 'lucide-react'
import { EvervaultCard, Icon } from './EvervaultCard'

const ProfileCard = ({ member, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center w-full mx-auto p-6 relative min-h-[600px] rounded-3xl bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Corner Icons */}
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        {/* Large Evervault Effect Area */}
        <div className="w-full h-[350px] mb-6 rounded-2xl overflow-hidden">
          <EvervaultCard text="">
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/10 dark:to-secondary-900/10">
              {/* Avatar Image */}
              <div className="relative z-20 mb-4">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-white dark:border-neutral-800 shadow-2xl"
                  />
                  {/* Online Status */}
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-neutral-800 shadow-lg" />
                </div>
              </div>

              {/* Name & Role in Evervault Area */}
              <h2 className="dark:text-white text-black text-2xl font-bold mb-2 text-center z-20">
                {member.name}
              </h2>
              <div className="z-20">
                <span className="text-sm border font-medium dark:border-white/[0.2] border-black/[0.2] rounded-full text-black dark:text-white px-4 py-1.5 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm">
                  {member.role}
                </span>
              </div>
            </div>
          </EvervaultCard>
        </div>

        {/* Bio */}
        <p className="text-sm dark:text-neutral-300 text-neutral-600 font-light w-full text-center mb-6 leading-relaxed px-4">
          {member.bio}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.2] dark:via-white/[0.2] to-transparent mb-6" />

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 w-full mt-auto">
          {member.linkedin && (
            <motion.a
              href={member.linkedin}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-black/[0.2] dark:border-white/[0.2] text-neutral-600 dark:text-neutral-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 dark:hover:bg-primary-600 dark:hover:border-primary-600 transition-all duration-300 shadow-sm hover:shadow-lg"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          )}
          
          {member.twitter && (
            <motion.a
              href={member.twitter}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-black/[0.2] dark:border-white/[0.2] text-neutral-600 dark:text-neutral-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 dark:hover:bg-primary-600 dark:hover:border-primary-600 transition-all duration-300 shadow-sm hover:shadow-lg"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          )}
          
          {member.email && (
            <motion.a
              href={`mailto:${member.email}`}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-black/[0.2] dark:border-white/[0.2] text-neutral-600 dark:text-neutral-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 dark:hover:bg-primary-600 dark:hover:border-primary-600 transition-all duration-300 shadow-sm hover:shadow-lg"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          )}
          
          {member.phone && (
            <motion.a
              href={`tel:${member.phone}`}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-black/[0.2] dark:border-white/[0.2] text-neutral-600 dark:text-neutral-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 dark:hover:bg-primary-600 dark:hover:border-primary-600 transition-all duration-300 shadow-sm hover:shadow-lg"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </motion.a>
          )}
          
          {member.location && (
            <div 
              className="flex items-center justify-center w-11 h-11 rounded-full border border-black/[0.2] dark:border-white/[0.2] text-neutral-500 dark:text-neutral-500 cursor-default"
              title={member.location}
            >
              <MapPin className="w-5 h-5" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProfileCard
