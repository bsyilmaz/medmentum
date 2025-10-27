import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Send } from 'lucide-react'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import Button from '../components/ui/Button'
import FadeIn from '../components/animations/FadeIn'
import SEO from '../components/SEO'
import { BreadcrumbSchema } from '../components/StructuredData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Maslak, İstanbul, Türkiye',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@medmentum.com',
      link: 'mailto:info@medmentum.com',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 500 123 45 67',
      link: 'tel:+905001234567',
      color: 'from-accent-500 to-accent-600',
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <SEO 
        title="İletişim | Bize Ulaşın - Medmentum"
        description="Medmentum ile iletişime geçin. Sorularınız, önerileriniz veya işbirliği teklifleriniz için bize yazın. İstanbul, Maslak ofisimizden 7/24 destek."
        keywords="medmentum iletişim, sağlık teknolojisi destek, demo talep, işbirliği, istanbul ofis, medmentum adres"
        url="/contact"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200"
      />
      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İletişim', url: '/contact' }
      ]} />

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeIn delay={0.3}>
              <Card>
                <h2 className="text-3xl font-bold mb-6">Mesaj Gönderin</h2>
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                      Mesajınız Gönderildi!
                    </h3>
                    <p className="text-gray-600">
                      En kısa sürede size geri dönüş yapacağız.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="İsim Soyisim"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Adınız ve soyadınız"
                    />
                    <Input
                      label="E-posta"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ornek@email.com"
                    />
                    <Input
                      label="Konu"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Mesajınızın konusu"
                    />
                    <Textarea
                      label="Mesaj"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Mesajınızı buraya yazın..."
                    />
                    <Button type="submit" className="w-full" size="lg">
                      Gönder
                      <Send className="inline ml-2" size={18} />
                    </Button>
                  </form>
                )}
              </Card>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={0.4}>
              <Card className="h-full">
                <h2 className="text-3xl font-bold mb-6">Konumumuz</h2>
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.6687167192887!2d29.010652315456644!3d41.084545979289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5f7e0d79c2f%3A0x68781d6cfb4dbf66!2sMaslak%2C%20Istanbul!5e0!3m2!1sen!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Medmentum Location"
                  ></iframe>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

