import { motion } from 'framer-motion'
import ProfileCard from '../components/ui/ProfileCard'
import FadeIn from '../components/animations/FadeIn'
import SEO from '../components/SEO'
import { BreadcrumbSchema } from '../components/StructuredData'

const Team = () => {
  const team = [
    {
      name: 'Berkay Bazkurt',
      role: 'Ekip Üyesi',
      image: '/images/berkayvesika.jpeg',
      bio: 'Sağlık teknolojileri alanında vizyoner lider. AI destekli tıbbi çözümler geliştiriyor.',
      linkedin: '#',
      twitter: '#',
      email: 'berkay@medmentum.com',
    },
    {
      name: 'Ece Sabri',
      role: 'Ekip Üyesi',
      image: '/images/products/ecesabrivesika.jpeg',
      bio: 'Yazılım mimarı ve yapay zeka uzmanı. Sağlık teknolojilerinde yenilikçi çözümler üretiyor.',
      linkedin: '#',
      twitter: '#',
      email: 'ece@medmentum.com',
    },
    {
      name: 'Bayram Selim Yılmaz',
      role: 'Ekip Üyesi',
      image: '/images/products/bradpitthairnew111.jpg',
      bio: 'Ürün geliştirme ve inovasyon lideri. Kullanıcı odaklı sağlık çözümleri tasarlıyor.',
      linkedin: '#',
      twitter: '#',
      email: 'bayram@medmentum.com',
    },
  ]

  return (
    <div className="min-h-screen py-12 sm:py-20">
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
      <section className="relative z-10 pt-8 sm:pt-12 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 px-4">
              Ekibimizle <span style={{ color: '#401268', textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white' }}>Tanışın</span>
            </h1>
            <p className="text-center text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Sağlık teknolojilerinin geleceğini şekillendiren ekibimiz
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

    </div>
  )
}

export default Team

