import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { BreadcrumbSchema } from '../components/StructuredData'
import { HoverBorderGradient } from '../components/ui/HoverBorderGradient'
import { Terminal, TypingAnimation, AnimatedSpan } from '../components/ui/Terminal'

const Products = () => {
  const { scrollYProgress } = useScroll()

  const products = [
    {
      id: 1,
      name: 'MAKO Medical Assistant Kiosk',
      tagline: 'Akıllı Sağlık Asistanı Kiosk',
      description: 'Hastanelerde ve sağlık merkezlerinde hasta kabul, yönlendirme ve bilgilendirme süreçlerini otomatikleştiren yapay zeka destekli self-servis kiosk. Dokunmatik ekran, yüz tanıma ve sesli asistan özellikleriyle hasta deneyimini iyileştirir.',
      longDescription: 'MAKO Medical Assistant Kiosk, hasta kayıt işlemlerinden randevu kontrolüne, ödeme işlemlerinden reçete yazdırmaya kadar birçok işlemi otomatikleştiren yenilikçi bir çözümdür. Yapay zeka destekli sesli asistan, hastalarınıza 7/24 destek sağlar. Modern tasarımı ve kullanıcı dostu arayüzü ile bekleme sürelerini kısaltır ve personel iş yükünü azaltır.',
      image_url: '/images/products/makoprop.png',
      icon: Sparkles,
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
        }
      ],
      stats: [
        { label: 'İşlem Süresi', value: '<2 dk' },
        { label: 'Dil Desteği', value: '15+' },
        { label: 'Hasta Memnuniyeti', value: '95%' }
      ]
    }
  ]

  return (
    <div className="min-h-screen relative">
      <SEO 
        title="Ürünler ve Hizmetler | AI Teşhis, Telemedicine, Sağlık Sistemleri"
        description="AI destekli teşhis platformu, telemedicine suite, elektronik sağlık kayıtları. Modern sağlık çözümleri için Medmentum ürünlerini keşfedin."
        keywords="AI teşhis platformu, telemedicine yazılımı, elektronik sağlık kayıtları, sağlık yazılımları"
        url="/products"
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200"
      />
      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Ürünler', url: '/products' }
      ]} />

      {/* Products Sections */}
      {products.map((product, index) => {
        const Icon = product.icon
        const isEven = index % 2 === 0

        return (
          <section
            key={product.id}
            className="relative min-h-screen flex items-center py-20 overflow-hidden"
          >
            {/* Background removed - using Layout background */}

            <div className="container mx-auto px-6 relative z-10">
              {index === 0 ? (
                // MAKO - Özel Layout
                <div className="space-y-4">
                  {/* Ürün Adı */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg mb-4">
                      <Icon className="w-5 h-5 text-primary-600" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        AI-Powered Kiosk
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
                      {product.name}
                    </h2>
                    
                    <p className={`text-xl font-semibold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                      {product.tagline}
                    </p>
                  </motion.div>

                  {/* Foto + Sağ Kısım (Terminal + Açıklama + Buton) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                  >
                    {/* Sol: MAKO Fotoğrafı */}
                    <div className="flex items-start justify-center">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full max-w-lg h-auto object-contain"
                      />
                    </div>

                    {/* Sağ: Terminal + Açıklama + Buton */}
                    <div className="space-y-6">
                      {/* Terminal */}
                      <Terminal className="w-full overflow-x-auto">
                        <TypingAnimation duration={30}>$ mako.init()</TypingAnimation>
                        <AnimatedSpan className="text-blue-400">→ Sistem başlatılıyor...</AnimatedSpan>
                        <AnimatedSpan className="text-green-400">✓ AI Motor yüklendi</AnimatedSpan>
                        <AnimatedSpan className="text-green-400">✓ Yüz tanıma aktif</AnimatedSpan>
                        <AnimatedSpan className="text-green-400">✓ Sesli asistan hazır</AnimatedSpan>
                        <TypingAnimation duration={30}>$ mako.detectPatient()</TypingAnimation>
                        <AnimatedSpan className="text-yellow-400">⚡ Hasta tespit edildi</AnimatedSpan>
                        <AnimatedSpan className="text-blue-400">→ Kimlik doğrulanıyor...</AnimatedSpan>
                        <AnimatedSpan className="text-green-400">✓ Hasta: Ahmet Yılmaz</AnimatedSpan>
                        <TypingAnimation duration={30}>$ mako.processCheckIn()</TypingAnimation>
                        <AnimatedSpan className="text-yellow-400">⚡ Randevu kontrol...</AnimatedSpan>
                        <AnimatedSpan className="text-green-400">✓ Check-in tamamlandı</AnimatedSpan>
                        <AnimatedSpan className="text-blue-400">→ Sıra: A-042</AnimatedSpan>
                        <AnimatedSpan className="text-purple-400">● Bekleme: ~15 dk</AnimatedSpan>
                      </Terminal>

                      {/* Açıklama */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
                        <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Buton */}
                      <div className="flex justify-start">
                        <Link to="/products/mako" className="w-full sm:w-auto">
                          <HoverBorderGradient
                            containerClassName="rounded-full w-full sm:w-auto"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold w-full sm:w-auto"
                            duration={3}
                          >
                            <span className="flex items-center justify-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              Detaylı İncele
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </HoverBorderGradient>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ) : (
                // Diğer ürünler - Normal Layout
                <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={isEven ? '' : 'md:col-start-2'}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg mb-6">
                      <Icon className="w-5 h-5 text-primary-600" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Ürün #{index + 1}
                            </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                      {product.name}
                    </h2>
                    
                    <p className={`text-xl font-semibold mb-6 bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                      {product.tagline}
                    </p>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      {product.longDescription}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {product.stats.map((stat, i) => (
                        <div key={i} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent mb-1`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {product.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className="dark:bg-black bg-white text-black dark:text-white"
                      duration={2}
                    >
                      <span className="flex items-center gap-2">
                        Detaylı Bilgi Al
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </HoverBorderGradient>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={isEven ? '' : 'md:col-start-1 md:row-start-1'}
                  >
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${product.color} rounded-3xl blur-3xl opacity-20`} />
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl"
                      >
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-[500px] object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-10`} />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </section>
        )
      })}

    </div>
  )
}

export default Products

