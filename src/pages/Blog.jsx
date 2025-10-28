import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Clock, ArrowRight, Search, Filter } from 'lucide-react'
import FadeIn from '../components/animations/FadeIn'
import SEO from '../components/SEO'
import { BreadcrumbSchema } from '../components/StructuredData'
import { db } from '../lib/supabase'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const navigate = useNavigate()

  // Mock data for demonstration
  const mockBlogs = [
    {
      id: 1,
      title: 'AI in Healthcare: The Future is Now',
      content: 'Artificial intelligence is revolutionizing the healthcare industry...',
      image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      author: 'Dr. Ayşe Yılmaz',
      created_at: '2024-10-20T10:00:00',
      published: true,
      excerpt: 'Yapay zeka sağlık sektöründe nasıl devrim yaratıyor? Son gelişmelere ve geleceğe bir bakış.',
      category: 'AI & Technology',
      featured: true,
      views: 1520,
    },
    {
      id: 2,
      title: 'Telemedicine Best Practices',
      content: 'Learn the best practices for implementing telemedicine...',
      image_url: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800',
      author: 'Dr. Mehmet Demir',
      created_at: '2024-10-18T14:30:00',
      published: true,
      excerpt: 'Telemedicine uygulamalarında başarılı olmak için bilmeniz gerekenler.',
      category: 'Telemedicine',
      featured: false,
      views: 890,
    },
    {
      id: 3,
      title: 'Patient Data Security in 2024',
      content: 'Understanding the importance of patient data security...',
      image_url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      author: 'Zeynep Kaya',
      created_at: '2024-10-15T09:00:00',
      published: true,
      excerpt: 'Hasta verilerinin güvenliği: 2024\'te bilmeniz gereken en önemli konular.',
      category: 'Security',
      featured: false,
      views: 650,
    },
    {
      id: 4,
      title: 'Digital Health Transformation',
      content: 'How digital transformation is changing healthcare delivery...',
      image_url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      author: 'Dr. Can Özdemir',
      created_at: '2024-10-12T16:45:00',
      published: true,
      excerpt: 'Dijital dönüşüm sağlık hizmet sunumunu nasıl değiştiriyor?',
      category: 'Digital Health',
      featured: false,
      views: 920,
    },
    {
      id: 5,
      title: 'Healthcare Analytics & Big Data',
      content: 'Leveraging big data for better healthcare outcomes...',
      image_url: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800',
      author: 'Prof. Dr. Elif Yıldız',
      created_at: '2024-10-10T11:20:00',
      published: true,
      excerpt: 'Büyük veri ve analitik ile sağlık hizmetlerinde daha iyi sonuçlar.',
      category: 'Analytics',
      featured: false,
      views: 740,
    },
    {
      id: 6,
      title: 'IoT in Medical Devices',
      content: 'The role of IoT in modern medical devices...',
      image_url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800',
      author: 'Mühendis Ali Yılmaz',
      created_at: '2024-10-08T13:00:00',
      published: true,
      excerpt: 'IoT teknolojisinin tıbbi cihazlardaki rolü ve geleceği.',
      category: 'IoT',
      featured: false,
      views: 580,
    },
  ]

  const categories = ['all', 'AI & Technology', 'Telemedicine', 'Security', 'Digital Health', 'Analytics', 'IoT']

  useEffect(() => {
    loadBlogs()
  }, [])

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  const loadBlogs = async () => {
    try {
      // In production, fetch from Supabase
      // const data = await db.blogs.getAll()
      // setBlogs(data)
      
      // For now, use mock data
      setBlogs(mockBlogs)
      setLoading(false)
    } catch (error) {
      console.error('Error loading blogs:', error)
      setBlogs(mockBlogs)
      setLoading(false)
    }
  }

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = 
        blog.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        blog.author.toLowerCase().includes(debouncedSearch.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [blogs, debouncedSearch, selectedCategory])

  const filteredBlogsList = filteredBlogs

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getReadTime = (content) => {
    const wordsPerMinute = 200
    const words = content.split(' ').length
    return Math.ceil(words / wordsPerMinute)
  }

  const categoryColors = {
    'AI & Technology': 'from-blue-500 to-cyan-500',
    'Telemedicine': 'from-purple-500 to-pink-500',
    'Security': 'from-red-500 to-orange-500',
    'Digital Health': 'from-green-500 to-emerald-500',
    'Analytics': 'from-indigo-500 to-purple-500',
    'IoT': 'from-yellow-500 to-amber-500',
  }

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      
      <SEO 
        title="Blog ve Haberler | Sağlık Teknolojileri, AI ve Dijital Sağlık"
        description="Sağlık teknolojileri, yapay zeka, telemedicine ve dijital sağlık hakkında en güncel blog yazıları ve haberler. Uzman doktorlarımızdan sağlık teknolojileri hakkında bilgiler."
        keywords="sağlık blogu, tıp teknolojisi, AI sağlık, dijital sağlık haberleri, telemedicine blog, sağlık yazıları"
        url="/blog"
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200"
      />
      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Blog', url: '/blog' }
      ]} />


      {/* Search and Filter Section */}
      <section className="relative z-10 py-6">
        <div className="container mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-5"
          >
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Blog ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary-500 focus:outline-none transition-all shadow-lg"
              />
            </div>

          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
            </div>
          ) : (
            <>
              {/* Blogs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogsList.length > 0 ? (
                  filteredBlogsList.map((blog, index) => (
                    <FadeIn key={blog.id} delay={index * 0.05}>
                      <motion.div
                        className="group relative h-full cursor-pointer"
                        onClick={() => navigate(`/blog/${blog.id}`)}
                      >
                        <div className="relative h-full rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                          {/* Image */}
                          <div className="relative h-56 overflow-hidden">
                            <img
                              src={blog.image_url}
                              alt={blog.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          </div>

                          {/* Content */}
                          <div className="p-6 space-y-3">
                            <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors line-clamp-2">
                              {blog.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 line-clamp-2 text-sm">
                              {blog.excerpt}
                            </p>

                            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <User size={14} />
                                {blog.author}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock size={14} />
                                {getReadTime(blog.content)} dk
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {formatDate(blog.created_at)}
                              </div>
                              <div className="p-1.5 rounded-full bg-primary-500/10 text-primary-500 transition-all">
                                <ArrowRight size={16} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </FadeIn>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20">
                    <Filter className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400">
                      Sonuç bulunamadı
                    </h3>
                    <p className="text-gray-500 dark:text-gray-500">
                      Farklı bir arama terimi veya kategori deneyin
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blog

