import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, X, Send, Building2, Briefcase, Shield, Zap, Cloud, Database, CheckCircle, Plug, Server } from 'lucide-react'
import Button from '../components/ui/Button'
import FadeIn from '../components/animations/FadeIn'
import MagneticButton from '../components/animations/MagneticButton'
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
      <section className="relative py-20 overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <div className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                  Sağlık Hizmetlerini
                </h1>
                <div className="h-16 md:h-20 flex justify-center items-center">
                  <MorphingText 
                    texts={['Dönüştürüyoruz', 'Yeniliyoruz', 'İyileştiriyoruz', 'Geliştiriyoruz']}
                    className="text-4xl md:text-5xl lg:text-6xl h-auto leading-none text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-center"
              >
                Akıllı yazılım çözümlerimizle sağlık hizmetlerini yeniden tanımlıyoruz.
                Yapay zekâ destekli teşhis, gerçek zamanlı veri analizi ve insan odaklı bakım deneyimiyle sağlıkta yeni bir dönemi başlatıyoruz.
              </motion.p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/products">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full font-bold text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      Hemen Başlayın
                      <ArrowRight size={18} />
                    </span>
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-base font-semibold border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
                  >
                    Teklif Al
                  </Button>
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </div>

        {/* Features Section - Neden Medmentum */}
        <div className="container mx-auto px-6 relative z-10 py-32">
          <FadeIn>
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white"
              >
                Neden <span style={{ color: '#401268' }}>Medmentum?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                Sağlık teknolojisinde devrim yaratan özellikler ve yenilikçi çözümler
              </motion.p>
            </div>
          </FadeIn>

          <div className="max-w-7xl mx-auto">
            {/* Ana özellikler - Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "AI Destekli Teşhis",
                  description: "Yapay zeka algoritmaları ile %95+ doğruluk oranında hızlı teşhis",
                  gradient: "from-blue-500 to-cyan-500",
                  stat: "95%",
                  statLabel: "Doğruluk"
                },
                {
                  title: "Gerçek Zamanlı İzleme",
                  description: "Hasta verilerini anlık takip edin, kritik durumları erken tespit edin",
                  gradient: "from-purple-500 to-pink-500",
                  stat: "24/7",
                  statLabel: "İzleme"
                },
                {
                  title: "Güvenli Veri Yönetimi",
                  description: "KVKK ve HIPAA uyumlu, end-to-end şifreleme ile maksimum güvenlik",
                  gradient: "from-green-500 to-emerald-500",
                  stat: "100%",
                  statLabel: "Güvenli"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* İstatistik badge */}
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${feature.gradient} text-white text-sm font-bold mb-6`}>
                      <span className="text-2xl font-black mr-2">{feature.stat}</span>
                      <span>{feature.statLabel}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Hover effect line */}
                    <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Alt özellikler - Modern card layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Entegrasyon & Uyumluluk */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <Plug className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Entegrasyon & Uyumluluk
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <Database className="text-blue-600 dark:text-blue-400" size={16} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">HL7/FHIR standartları</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <CheckCircle className="text-green-600 dark:text-green-400" size={16} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Mevcut sistemlerle uyumlu</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <Zap className="text-purple-600 dark:text-purple-400" size={16} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">API-first yaklaşım</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Performans & Ölçeklenebilirlik */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <Server className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Performans & Ölçeklenebilirlik
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                        <Cloud className="text-yellow-600 dark:text-yellow-400" size={16} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Bulut tabanlı altyapı</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                        <Shield className="text-red-600 dark:text-red-400" size={16} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">99.9% uptime garantisi</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                        <Zap className="text-indigo-600 dark:text-indigo-400" size={16} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Otomatik ölçeklendirme</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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

