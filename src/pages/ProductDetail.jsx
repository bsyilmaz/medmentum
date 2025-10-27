import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle, ArrowLeft, Zap, Shield, Users, TrendingUp } from 'lucide-react'
import FadeIn from '../components/animations/FadeIn'
import SEO from '../components/SEO'
import { ProductSchema, BreadcrumbSchema } from '../components/StructuredData'
import Particles from '../components/animations/Particles'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [updates, setUpdates] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data (Bu kısım Supabase'den çekilecek)
  const mockProducts = {
    '1': {
      id: 1,
      name: 'AI Diagnostics Platform',
      slug: 'ai-diagnostics-platform',
      description: 'Yapay zeka destekli teşhis platformu ile hızlı ve doğru tanılar',
      long_description: 'AI Diagnostics Platform, gelişmiş yapay zeka algoritmalarını kullanarak tıbbi görüntüleme ve hasta verilerini analiz eder. Platform, doktorların daha hızlı ve doğru teşhis koymalarına yardımcı olur. %95 doğruluk oranı ile çalışan sistemimiz, dünya çapında onlarca hastanede kullanılmaktadır.',
      image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      features: [
        'AI-Powered Analysis',
        'Real-time Processing',
        'Cloud-based Infrastructure',
        'HIPAA Compliant',
        'Multi-language Support',
        'Integration APIs',
        '24/7 Technical Support',
        'Advanced Reporting'
      ],
      benefits: [
        { icon: Zap, title: 'Hızlı Sonuçlar', description: 'Saniyeler içinde analiz sonuçları' },
        { icon: Shield, title: 'Güvenli', description: 'Tüm veriler şifreli ve korumalı' },
        { icon: Users, title: 'Kullanıcı Dostu', description: 'Kolay öğrenme ve kullanım' },
        { icon: TrendingUp, title: 'Yüksek Doğruluk', description: '%95+ doğruluk oranı' }
      ],
      price: 'Özel Fiyatlandırma',
      demo_available: true
    },
    '2': {
      id: 2,
      name: 'Telemedicine Suite',
      slug: 'telemedicine-suite',
      description: 'Uzaktan hasta bakımı ve konsültasyon için kapsamlı çözüm',
      long_description: 'Telemedicine Suite, sağlık hizmeti sağlayıcılarının hastalarıyla uzaktan güvenli bir şekilde iletişim kurmasını sağlar. Video konferans, randevu yönetimi, e-reçete ve güvenli mesajlaşma özelliklerini tek bir platformda sunar.',
      image_url: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800',
      features: [
        'HD Video Calls',
        'Appointment Scheduling',
        'E-Prescriptions',
        'Secure Messaging',
        'Screen Sharing',
        'Patient Portal',
        'Insurance Integration',
        'Multi-device Support'
      ],
      benefits: [
        { icon: Zap, title: 'Anında Bağlantı', description: 'HD kalitede video görüşme' },
        { icon: Shield, title: 'Güvenli İletişim', description: 'End-to-end şifreleme' },
        { icon: Users, title: 'Hasta Yönetimi', description: 'Kapsamlı hasta portalı' },
        { icon: TrendingUp, title: 'Verimlilik', description: 'Randevu süresinde %40 azalma' }
      ],
      price: 'Aylık Abonelik',
      demo_available: true
    },
    '3': {
      id: 3,
      name: 'Health Records System',
      slug: 'health-records-system',
      description: 'Elektronik sağlık kayıtları yönetim sistemi',
      long_description: 'Health Records System, hasta verilerini dijitalleştirerek merkezi bir platformda saklar ve yönetir. Hastane, klinik ve doktorlar arasında güvenli veri paylaşımını sağlar. HIPAA ve KVKK uyumludur.',
      image_url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      features: [
        'Digital Records Management',
        'Easy Access & Search',
        'Data Analytics',
        'Integration APIs',
        'Automated Backups',
        'Audit Trails',
        'Custom Reports',
        'Mobile Access'
      ],
      benefits: [
        { icon: Zap, title: 'Hızlı Erişim', description: 'Kayıtlara anında ulaşım' },
        { icon: Shield, title: 'Veri Güvenliği', description: 'Çok katmanlı güvenlik' },
        { icon: Users, title: 'Kolay Paylaşım', description: 'Güvenli veri transferi' },
        { icon: TrendingUp, title: 'Analitik', description: 'Detaylı raporlama ve analiz' }
      ],
      price: 'Kurumsal Lisans',
      demo_available: true
    },
    '4': {
      id: 4,
      name: 'Patient Monitoring',
      slug: 'patient-monitoring',
      description: 'Gerçek zamanlı hasta izleme ve alarm sistemi',
      long_description: 'Patient Monitoring sistemi, hastane içi ve evde hasta takibi için geliştirilmiş kapsamlı bir çözümdür. IoT cihazlarıyla entegre çalışarak vital bulguları sürekli izler ve kritik durumlarda anında alarm verir.',
      image_url: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800',
      features: [
        'Real-time Monitoring',
        'Smart Alert System',
        'Mobile App Integration',
        'IoT Device Support',
        'Customizable Dashboards',
        'Historical Data Analysis',
        'Multi-patient View',
        'Emergency Protocols'
      ],
      benefits: [
        { icon: Zap, title: 'Anlık İzleme', description: '7/24 kesintisiz takip' },
        { icon: Shield, title: 'Güvenli Alarm', description: 'Anında uyarı sistemi' },
        { icon: Users, title: 'Çoklu Hasta', description: 'Aynı anda birçok hasta' },
        { icon: TrendingUp, title: 'Veri Analizi', description: 'Trend ve pattern tespiti' }
      ],
      price: 'Cihaz Bazlı',
      demo_available: true
    },
    '5': {
      id: 5,
      name: 'Laboratory Management',
      slug: 'laboratory-management',
      description: 'Laboratuvar iş akışları için entegre yönetim sistemi',
      long_description: 'Laboratory Management sistemi, laboratuvar operasyonlarını baştan sona dijitalleştirir. Numune takibinden sonuç yönetimine, kalite kontrolden raporlamaya kadar tüm süreçleri otomatize eder.',
      image_url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800',
      features: [
        'Sample Tracking',
        'Result Management',
        'Quality Control',
        'Automated Reporting',
        'Inventory Management',
        'Equipment Integration',
        'Barcode System',
        'Statistical Analysis'
      ],
      benefits: [
        { icon: Zap, title: 'Hızlı İşlem', description: 'Otomatik süreç yönetimi' },
        { icon: Shield, title: 'Kalite Kontrol', description: 'Entegre QC sistemi' },
        { icon: Users, title: 'İş Akışı', description: 'Optimize edilmiş süreçler' },
        { icon: TrendingUp, title: 'Verimlilik', description: '%50 zaman tasarrufu' }
      ],
      price: 'Modüler Fiyatlandırma',
      demo_available: true
    },
    '6': {
      id: 6,
      name: 'Pharmacy Integration',
      slug: 'pharmacy-integration',
      description: 'Eczane ve reçete yönetimi entegrasyon çözümü',
      long_description: 'Pharmacy Integration, eczanelerin hastaneler, klinikler ve sigorta şirketleriyle sorunsuz entegrasyon kurmasını sağlar. E-reçete, envanter yönetimi, faturalama ve sigorta talebi işlemlerini kolaylaştırır.',
      image_url: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800',
      features: [
        'E-Prescription Processing',
        'Inventory Control',
        'Automated Billing',
        'Insurance Claims',
        'Drug Interaction Checks',
        'Expiry Management',
        'Supplier Integration',
        'Sales Analytics'
      ],
      benefits: [
        { icon: Zap, title: 'Hızlı İşlem', description: 'Otomatik reçete işleme' },
        { icon: Shield, title: 'İlaç Güvenliği', description: 'Etkileşim kontrolü' },
        { icon: Users, title: 'Entegrasyon', description: 'Tüm sistemlerle uyumlu' },
        { icon: TrendingUp, title: 'Stok Yönetimi', description: 'Akıllı envanter takibi' }
      ],
      price: 'Eczane Bazlı',
      demo_available: true
    }
  }

  const mockUpdates = {
    1: [
      {
        id: 1,
        date: '2024-10-15',
        title: 'v2.5 Major Release',
        description: 'New AI models with 95% accuracy rate. Added support for CT and MRI scans.',
      },
      {
        id: 2,
        date: '2024-09-01',
        title: 'v2.4 Performance Update',
        description: 'Performance improvements and bug fixes. 30% faster processing time.',
      },
      {
        id: 3,
        date: '2024-08-10',
        title: 'v2.3 Feature Addition',
        description: 'Added support for 20+ new diagnostic parameters and improved UI/UX.',
      },
    ],
    2: [
      {
        id: 4,
        date: '2024-10-20',
        title: 'v1.8 HD Video Release',
        description: 'HD video quality and screen sharing feature added.',
      },
      {
        id: 5,
        date: '2024-09-15',
        title: 'v1.7 Mobile Update',
        description: 'Mobile app improvements and new features.',
      },
    ],
  }

  useEffect(() => {
    loadProduct()
  }, [id])

  const loadProduct = async () => {
    setLoading(true)
    try {
      // Production'da Supabase'den çekilecek
      // const data = await db.products.getById(id)
      
      // Mock data kullanımı
      const productData = mockProducts[id]
      const updateData = mockUpdates[id] || []
      
      if (productData) {
        setProduct(productData)
        setUpdates(updateData)
      }
      setLoading(false)
    } catch (error) {
      console.error('Error loading product:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ürün bulunamadı</h2>
          <Link to="/products" className="text-primary-600 hover:text-primary-700">
            Ürünlere geri dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 relative">
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
        title={`${product.name} | Medmentum Sağlık Teknolojileri`}
        description={product.description}
        keywords={`${product.name}, sağlık teknolojisi, medikal yazılım, ${product.features?.join(', ')}`}
        url={`/products/${id}`}
        image={product.image_url}
      />
      {product && (
        <>
          <ProductSchema
            id={product.id}
            name={product.name}
            description={product.description}
            image={product.image_url}
            price={product.price}
          />
          <BreadcrumbSchema items={[
            { name: 'Ana Sayfa', url: '/' },
            { name: 'Ürünler', url: '/products' },
            { name: product.name, url: `/products/${id}` }
          ]} />
        </>
      )}

      {/* Back Button */}
      <div className="container mx-auto px-6 mb-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Ürünlere Geri Dön</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {product.long_description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold shadow-lg shadow-primary-500/30"
                  >
                    Demo Talep Et
                  </motion.button>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors"
                  >
                    İletişime Geç
                  </motion.a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl blur-3xl opacity-30"></div>
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Neden <span className="text-gradient">{product.name}</span>?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.benefits?.map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Özellikler
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {product.features?.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md border border-gray-100"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="font-medium text-gray-700">{feature}</span>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Updates Timeline Section */}
      {updates.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Güncellemeler ve Yenilikler
              </h2>
            </FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
                
                <div className="space-y-8">
                  {updates.map((update, index) => (
                    <motion.div
                      key={update.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-20"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
                        <Calendar className="text-white" size={24} />
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-xl font-bold">{update.title}</h3>
                          <span className="text-sm text-gray-500 mt-1 md:mt-0">
                            {new Date(update.date).toLocaleDateString('tr-TR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <p className="text-gray-600">{update.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {product.name} ile Tanışın
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Daha fazla bilgi almak ve demo talep etmek için bizimle iletişime geçin
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold shadow-lg"
                >
                  Ücretsiz Demo
                </motion.button>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                >
                  Satış Ekibi ile Görüş
                </motion.a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail

