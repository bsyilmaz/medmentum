import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, Phone, Send, MessageCircle, Calendar, Clock } from 'lucide-react'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import Button from '../components/ui/Button'
import FadeIn from '../components/animations/FadeIn'
import SEO from '../components/SEO'
import { BreadcrumbSchema } from '../components/StructuredData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState('contact')
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    needs: ''
  })

  useEffect(() => {
    // URL hash'ini kontrol et ve demo tab'ına geç
    if (window.location.hash === '#demo') {
      setActiveTab('demo')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleDemoSubmit = (e) => {
    e.preventDefault()
    console.log('Demo Request:', demoForm)
    alert('Demo talebiniz alınmıştır! En kısa sürede size dönüş yapacağız.')
    setDemoForm({ name: '', email: '', company: '', phone: '', needs: '' })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Maslak, İstanbul, Türkiye',
      color: 'from-blue-500 to-blue-600',
      delay: 0.1
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@medmentum.com',
      link: 'mailto:info@medmentum.com',
      color: 'from-purple-500 to-purple-600',
      delay: 0.2
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 500 123 45 67',
      link: 'tel:+905001234567',
      color: 'from-pink-500 to-pink-600',
      delay: 0.3
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen py-20 relative">
      <SEO 
        title="İletişim | Bize Ulaşın - Medmentum"
        description="Medmentum ile iletişime geçin. Sorularınız, önerileriniz veya işbirliği teklifleriniz için bize yazın."
        keywords="medmentum iletişim, sağlık teknolojisi destek, demo talep, işbirliği"
        url="/contact"
      />
      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İletişim', url: '/contact' }
      ]} />

      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Bize Ulaşın
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sorularınız, önerileriniz veya demo talepleri için bizimle iletişime geçin
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer p-8">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-20 blur-xl`}></div>
                  <div className={`absolute -inset-[2px] bg-gradient-to-br ${info.color} rounded-3xl opacity-30`}></div>
                </div>
                
                {/* Icon container with advanced effects */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    
                    {/* Icon container */}
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-500`}>
                      <info.icon className="text-white relative z-10" size={32} />
                      
                    </div>
                    
                  </div>
                </div>
                
                {/* Title with tech style */}
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-900 dark:text-white">
                  {info.title}
                </h3>
                
                {/* Content */}
                <div className="text-center pb-6">
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-700 dark:text-gray-200 font-medium">{info.content}</p>
                  )}
                </div>
                
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Form Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          >
            {/* Form Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              
              <Card className="relative bg-white dark:bg-gray-900">
                {/* Tab Navigation */}
                <div className="flex mb-8 border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setActiveTab('contact')}
                    className={`px-6 py-3 font-semibold text-sm transition-all relative ${
                      activeTab === 'contact'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                    }`}
                  >
                    {activeTab === 'contact' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <MessageCircle size={18} className="inline mr-2" />
                    İletişim
                  </button>
                  <button
                    onClick={() => setActiveTab('demo')}
                    className={`px-6 py-3 font-semibold text-sm transition-all relative ${
                      activeTab === 'demo'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                    }`}
                  >
                    {activeTab === 'demo' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <Calendar size={18} className="inline mr-2" />
                    Demo Talep
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === 'contact' ? (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {submitted ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-center py-12"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
                          >
                            <Send className="text-green-600 dark:text-green-400" size={32} />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                            Mesajınız Gönderildi!
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            En kısa sürede size geri dönüş yapacağız.
                          </p>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <Input
                              label="İsim Soyisim"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Adınız ve soyadınız"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <Input
                              label="E-posta"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="ornek@email.com"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <Input
                              label="Konu"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                              placeholder="Mesajınızın konusu"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <Textarea
                              label="Mesaj"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={6}
                              placeholder="Mesajınızı buraya yazın..."
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg" size="lg">
                              Gönder
                              <Send className="inline ml-2" size={18} />
                            </Button>
                          </motion.div>
                        </form>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="demo"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                        <div className="flex items-start space-x-3">
                          <Clock className="text-blue-600 dark:text-blue-400 mt-0.5" size={20} />
                          <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                              24 Saat İçinde Dönüş
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Demo talebinizi aldıktan sonra size özel bir gösterim için hemen iletişime geçeceğiz.
                            </p>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={handleDemoSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <Input
                              label="Ad Soyad"
                              name="name"
                              value={demoForm.name}
                              onChange={(e) => setDemoForm({...demoForm, name: e.target.value})}
                              required
                              placeholder="Adınız ve soyadınız"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <Input
                              label="E-posta"
                              name="email"
                              type="email"
                              value={demoForm.email}
                              onChange={(e) => setDemoForm({...demoForm, email: e.target.value})}
                              required
                              placeholder="ornek@email.com"
                            />
                          </motion.div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <Input
                              label="Şirket/Kurum"
                              name="company"
                              value={demoForm.company}
                              onChange={(e) => setDemoForm({...demoForm, company: e.target.value})}
                              placeholder="Şirket adınız"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <Input
                              label="Telefon"
                              name="phone"
                              type="tel"
                              value={demoForm.phone}
                              onChange={(e) => setDemoForm({...demoForm, phone: e.target.value})}
                              placeholder="+90 5XX XXX XX XX"
                            />
                          </motion.div>
                        </div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <Textarea
                            label="Demo'da Görmek İstediğiniz Özellikler"
                            name="needs"
                            value={demoForm.needs}
                            onChange={(e) => setDemoForm({...demoForm, needs: e.target.value})}
                            rows={4}
                            placeholder="Örneğin: AI teşhis sistemi, hasta takip modülü, raporlama özellikleri..."
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg" size="lg">
                            Demo Talep Et
                            <Calendar className="inline ml-2" size={18} />
                          </Button>
                        </motion.div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </div>

            {/* Map Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              
              <Card className="relative bg-white dark:bg-gray-900 h-full">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Konumumuz
                </h2>
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.6687167192887!2d29.010652315456644!3d41.084545979289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5f7e0d79c2f%3A0x68781d6cfb4dbf66!2sMaslak%2C%20Istanbul!5e0!3m2!1sen!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Medmentum Location"
                  ></iframe>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
