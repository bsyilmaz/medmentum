import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Activity, Brain, Heart, Shield, Users, Zap, X, Send, Building2, Briefcase, MapPin, Clock, Code2 } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import FadeIn from '../components/animations/FadeIn'
import Particles from '../components/animations/Particles'
import Sparkles from '../components/animations/Sparkles'
import HoverCard from '../components/animations/HoverCard'
import MagneticButton from '../components/animations/MagneticButton'
import { AnimatedCard } from '../components/animations/AnimatedCard'
import { MorphingText } from '../components/ui/MorphingText'
import SEO from '../components/SEO'
import { OrganizationSchema, WebsiteSchema } from '../components/StructuredData'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'

const Home = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [quoteForm, setQuoteForm] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    needs: ''
  })

  const handleQuoteSubmit = (e) => {
    e.preventDefault()
    // Form submit logic burada olacak
    console.log('Quote Request:', quoteForm)
    alert('Teklif talebiniz alınmıştır! En kısa sürede size dönüş yapacağız.')
    setIsQuoteModalOpen(false)
    setQuoteForm({
      company: '',
      name: '',
      email: '',
      phone: '',
      needs: ''
    })
  }

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Yapay Zeka & Makine Öğrenmesi',
      location: 'İstanbul, Türkiye',
      type: 'Full-time',
      typeIcon: Clock,
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Yazılım Geliştirme',
      location: 'Remote',
      type: 'Full-time',
      typeIcon: Code2,
    },
    {
      id: 3,
      title: 'Healthcare Data Analyst',
      department: 'Veri Bilimi',
      location: 'Ankara, Türkiye',
      type: 'Full-time',
      typeIcon: Activity,
    },
  ]

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Yapay zeka destekli teşhis sistemleri ile hızlı ve doğru sonuçlar',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description: 'Hasta verilerini gerçek zamanlı olarak izleyin ve analiz edin',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'HIPAA ve KVKK uyumlu, güvenli veri yönetimi',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'Hasta odaklı yaklaşım ile en iyi bakım deneyimi',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Ekip üyeleri arasında sorunsuz iletişim ve işbirliği',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Zap,
      title: 'Fast & Efficient',
      description: 'Hızlı ve verimli iş akışları ile zaman tasarrufu',
      color: 'from-yellow-500 to-yellow-600',
    },
  ]

  // Important dates for calendar
  const importantDates = [
    { date: new Date('2024-12-15'), title: 'Yeni Özellik Duyurusu', description: 'AI teşhis motoru güncellemesi' },
    { date: new Date('2024-12-20'), title: 'Eğitim Webinarı', description: 'Sistem kullanımı eğitimi' },
    { date: new Date('2024-12-25'), title: 'Yılbaşı Kapanışı', description: 'Tatil' },
    { date: new Date('2025-01-05'), title: 'Platform Güncellemesi', description: 'Yeni arayüz yayında' },
  ]

  // Recent announcements
  const announcements = [
    {
      date: '15 Aralık 2024',
      title: 'Yeni AI Teşhis Motoru Duyurusu',
      description: 'Gelişmiş yapay zeka algoritmaları ile daha hızlı teşhis imkanı.',
      type: 'güncelleme',
    },
    {
      date: '10 Aralık 2024',
      title: 'Sistem Bakımı Tamamlandı',
      description: 'Platform güvenlik güncellemeleri tamamlandı.',
      type: 'bakım',
    },
    {
      date: '5 Aralık 2024',
      title: 'Mobil Uygulama Yayında',
      description: 'iOS ve Android uygulamaları artık indirilebilir.',
      type: 'yeni',
    },
  ]

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Medmentum - Sağlıkta Teknolojinin Geleceği | AI Destekli Sağlık Platformu"
        description="AI destekli teşhis, telemedicine ve hasta odaklı bakım ile sağlık hizmetlerini dönüştürüyoruz. 10K+ aktif kullanıcı, 50K+ başarılı tanı. Ücretsiz deneyin."
        keywords="sağlık teknolojisi, AI teşhis, telemedicine, dijital sağlık, hasta takip sistemi, elektronik sağlık kayıtları, sağlık platformu, medmentum, yapay zeka sağlık"
        url="/"
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200"
      />
      <OrganizationSchema />
      <WebsiteSchema />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
        <Particles count={50} />
        
        {/* Animated background blobs */}
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
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                  Sağlık Hizmetlerini
                </h1>
                  <div className="flex justify-start items-start h-16 md:h-20">
                  <MorphingText 
                    texts={['Dönüştürüyoruz', 'Yeniliyoruz', 'İyileştiriyoruz', 'Geliştiriyoruz']}
                      className="text-4xl md:text-5xl lg:text-6xl h-auto leading-none text-gray-900 dark:text-white mx-0 text-left w-auto"
                      leftAligned={true}
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed"
              >
                Yapay zeka destekli teşhis, gerçek zamanlı izleme ve hasta odaklı bakım ile 
                sağlık hizmetlerinde yeni bir çağ başlatıyoruz.
              </motion.p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <MagneticButton className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-base shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center gap-2">
                    Hemen Başlayın
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </span>
                </MagneticButton>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-base font-semibold border-2 rounded-full hover:scale-105 transition-transform"
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  Teklif Al
                </Button>
              </motion.div>
            </FadeIn>

            {/* Career Card */}
            <FadeIn delay={0.9}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 border border-green-200 dark:border-green-700 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => window.location.href = '/careers'}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      Kariyer Fırsatları
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      6 açık pozisyon
                    </p>
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg mb-3">
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-2">
                    {jobListings[0].title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      {jobListings[0].location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {jobListings[0].type}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => window.location.href = '/careers'}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold text-sm hover:from-green-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  Tüm İlanları Gör
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </FadeIn>
            </div>

            {/* Right Column - Cards */}
            <div className="lg:col-span-1 space-y-4">
              {/* Calendar Card */}
              <FadeIn delay={0.3}>
              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Activity className="text-white" size={20} />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      Önemli Tarihler
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {importantDates.slice(0, 3).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                          {item.date.getDate()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {item.date.toLocaleDateString('tr-TR', { month: 'short', day: 'numeric' })}
                          </p>
                        </div>
                    </div>
                ))}
        </div>
                </motion.div>
              </FadeIn>

              {/* Announcements Card */}
              <FadeIn delay={0.4}>
        <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-5 border border-purple-200 dark:border-purple-900 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Zap className="text-white" size={20} />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      Son Duyurular
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {announcements.slice(0, 3).map((announcement, index) => (
                      <div
                        key={index}
                        className="p-2 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all"
                      >
                        <div className="flex items-start justify-between mb-1">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                            announcement.type === 'yeni' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                            announcement.type === 'güncelleme' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                            'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                          }`}>
                            {announcement.type === 'yeni' ? 'Yeni' :
                             announcement.type === 'güncelleme' ? 'Güncelleme' : 'Bakım'}
            </span>
                        </div>
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-2">
                          {announcement.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {announcement.date}
                        </p>
                      </div>
                    ))}
                  </div>
              </motion.div>
            </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white"
              >
                Neden <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Medmentum?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
              >
                Sağlık profesyonellerinin ihtiyaçları için özel olarak tasarlanmış 
                güçlü özellikler ve yenilikçi çözümler
              </motion.p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <HoverCard>
                  <Card className="h-full p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <feature.icon className="text-white" size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </Card>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <Particles count={30} />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <motion.h2
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white"
              >
                Hazır mısınız?
              </motion.h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Sağlık hizmetlerinizi bir üst seviyeye taşıyın. 
                Ücretsiz denemeye hemen başlayın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton className="group px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-xl shadow-white/20 hover:shadow-white/30 hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Ücretsiz Başlayın
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </MagneticButton>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                  İletişime Geçin
                </Button>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsQuoteModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 p-8">
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Briefcase className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Özel Yazılım Çözümleri</h2>
                  <p className="text-white/90 text-sm mt-1">
                    Şirketinize özel yazılım geliştirme teklifi için formu doldurun
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 max-h-[70vh] overflow-y-auto">
              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-900">
                <div className="flex items-start gap-3">
                  <Building2 className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Size Özel Çözümler
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Sağlık sektörüne özel ihtiyaçlarınız için AI destekli, ölçeklenebilir ve güvenli yazılım çözümleri geliştiriyoruz. İhtiyaçlarınızı detaylandırın, size özel teklif hazırlayalım.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Şirket Adı <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Şirket adını girin"
                      value={quoteForm.company}
                      onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Adınız Soyadınız <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Ad ve soyad"
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      E-posta <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="ornek@email.com"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      placeholder="0 (XXX) XXX XX XX"
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    İhtiyaçlarınız ve Beklentileriniz <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    placeholder="Örn: AI destekli hasta takip sistemi, 100+ kullanıcı, HIPAA uyumlu veri yönetimi, entegrasyon ihtiyaçları..."
                    value={quoteForm.needs}
                    onChange={(e) => setQuoteForm({ ...quoteForm, needs: e.target.value })}
                    required
                    rows={5}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 rounded-xl py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Teklif İste
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsQuoteModalOpen(false)}
                    className="px-6 py-4 rounded-xl font-semibold"
                  >
                    İptal
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Home

