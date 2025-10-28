import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Briefcase, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import FadeIn from '../components/animations/FadeIn'
import SEO from '../components/SEO'
import Particles from '../components/animations/Particles'
import { jobListings } from '../data/jobListings'

const CareerDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const job = jobListings.find(j => j.id === parseInt(id))

  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: ''
  })

  const [submitted, setSubmitted] = useState(false)

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">İş ilanı bulunamadı</h1>
          <Button onClick={() => navigate('/careers')}>
            Kariyer Sayfasına Dön
          </Button>
        </div>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Application:', { ...applicationForm, position: job.title })
    setSubmitted(true)
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    // Reset form after 3 seconds and redirect
    setTimeout(() => {
      setSubmitted(false)
      setApplicationForm({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        coverLetter: ''
      })
    }, 3000)
  }

  const JobIcon = job.icon

  return (
    <div className="overflow-hidden relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 -z-10">
        <Particles count={30} />
      </div>

      <SEO 
        title={`${job.title} - Medmentum Kariyer`}
        description={job.description}
        keywords={`${job.title}, ${job.department}, medmentum kariyer`}
        url={`/careers/${job.id}`}
      />

      {/* Success Message */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <CheckCircle size={24} />
            <div>
              <p className="font-semibold">Başvurunuz Alındı!</p>
              <p className="text-sm">En kısa sürede size dönüş yapacağız.</p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="container mx-auto px-6 py-20 max-w-5xl">
        {/* Back Button */}
        <FadeIn>
          <button
            onClick={() => navigate('/careers')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Tüm Pozisyonlar</span>
          </button>
        </FadeIn>

        {/* Job Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 mb-8"
        >
          <div className="flex items-start gap-6">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center flex-shrink-0`}>
              <JobIcon className="text-white" size={32} />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Briefcase size={18} />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{job.type}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Position */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Pozisyon Hakkında
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {job.description}
              </p>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Aranan Nitelikler
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((req, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Sorumluluklar
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Application Form Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 sticky top-24"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Başvuru Formu
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Adınız Soyadınız *
                  </label>
                  <Input
                    type="text"
                    placeholder="Ad Soyad"
                    value={applicationForm.name}
                    onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    E-posta *
                  </label>
                  <Input
                    type="email"
                    placeholder="ornek@email.com"
                    value={applicationForm.email}
                    onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telefon *
                  </label>
                  <Input
                    type="tel"
                    placeholder="0 (XXX) XXX XX XX"
                    value={applicationForm.phone}
                    onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    LinkedIn Profili
                  </label>
                  <Input
                    type="url"
                    placeholder="linkedin.com/in/..."
                    value={applicationForm.linkedin}
                    onChange={(e) => setApplicationForm({ ...applicationForm, linkedin: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ön Yazı *
                  </label>
                  <Textarea
                    placeholder="Neden bu pozisyon için uygun olduğunuzu anlatın..."
                    value={applicationForm.coverLetter}
                    onChange={(e) => setApplicationForm({ ...applicationForm, coverLetter: e.target.value })}
                    required
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-lg py-3 font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Başvuruyu Gönder
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerDetail

