import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'
import SEO from '../components/SEO'
import Particles from '../components/animations/Particles'
import { jobListings } from '../data/jobListings'
import Footer from '../components/layout/Footer'

const Careers = () => {
  const navigate = useNavigate()

  return (
    <div className="relative">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 -z-10">
        <Particles count={50} />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
      </div>
      <SEO 
        title="Kariyer - Medmentum | Sağlık Teknolojisinde Kariyer Fırsatları"
        description="Medmentum'da sağlık teknolojisi alanında kariyer fırsatları. AI, yazılım geliştirme, veri bilimi ve daha fazla alanda açık pozisyonlar."
        keywords="medmentum kariyer, sağlık teknolojisi iş ilanları, AI mühendis, full stack developer, data analyst, product designer"
        url="/careers"
      />

      {/* Job Listings Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Açık Pozisyonlar
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Size uygun pozisyonu bulun ve ekibimize katılın
              </p>
            </div>
          </FadeIn>

          {/* Job Listings as List */}
          <div className="space-y-4">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                onClick={() => navigate(`/careers/${job.id}`)}
                className="group cursor-pointer"
              >
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${job.color} flex items-center justify-center flex-shrink-0`}>
                          <job.icon className="text-white" size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {job.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 ml-13">
                        <div className="flex items-center gap-1">
                          <Briefcase size={14} />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Careers

