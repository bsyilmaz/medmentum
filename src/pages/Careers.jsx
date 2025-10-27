import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, Users, Heart, Trophy, Coffee, Zap, Code2, Activity, Brain, ArrowRight, X, Send } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import FadeIn from '../components/animations/FadeIn'
import HoverCard from '../components/animations/HoverCard'
import MagneticButton from '../components/animations/MagneticButton'
import SEO from '../components/SEO'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: '',
    position: ''
  })

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Yapay Zeka & Makine Öğrenmesi',
      location: 'İstanbul, Türkiye',
      type: 'Full-time',
      salary: '₺80.000 - ₺120.000',
      description: 'Sağlık sektörüne yönelik AI modellerinin geliştirilmesinde öncü olacak, makine öğrenmesi ve derin öğrenme konularında uzman bir mühendis arıyoruz.',
      requirements: [
        '5+ yıl AI/ML deneyimi',
        'Python, TensorFlow, PyTorch bilgisi',
        'Sağlık verileri ile çalışma deneyimi',
        'Derin öğrenme modelleri geliştirme',
        'NLP ve Computer Vision bilgisi'
      ],
      responsibilities: [
        'AI teşhis modellerinin geliştirilmesi',
        'Algoritma optimizasyonu',
        'Veri analizi ve model eğitimi',
        'Araştırma ve geliştirme çalışmaları'
      ],
      icon: Brain,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Yazılım Geliştirme',
      location: 'Remote',
      type: 'Full-time',
      salary: '₺60.000 - ₺90.000',
      description: 'Modern web teknolojileri kullanarak ölçeklenebilir ve performanslı sağlık platformları geliştirmek için ekibimize katılacak yetenekli bir developer arıyoruz.',
      requirements: [
        '3+ yıl full stack geliştirme deneyimi',
        'React, Node.js bilgisi',
        'RESTful API tasarımı',
        'PostgreSQL/MongoDB deneyimi',
        'Git ve Agile metodolojileri'
      ],
      responsibilities: [
        'Frontend ve backend geliştirme',
        'API tasarımı ve implementasyonu',
        'Veritabanı optimizasyonu',
        'Kod incelemeleri ve mentörlük'
      ],
      icon: Code2,
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 3,
      title: 'Healthcare Data Analyst',
      department: 'Veri Bilimi',
      location: 'Ankara, Türkiye',
      type: 'Full-time',
      salary: '₺50.000 - ₺75.000',
      description: 'Sağlık verilerini analiz ederek içgörüler çıkaracak, veri odaklı karar verme süreçlerine katkıda bulunacak bir analist arıyoruz.',
      requirements: [
        '2+ yıl veri analizi deneyimi',
        'SQL, Python (Pandas, NumPy)',
        'İstatistik ve veri görselleştirme',
        'Sağlık sektörü bilgisi',
        'Tableau/Power BI deneyimi'
      ],
      responsibilities: [
        'Sağlık verilerinin analizi',
        'Dashboard ve rapor oluşturma',
        'Veri kalitesi ve doğrulama',
        'İçgörü raporları hazırlama'
      ],
      icon: Activity,
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 4,
      title: 'Product Designer (UI/UX)',
      department: 'Tasarım',
      location: 'İstanbul, Türkiye',
      type: 'Full-time',
      salary: '₺55.000 - ₺85.000',
      description: 'Kullanıcı odaklı, erişilebilir ve güzel sağlık uygulamaları tasarlayacak, UX araştırmaları yapacak bir tasarımcı arıyoruz.',
      requirements: [
        '3+ yıl UI/UX tasarım deneyimi',
        'Figma, Sketch veya Adobe XD',
        'Kullanıcı araştırması deneyimi',
        'Design system oluşturma',
        'Mobil ve web tasarımı'
      ],
      responsibilities: [
        'Kullanıcı araştırması ve testleri',
        'Wireframe ve prototip oluşturma',
        'Design system yönetimi',
        'Geliştiricilerle işbirliği'
      ],
      icon: Heart,
      color: 'from-orange-500 to-pink-500'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Altyapı',
      location: 'Remote',
      type: 'Full-time',
      salary: '₺70.000 - ₺100.000',
      description: 'Güvenli, ölçeklenebilir ve yüksek erişilebilirlikli altyapı sistemleri kuracak ve yönetecek bir DevOps mühendisi arıyoruz.',
      requirements: [
        '4+ yıl DevOps deneyimi',
        'Docker, Kubernetes bilgisi',
        'AWS/Azure/GCP deneyimi',
        'CI/CD pipeline kurulumu',
        'Güvenlik ve compliance bilgisi'
      ],
      responsibilities: [
        'Altyapı otomasyonu',
        'CI/CD pipeline yönetimi',
        'Monitoring ve logging',
        'Güvenlik politikaları uygulanması'
      ],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      title: 'Technical Product Manager',
      department: 'Ürün Yönetimi',
      location: 'İstanbul, Türkiye',
      type: 'Full-time',
      salary: '₺75.000 - ₺110.000',
      description: 'Sağlık teknolojisi ürünlerinin vizyonunu belirleyecek, roadmap oluşturacak ve ekipler arası koordinasyonu sağlayacak bir ürün yöneticisi arıyoruz.',
      requirements: [
        '4+ yıl product management deneyimi',
        'Teknik geçmiş (developer veya engineer)',
        'Agile/Scrum metodolojileri',
        'Sağlık sektörü bilgisi artı',
        'Veri odaklı karar verme'
      ],
      responsibilities: [
        'Ürün vizyonu ve stratejisi',
        'Roadmap ve feature priorizasyonu',
        'Ekipler arası koordinasyon',
        'Müşteri geri bildirimi analizi'
      ],
      icon: Users,
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: 'Sağlık Sigortası',
      description: 'Siz ve aileniz için kapsamlı özel sağlık sigortası',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Coffee,
      title: 'Esnek Çalışma',
      description: 'Hibrit çalışma modeli ve esnek saatler',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Trophy,
      title: 'Kariyer Gelişimi',
      description: 'Eğitim desteği ve konferans katılımı',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Takım Etkinlikleri',
      description: 'Düzenli ofis ve remote ekip aktiviteleri',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Teknoloji Paketi',
      description: 'Yüksek performanslı laptop ve ekipman',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Yenilikçi Projeler',
      description: 'Cutting-edge teknolojiler ile çalışma fırsatı',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const handleApply = (job) => {
    setSelectedJob(job)
    setApplicationForm({ ...applicationForm, position: job.title })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Application:', applicationForm)
    alert('Başvurunuz alınmıştır! En kısa sürede size dönüş yapacağız.')
    setSelectedJob(null)
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      linkedin: '',
      coverLetter: '',
      position: ''
    })
  }

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Kariyer - Medmentum | Sağlık Teknolojisinde Kariyer Fırsatları"
        description="Medmentum'da sağlık teknolojisi alanında kariyer fırsatları. AI, yazılım geliştirme, veri bilimi ve daha fazla alanda açık pozisyonlar."
        keywords="medmentum kariyer, sağlık teknolojisi iş ilanları, AI mühendis, full stack developer, data analyst, product designer"
        url="/careers"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
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
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6"
              >
                <Briefcase size={16} />
                <span>{jobListings.length} Açık Pozisyon</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                Sağlıkta Geleceği{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Birlikte İnşa Edelim
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Medmentum'da yetenekli ve tutkulu insanlarla birlikte çalışın. 
                AI destekli sağlık teknolojileri geliştirerek milyonlarca insanın hayatına dokunun.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <MagneticButton
                  onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-base shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Açık Pozisyonlar
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </span>
                </MagneticButton>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-base font-semibold border-2 rounded-full hover:scale-105 transition-transform"
                  onClick={() => window.location.href = '/contact'}
                >
                  İletişime Geçin
                </Button>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Neden Medmentum?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Çalışanlarımızın mutluluğu ve gelişimi bizim için önceliktir
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <HoverCard>
                  <Card className="h-full p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                      <benefit.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </Card>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="positions" className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <HoverCard>
                  <Card className="h-full p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center`}>
                        <job.icon className="text-white" size={24} />
                      </div>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {job.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {job.department}
                      </div>
                    </div>

                    <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4">
                      {job.salary}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {job.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Aranan Nitelikler:</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => handleApply(job)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-xl py-3 font-semibold flex items-center justify-center gap-2"
                    >
                      Başvur
                      <ArrowRight size={16} />
                    </Button>
                  </Card>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedJob(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`relative bg-gradient-to-r ${selectedJob.color} p-8`}>
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <selectedJob.icon className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{selectedJob.title}</h2>
                  <p className="text-white/90 text-sm mt-1">
                    {selectedJob.department} · {selectedJob.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Pozisyon Hakkında</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedJob.description}</p>
                <div className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                  Maaş Aralığı: {selectedJob.salary}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Aranan Nitelikler</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Sorumluluklar</h3>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Başvuru Formu</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Adınız Soyadınız <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        placeholder="Ad ve soyad"
                        value={applicationForm.name}
                        onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        E-posta <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="ornek@email.com"
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Telefon <span className="text-red-500">*</span>
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
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        LinkedIn Profili
                      </label>
                      <Input
                        type="url"
                        placeholder="linkedin.com/in/kullaniciadi"
                        value={applicationForm.linkedin}
                        onChange={(e) => setApplicationForm({ ...applicationForm, linkedin: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Ön Yazı <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      placeholder="Neden bu pozisyon için uygun olduğunuzu anlatın..."
                      value={applicationForm.coverLetter}
                      onChange={(e) => setApplicationForm({ ...applicationForm, coverLetter: e.target.value })}
                      required
                      rows={5}
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-xl py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Başvuruyu Gönder
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setSelectedJob(null)}
                      className="px-6 py-4 rounded-xl font-semibold"
                    >
                      İptal
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Careers

