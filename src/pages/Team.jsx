import { motion } from 'framer-motion'
import ProfileCard from '../components/ui/ProfileCard'
import FadeIn from '../components/animations/FadeIn'
import SEO from '../components/SEO'
import { BreadcrumbSchema } from '../components/StructuredData'

const Team = () => {
  const team = [
    {
      name: 'Dr. Ayşe Yılmaz',
      role: 'CEO & Kurucu',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      bio: 'Tıp doktoru ve teknoloji girişimcisi. 15 yıllık sağlık sektörü deneyimi.',
      linkedin: '#',
      twitter: '#',
      email: 'ayse@medmentum.com',
    },
    {
      name: 'Mehmet Demir',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Yazılım mimarı ve AI uzmanı. Önceden Google ve Microsoft\'ta çalıştı.',
      linkedin: '#',
      twitter: '#',
      email: 'mehmet@medmentum.com',
    },
    {
      name: 'Zeynep Kaya',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      bio: 'Uzman doktor ve klinik araştırmacı. Dijital sağlık alanında öncü.',
      linkedin: '#',
      twitter: '#',
      email: 'zeynep@medmentum.com',
    },
    {
      name: 'Can Özdemir',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      bio: 'Ürün yönetimi ve UX tasarımında 10 yıllık deneyim.',
      linkedin: '#',
      twitter: '#',
      email: 'can@medmentum.com',
    },
    {
      name: 'Elif Yıldız',
      role: 'Head of Data Science',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      bio: 'Veri bilimci ve makine öğrenmesi uzmanı. PhD in Computer Science.',
      linkedin: '#',
      twitter: '#',
      email: 'elif@medmentum.com',
    },
    {
      name: 'Ali Yılmaz',
      role: 'Lead Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: 'Full-stack developer ve sistem mimarı. Open source katkıcısı.',
      linkedin: '#',
      twitter: '#',
      email: 'ali@medmentum.com',
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <SEO 
        title="Ekibimiz | Uzman Doktorlar ve Teknoloji Liderleri"
        description="Medmentum ekibi; deneyimli doktorlar, yazılım mimarları ve sağlık teknolojisi uzmanlarından oluşuyor. Sağlık ve teknoloji alanında 15+ yıl deneyim."
        keywords="medmentum ekibi, sağlık teknolojisi uzmanları, AI uzmanları, tıp doktorları, yazılım mimarları, sağlık girişimi ekibi"
        url="/team"
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200"
      />
      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Ekip', url: '/team' }
      ]} />

      {/* Page Header */}
      <section className="pt-12 pb-8">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Ekibimizle <span className="text-gradient">Tanışın</span>
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Sağlık teknolojilerinin geleceğini şekillendiren ekibimiz
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <ProfileCard 
                key={index} 
                member={member} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ekibimize <span className="text-gradient">Katılın</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Sağlık teknolojilerinde devrim yaratmak için aramıza katılın. 
                Açık pozisyonlarımızı görüntüleyin.
              </p>
              <motion.a
                href="mailto:kariyer@medmentum.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-primary-500/30"
              >
                Başvuru Yapın
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default Team

