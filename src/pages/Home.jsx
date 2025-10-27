import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Heart, Shield, Users, Zap, X, Send, Building2 } from 'lucide-react'
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
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                  Sağlık Hizmetlerini
                </h1>
                <div className="flex justify-center items-center h-16 md:h-20">
                  <MorphingText 
                    texts={['Dönüştürüyoruz', 'Yeniliyoruz', 'İyileştiriyoruz', 'Geliştiriyoruz']}
                    className="text-4xl md:text-5xl lg:text-6xl h-auto leading-none text-gray-900 dark:text-white mx-auto text-center w-auto"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
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
                className="flex flex-col sm:flex-row gap-4 justify-center"
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

