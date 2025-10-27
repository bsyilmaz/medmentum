import { motion } from 'framer-motion'
import { Check, ArrowLeft, Calendar, Zap, Shield, Clock, Users, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { HoverBorderGradient } from '../components/ui/HoverBorderGradient'
import HoverCard from '../components/animations/HoverCard'
import MagneticButton from '../components/animations/MagneticButton'
import { Marquee } from '../components/ui/Marquee'

const MakoDetail = () => {
  const updates = [
    {
      version: 'v2.1.0',
      date: '2024-10-15',
      title: 'AI Motor Güncellemesi',
      type: 'feature',
      changes: [
        'Yüz tanıma doğruluğu %98.5\'e yükseltildi',
        'Sesli asistan Türkçe dil desteği geliştirildi',
        'Yeni hasta önceliklendirme algoritması eklendi'
      ]
    },
    {
      version: 'v2.0.5',
      date: '2024-09-28',
      title: 'Performans İyileştirmeleri',
      type: 'improvement',
      changes: [
        'Check-in süresi 30 saniye iyileştirildi',
        'Yazıcı bağlantı hızı optimize edildi',
        'Bellek kullanımı %20 azaltıldı'
      ]
    },
    {
      version: 'v2.0.0',
      date: '2024-09-01',
      title: 'Büyük Güncelleme - Ödeme Entegrasyonu',
      type: 'feature',
      changes: [
        'Kredi kartı ödeme desteği eklendi',
        'QR kod ile ödeme sistemi entegre edildi',
        'Sigorta şirketleri ile otomatik faturalandırma',
        'Elektronik fatura yazdırma özelliği'
      ]
    },
    {
      version: 'v1.9.2',
      date: '2024-08-10',
      title: 'Güvenlik Yaması',
      type: 'security',
      changes: [
        'KVKK uyumluluğu güncellemeleri',
        'Veri şifreleme protokolü güçlendirildi',
        'Güvenlik açığı düzeltmeleri'
      ]
    },
    {
      version: 'v1.9.0',
      date: '2024-07-20',
      title: 'Çoklu Dil Desteği',
      type: 'feature',
      changes: [
        '10 yeni dil desteği eklendi',
        'Arapça sağdan sola yazım desteği',
        'Sesli asistan çok dilli iletişim'
      ]
    }
  ]

  const product = {
    name: 'MAKO Medical Assistant Kiosk',
    tagline: 'Akıllı Sağlık Asistanı Kiosk',
    description: 'Hastanelerde ve sağlık merkezlerinde hasta kabul, yönlendirme ve bilgilendirme süreçlerini otomatikleştiren yapay zeka destekli self-servis kiosk. Dokunmatik ekran, yüz tanıma ve sesli asistan özellikleriyle hasta deneyimini iyileştirir.',
    longDescription: 'MAKO Medical Assistant Kiosk, hasta kayıt işlemlerinden randevu kontrolüne, ödeme işlemlerinden reçete yazdırmaya kadar birçok işlemi otomatikleştiren yenilikçi bir çözümdür. Yapay zeka destekli sesli asistan, hastalarınıza 7/24 destek sağlar. Modern tasarımı ve kullanıcı dostu arayüzü ile bekleme sürelerini kısaltır ve personel iş yükünü azaltır.',
    image_url: '/images/products/makofull.png',
    color: 'from-blue-500 to-purple-600',
    features: [
      {
        title: 'Self-Service Check-in',
        description: 'Otomatik hasta kayıt ve check-in sistemi'
      },
      {
        title: 'AI Voice Assistant',
        description: 'Sesli komutlarla etkileşim ve yönlendirme'
      },
      {
        title: 'Face Recognition',
        description: 'Yüz tanıma ile hızlı kimlik doğrulama'
      },
      {
        title: 'Payment Integration',
        description: 'Entegre ödeme sistemi ve fatura yazdırma'
      },
      {
        title: 'Multi-Language',
        description: 'Çoklu dil desteği ve erişilebilirlik özellikleri'
      },
      {
        title: 'Queue Management',
        description: 'Akıllı sıra yönetimi ve bekleme süresi tahmini'
      },
      {
        title: 'Document Printing',
        description: 'Reçete, rapor ve belge yazdırma özellikleri'
      },
      {
        title: 'Emergency Support',
        description: 'Acil durumlarda personel çağırma sistemi'
      },
      {
        title: 'Data Security',
        description: 'KVKK ve HIPAA uyumlu veri güvenliği'
      }
    ],
    stats: [
      { label: 'İşlem Süresi', value: '<2 dk' },
      { label: 'Dil Desteği', value: '15+' },
      { label: 'Hasta Memnuniyeti', value: '95%' },
      { label: 'Personel Tasarrufu', value: '40%' }
    ],
    technicalSpecs: [
      { label: 'Ekran', value: '32" 4K Dokunmatik Display' },
      { label: 'Kamera', value: 'AI-Powered 1080p HD Camera' },
      { label: 'Bağlantı', value: 'WiFi 6, Ethernet, 4G LTE' },
      { label: 'İşletim Sistemi', value: 'Linux/Android' },
      { label: 'Boyutlar', value: '180cm (H) x 60cm (W) x 40cm (D)' }
    ],
    useCases: [
      {
        title: 'Hasta Kabul',
        description: 'Yeni hastalar kimlik bilgilerini sisteme kaydedebilir, randevu oluşturabilir'
      },
      {
        title: 'Randevu Check-in',
        description: 'Randevulu hastalar hızlıca check-in yaparak sıra numarası alabilir'
      },
      {
        title: 'Ödeme İşlemleri',
        description: 'Kredi kartı, nakit veya sigorta ile ödeme yapılabilir'
      },
      {
        title: 'Bilgilendirme',
        description: 'Hastaların sorularını yanıtlar, bölümlere yönlendirir'
      }
    ]
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title="MAKO Medical Assistant Kiosk | Akıllı Sağlık Asistanı"
        description="MAKO Medical Assistant Kiosk - Yapay zeka destekli self-servis hasta kabul ve yönlendirme sistemi. Yüz tanıma, sesli asistan ve akıllı sıra yönetimi."
        keywords="mako kiosk, medical kiosk, self-service healthcare, hasta kabul kiosk, AI kiosk"
        url="/products/mako"
        image="/images/products/makofull.png"
      />

      {/* Hero Section with Image */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-gray-950">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s', transform: 'translate(-50%, -50%)' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            {/* Back Button */}
            <Link 
              to="/products"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 group transition-all"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              <span className="text-sm font-semibold">Tüm Ürünlere Dön</span>
            </Link>

            {/* Hero Content with Image */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300">
                  <Star className="w-4 h-4" />
                  En Popüler Çözüm
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {product.name}
            </h1>
            
                <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
              {product.tagline}
            </p>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>

                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {product.longDescription}
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                  >
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Hızlı Check-in</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                  >
                    <Users className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">15+ Dil</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                  >
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">KVKK Uyumlu</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right: Product Website/Demo */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-full"
              >
                <iframe
                  src="https://makoaii.netlify.app/"
                  className="w-full h-[700px] md:h-[800px] lg:h-[900px] rounded-3xl shadow-2xl border-4 border-gray-100 dark:border-gray-700 bg-white"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="MAKO Medical Assistant Demo"
                  style={{ pointerEvents: 'auto' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {product.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent mb-3`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Marquee Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
              >
                Özellikler
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 dark:text-gray-400"
              >
                MAKO ile hasta deneyimini iyileştirin
              </motion.p>
            </div>

            <Marquee className="[--duration:40s]">
              {product.features.map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 px-6 py-4 mx-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">
                        {feature.title}
                      </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                  </div>
                </motion.div>
              ))}
            </Marquee>
          </motion.div>
        </div>
      </section>

      {/* Updates & Changelog Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
              >
                Güncellemeler & Değişiklikler
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 dark:text-gray-400"
              >
                Geliştirme tarihçesi ve iyileştirmeler
              </motion.p>
            </div>

            <div className="space-y-6">
              {updates.map((update, i) => {
                const typeColors = {
                  feature: 'from-blue-500 to-purple-600',
                  improvement: 'from-green-500 to-teal-600',
                  security: 'from-red-500 to-orange-600'
                }
                const typeLabels = {
                  feature: 'Yeni Özellik',
                  improvement: 'İyileştirme',
                  security: 'Güvenlik'
                }
                const typeBgColors = {
                  feature: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
                  improvement: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
                  security: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                }

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="relative pl-8 pb-8 border-l-2 border-gray-300 dark:border-gray-700"
                  >
                    {/* Animated Timeline dot */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r ${typeColors[update.type]} border-2 border-white dark:border-gray-900 shadow-lg`}
                    />
                    
                    <HoverCard className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-700">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="text-3xl font-bold text-gray-900 dark:text-white"
                        >
                          {update.version}
                        </motion.span>
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className={`px-4 py-2 rounded-full text-xs font-bold ${typeBgColors[update.type]}`}
                        >
                          {typeLabels[update.type]}
                        </motion.span>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 ml-auto">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(update.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {update.title}
                      </h3>

                      {/* Changes */}
                      <ul className="space-y-3">
                        {update.changes.map((change, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i * 0.1) + (j * 0.05) }}
                            className="flex items-start gap-3"
                          >
                            <motion.div
                              animate={{ rotate: [0, 180, 360] }}
                              transition={{ duration: 0.5, delay: (i * 0.1) + (j * 0.05) }}
                            >
                              <Zap className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-r ${typeColors[update.type]} bg-clip-text text-transparent`} />
                            </motion.div>
                            <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {change}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </HoverCard>
                  </motion.div>
                )
              })}
            </div>

            {/* Version info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="mt-12 text-center p-8 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border-2 border-blue-200 dark:border-blue-800"
            >
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Mevcut Versiyon: v2.1.0
              </motion.p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Son güncelleme: 15 Ekim 2024
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Star className="w-16 h-16 text-yellow-300" fill="currentColor" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              MAKO'yu Sağlık Merkezinize Getirin
            </h2>
            <p className="text-xl mb-10 opacity-95 leading-relaxed">
              Demo talep edin ve hasta deneyimini nasıl iyileştireceğimizi görün. 
              <br className="hidden md:block" />
              Hemen ücretsiz deneyin!
            </p>
            <Link to="/contact">
              <MagneticButton className="inline-block">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                  className="bg-white text-primary-600 px-10 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-shadow"
                duration={2}
              >
                  Demo Talep Et →
              </HoverBorderGradient>
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MakoDetail

