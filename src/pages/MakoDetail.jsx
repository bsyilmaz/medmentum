import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  MessageSquare, 
  Activity, 
  Heart, 
  Brain, 
  AlertTriangle,
  Shield,
  Zap,
  Clock,
  CheckCircle2,
  Database,
  Users,
  TrendingUp,
  Award,
  Lock,
  Server
} from 'lucide-react'
import SEO from '../components/SEO'
import { MakoScene } from '../components/mako/MakoScene'
import { SimulationStep } from '../components/mako/SimulationStep'
import { useSimulationStore } from '../hooks/useSimulationStore'
import { useEffect } from 'react'

const MakoDetail = () => {
  const resetSimulation = useSimulationStore((state) => state.resetSimulation)

  // Sayfa yüklendiğinde simülasyonu sıfırla
  useEffect(() => {
    resetSimulation()
  }, [resetSimulation])

  return (
    <div className="min-h-screen bg-[#101828]">
      <SEO 
        title="Mako - The Triage Flow | AI-Powered Autonomous Triage"
        description="Yapay zeka destekli otonom triyaj sistemi. Kaotik acil servis süreçlerini saniyeler içinde optimize eden devrim niteliğinde çözüm."
        keywords="mako, triage, AI triage, emergency, acil servis, triyaj, yapay zeka"
        url="/products/mako"
        image="/images/products/makofull.png"
      />

      {/* SAHNE 1: HERO - Kaosun Ortası */}
      <Scene1Hero />

      {/* SAHNE 2: REVEAL - Mako ile Tanışma */}
      <Scene2Reveal />

      {/* SAHNE 3: SIMULATION - İnteraktif Deneyim */}
      <Scene3Simulation />

      {/* SAHNE 4: FEATURES - Sadece Hız Değil */}
      <Scene4Features />

      {/* SAHNE 5: TRUST - Güven ve Teknik Detay */}
      <Scene5Trust />

      {/* SAHNE 6: CTA - Geleceği Başlatın */}
      <Scene6CTA />
    </div>
  )
}

// ========================================
// SAHNE 1: HERO - Kaosun Ortası
// ========================================
function Scene1Hero() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  
  return (
    <motion.section 
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Arka Plan (Kaos) - Gerçek proje için video eklenebilir */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900">
        {/* Animated chaos effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070')] bg-cover bg-center opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101828]/50 to-[#101828]" />
      </div>

      {/* Geri Dön Butonu */}
      <Link 
        to="/products"
        className="absolute top-24 left-8 z-20 inline-flex items-center gap-2 text-white/80 hover:text-white group transition-all"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
        <span className="text-sm font-semibold">Tüm Ürünlere Dön</span>
      </Link>

      {/* Metin Blokları */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8"
        >
          Acil Serviste...
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.0 }}
          className="text-4xl md:text-6xl font-bold text-gray-300 mb-8"
        >
          ...herkes eşit değildir.
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1.0 }}
          className="text-5xl md:text-7xl font-bold text-[#E53E3E] mb-12"
        >
          Ve öncelik, hayat demektir.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 1.0 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#319795] flex flex-col items-center gap-2"
          >
            <span className="text-lg font-semibold">Kaosu Nasıl Çözdüğümüzü Görün</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

// ========================================
// SAHNE 2: REVEAL - Mako ile Tanışma
// ========================================
function Scene2Reveal() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#101828] py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Sol: Metin */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-6xl md:text-8xl font-bold text-white"
            >
              Mako.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-[#319795]"
            >
              Yapay Zeka Destekli Otonom Triyaj.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              Geleneksel triyajın dakikalar süren belirsizliğini, Mako'nun saniyeler süren objektif veri analizine bırakın.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1a2332] rounded-lg border border-gray-700">
                <Clock className="w-5 h-5 text-[#319795]" />
                <span className="text-sm font-semibold text-white">45 Saniye</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1a2332] rounded-lg border border-gray-700">
                <Brain className="w-5 h-5 text-[#319795]" />
                <span className="text-sm font-semibold text-white">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1a2332] rounded-lg border border-gray-700">
                <Shield className="w-5 h-5 text-[#319795]" />
                <span className="text-sm font-semibold text-white">KVKK Uyumlu</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Sağ: Görsel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/images/products/makofull.png"
              alt="Mako Kiosk"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#319795] rounded-2xl blur-3xl opacity-20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========================================
