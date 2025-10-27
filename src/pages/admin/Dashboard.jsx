import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, Package, Users, LogOut } from 'lucide-react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import FadeIn from '../../components/animations/FadeIn'
import { useAuth } from '../../contexts/AuthContext'

const Dashboard = () => {
  const { signOut, user } = useAuth()

  const stats = [
    { label: 'Toplam Blog', value: '12', icon: FileText, color: 'from-primary-500 to-primary-600' },
    { label: 'Ürünler', value: '6', icon: Package, color: 'from-secondary-500 to-secondary-600' },
    { label: 'Güncellemeler', value: '24', icon: Users, color: 'from-accent-500 to-accent-600' },
  ]

  const quickActions = [
    { title: 'Blog Yönetimi', description: 'Blog yazılarını ekle, düzenle veya sil', link: '/admin/blogs', icon: FileText },
    { title: 'Ürün Güncellemeleri', description: 'Ürün güncellemelerini yönet', link: '/admin/updates', icon: Package },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Hoş geldiniz, {user?.email}</p>
          </div>
          <Button variant="ghost" onClick={signOut}>
            <LogOut className="mr-2" size={20} />
            Çıkış Yap
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-4xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="text-white" size={28} />
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Hızlı Erişim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickActions.map((action, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1}>
                <Link to={action.link}>
                  <Card className="group cursor-pointer hover:shadow-2xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                        <action.icon className="text-primary-600 group-hover:text-white transition-colors" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                          {action.title}
                        </h3>
                        <p className="text-gray-600">{action.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