// SAHNE 3: SIMULATION - İnteraktif Deneyim (ÖDÜLLü KISIM)
// ========================================
function Scene3Simulation() {
  return (
    <section className="relative h-[600vh] bg-[#101828]">
      {/* SOL BÖLÜM: YAPIŞKAN 3D SAHNE */}
      <div className="sticky top-0 h-screen w-full md:w-1/2 float-left">
        <MakoScene />
      </div>

      {/* SAĞ BÖLÜM: KAYAN ADIMLAR */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full">
        {/* Başlık */}
        <div className="h-screen flex items-center justify-start px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 space-y-4"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Triyaj Akışı Simülasyonu
            </h2>
            <p className="text-xl text-gray-400">
              Bir hastanın Mako ile nasıl 45 saniyede triyaj edildiğini görün.
            </p>
          </motion.div>
        </div>

        {/* Adım 1: Hasta Girdisi */}
        <SimulationStep
          stepName="input"
          icon={MessageSquare}
          color="text-blue-400"
          title="Adım 1: Hasta Girdisi"
          text="'Şiddetli göğüs ağrısı ve nefes darlığı...'"
          description="Hasta kioskta semptomlarını girer. Dokunmatik ekran veya sesli komutla iletişim kurar."
        />

        {/* Adım 2: Akıllı Anamnez */}
        <SimulationStep
          stepName="anamnesis"
          icon={Activity}
          color="text-purple-400"
          title="Adım 2: Akıllı Anamnez"
          text="'Ağrı sol kola vuruyor mu? → Evet'"
          description="Yapay zeka, semptoma özel akıllı sorular sorar. Her cevap, algoritmanın hassasiyetini artırır."
        />

        {/* Adım 3: Vital Veri */}
        <SimulationStep
          stepName="vitals"
          icon={Heart}
          color="text-pink-400"
          title="Adım 3: Vital Veri Toplama"
          text="SPO2: %91 | Nabız: 115 (Aritmik)"
          description="Entegre sensörler vital verileri otomatik olarak alır. İnsan hatasına yer yoktur."
        />

        {/* Adım 4: AI Analizi */}
        <SimulationStep
          stepName="analysis"
          icon={Brain}
          color="text-teal-400"
          title="Adım 4: AI Analizi"
          text="Neural Network Çalışıyor..."
          description="Tüm veri (semptomlar, anamnez, vitaller) anında yapay zeka modelinden geçer ve E.S.I. seviyesi hesaplanır."
        />

        {/* Adım 5: Sonuç */}
        <SimulationStep
          stepName="result"
          icon={AlertTriangle}
          color="text-red-400"
          title="Adım 5: SONUÇ"
          text="E.S.I. SEVİYE 1 - KRİTİK"
          description="Akut Miyokard Enfarktüsü Şüphesi. KIRMIZI ALAN. Personel anında bilgilendirildi."
        />

        {/* Çıktı: Değer Önerisi */}
        <div className="h-screen flex items-center justify-start px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 space-y-8"
          >
            <div className="text-center space-y-6 bg-gradient-to-br from-[#1a2332] to-[#101828] p-12 rounded-3xl border-2 border-[#319795] shadow-2xl">
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl font-bold text-[#319795]"
              >
                45 Saniye
              </motion.p>
              <p className="text-2xl text-white font-semibold">Bu sürecin tamamı</p>
              
              <div className="h-px bg-gray-700 my-6" />
              
              <p className="text-4xl text-gray-400">vs</p>
              
              <div className="h-px bg-gray-700 my-6" />
              
              <p className="text-6xl font-bold text-gray-500 line-through">5-7 Dakika</p>
              <p className="text-2xl text-gray-500">Geleneksel hemşire triyajı</p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-8"
              >
                <p className="text-3xl font-bold text-[#E53E3E]">
                  Kazanılan: 6 Dakika
                </p>
                <p className="text-lg text-gray-400 mt-2">
                  Kalp krizinde bu, hayat demektir.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========================================
// SAHNE 4: FEATURES - Sadece Hız Değil
// ========================================
function Scene4Features() {
  const features = [
    {
      icon: CheckCircle2,
      title: 'Objektif Skorlama (E.S.I.)',
      description: '7/24 tutarlı, insan hatasından ve yorgunluktan bağımsız Emergency Severity Index skorlaması.',
      color: 'text-green-400',
      bgColor: 'bg-green-900/20'
    },
    {
      icon: Database,
      title: 'HBYS Entegrasyonu',
      description: 'API-first yaklaşımı. Tüm veriler anında HBYS, PACS ve E-Nabız sisteminizle konuşur. Çift işleme son.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20'
    },
    {
      icon: Users,
      title: 'Personel Optimizasyonu',
      description: 'Hemşirelerinizin odağını "veri girmekten", "hayat kurtarmaya" çevirin. Mako ön büroyu yönetir.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-[#101828] to-[#1a2332] py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sadece Hız Değil
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mako, hızın ötesinde tutarlılık, entegrasyon ve ekip verimliliği sunar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`${feature.bgColor} backdrop-blur-sm border border-gray-700 rounded-2xl p-8 space-y-4`}
            >
              <div className={`${feature.color} inline-block p-4 bg-[#101828] rounded-xl`}>
                <feature.icon className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SAHNE 5: TRUST - Güven ve Teknik Detay
// ========================================
function Scene5Trust() {
  const trustBadges = [
    { icon: Shield, label: 'KVKK UYUMLU' },
    { icon: Lock, label: 'HIPAA STANDARTLARI' },
    { icon: Server, label: 'ISO 27001' },
    { icon: Award, label: 'CE SERTİFİKALI' }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-[#101828] py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          
          {/* Sol: Güven */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-bold text-white">
              Güvende ve Uyumlu
            </h2>

            {/* Testimonial */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#1a2332] to-[#101828] p-8 rounded-2xl border-l-4 border-[#319795] shadow-xl"
            >
              <p className="text-xl text-gray-300 italic mb-4">
                "Mako'yu acil servisimize entegre ettikten sonra, hasta bekleme süremiz %60 azaldı ve hemşirelerimiz artık gerçekten önemli işlere odaklanabiliyor."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#319795] rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white">Dr. Ayşe Yılmaz</p>
                  <p className="text-sm text-gray-400">Acil Servis Şefi, Ankara Şehir Hastanesi</p>
                </div>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-3 bg-[#1a2332] px-4 py-3 rounded-lg border border-gray-700"
                >
                  <badge.icon className="w-6 h-6 text-[#319795]" />
                  <span className="text-sm font-bold text-white">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sağ: Teknik Mimari */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Basit Entegrasyon</h3>
            
            {/* Architecture Diagram */}
            <div className="bg-[#1a2332] p-8 rounded-2xl border border-gray-700 space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#319795] text-white px-6 py-4 rounded-lg text-center font-bold text-lg"
              >
                MAKO KIOSK
              </motion.div>

              <div className="flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-8 h-8 text-[#E53E3E]" />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-900/30 text-blue-400 px-6 py-4 rounded-lg text-center font-bold border border-blue-700"
              >
                REST API / HL7 FHIR
              </motion.div>

              <div className="flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Zap className="w-8 h-8 text-[#E53E3E]" />
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-purple-900/30 text-purple-400 px-4 py-3 rounded-lg text-center text-sm font-bold border border-purple-700"
                >
                  HBYS
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-purple-900/30 text-purple-400 px-4 py-3 rounded-lg text-center text-sm font-bold border border-purple-700"
                >
                  E-NABIZ
                </motion.div>
              </div>

              <p className="text-sm text-gray-400 text-center pt-4">
                Plug & Play entegrasyon. Kurulum süresi: 2 gün.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========================================
// SAHNE 6: CTA - Geleceği Başlatın
// ========================================
function Scene6CTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#319795] via-[#1a2332] to-[#101828] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-[#319795] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#E53E3E] rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block"
          >
            <TrendingUp className="w-20 h-20 text-white" strokeWidth={1.5} />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Triyajınızı şansa bırakmayın.
          </h2>

          <p className="text-2xl text-white/90 leading-relaxed">
            Mako'nun hastanenizdeki iş akışını nasıl dönüştüreceğini 
            <span className="font-bold text-[#E53E3E]"> 15 dakikalık</span> kişiselleştirilmiş bir demo ile görün.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pt-8"
          >
            <Link
              to="/contact"
              className="inline-block px-12 py-6 bg-white text-[#101828] text-xl font-bold rounded-full shadow-2xl hover:shadow-[0_0_50px_rgba(49,151,149,0.5)] transition-all duration-300"
            >
              Canlı Demo Planlayın →
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/70 text-sm pt-8"
          >
            Kurulum 2 gün | KVKK Uyumlu | 7/24 Destek
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default MakoDetail
