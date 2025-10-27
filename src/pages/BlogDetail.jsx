import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react'
import Button from '../components/ui/Button'
import FadeIn from '../components/animations/FadeIn'
import SEO from '../components/SEO'
import { ArticleSchema, BreadcrumbSchema } from '../components/StructuredData'
import { db } from '../lib/supabase'
import Particles from '../components/animations/Particles'

const BlogDetail = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  // Mock data
  const mockBlog = {
    id: 1,
    title: 'AI in Healthcare: The Future is Now',
    content: `
      <p>Yapay zeka (AI), sağlık sektöründe devrim niteliğinde değişiklikler yaratıyor. Teşhisten tedaviye, hasta bakımından ilaç keşfine kadar birçok alanda AI teknolojileri kullanılmaya başlandı.</p>
      
      <h2>Teşhiste Yapay Zeka</h2>
      <p>AI destekli görüntü analizi sistemleri, radyologların görüntüleri değerlendirmesine yardımcı oluyor. Bu sistemler, insan gözünün kaçırabileceği detayları yakalayabiliyor ve erken teşhis oranlarını artırıyor.</p>
      
      <h2>Kişiselleştirilmiş Tedavi</h2>
      <p>Her hasta farklıdır ve AI, bu farklılıkları göz önünde bulundurarak kişiselleştirilmiş tedavi planları oluşturulmasına yardımcı oluyor. Genetik veriler, yaşam tarzı faktörleri ve tıbbi geçmiş göz önünde bulundurularak en uygun tedavi yöntemi belirleniyor.</p>
      
      <h2>İlaç Keşfi ve Geliştirme</h2>
      <p>Geleneksel ilaç geliştirme süreci yıllar alabilir ve milyarlarca dolara mal olabilir. AI, bu süreci hızlandırarak maliyetleri düşürüyor ve daha etkili ilaçların keşfedilmesine olanak sağlıyor.</p>
      
      <h2>Sonuç</h2>
      <p>AI'ın sağlık sektöründeki potansiyeli devasa. Önümüzdeki yıllarda bu teknolojilerin daha da gelişmesi ve yaygınlaşmasıyla birlikte, daha erişilebilir, daha etkili ve daha kişiselleştirilmiş sağlık hizmetleri sunulabilecek.</p>
    `,
    image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200',
    author: 'Dr. Ayşe Yılmaz',
    created_at: '2024-10-20T10:00:00',
    published: true,
  }

  useEffect(() => {
    loadBlog()
  }, [id])

  const loadBlog = async () => {
    try {
      // In production, fetch from Supabase
      // const data = await db.blogs.getById(id)
      // setBlog(data)
      
      // For now, use mock data
      setBlog(mockBlog)
      setLoading(false)
    } catch (error) {
      console.error('Error loading blog:', error)
      setBlog(mockBlog)
      setLoading(false)
    }
  }

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog bulunamadı</h2>
          <Link to="/blog">
            <Button>Bloglara Dön</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <Particles className="absolute inset-0 opacity-20" />
      
      <SEO 
        title={blog.title}
        description={blog.excerpt || blog.content.substring(0, 160)}
        keywords={`${blog.title}, sağlık, teknoloji, AI, dijital sağlık, ${blog.author}`}
        url={`/blog/${blog.id}`}
        image={blog.image_url}
        type="article"
        article={true}
        author={blog.author}
        publishedTime={blog.created_at}
      />
      <ArticleSchema article={blog} />
      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: blog.title, url: `/blog/${blog.id}` }
      ]} />
      
      <article className="container mx-auto px-6 max-w-4xl relative z-10">
        <FadeIn>
          <Link to="/blog">
            <motion.div whileHover={{ x: -5 }}>
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft size={20} className="mr-2 group-hover:translate-x-[-2px] transition-transform" />
                Bloglara Dön
              </Button>
            </motion.div>
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <Calendar size={18} />
                {formatDate(blog.created_at)}
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <User size={18} />
                {blog.author}
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <Clock size={18} />
                {getReadTime(blog.content)} dakika okuma
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <BookOpen size={18} />
                {getReadTime(blog.content) * 250} kelime
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {blog.title}
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.div 
            className="relative h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={blog.image_url}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <motion.div
              className="absolute bottom-6 left-6 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 transition-all">
                <Share2 size={18} />
                Paylaş
              </button>
            </motion.div>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <motion.div 
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary-600 dark:prose-h2:text-primary-400
              prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
              prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-strong:font-semibold
              prose-ul:my-6 prose-li:my-2 prose-li:text-gray-700 dark:prose-li:text-gray-300
              prose-code:text-primary-600 dark:prose-code:text-primary-400
              bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700
            "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </FadeIn>

        <FadeIn delay={0.4}>
          <motion.div 
            className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border-2"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Yazar</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{blog.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">İçerik Yazarı</p>
                  </div>
                </div>
              </div>
              <Link to="/blog">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 hover:opacity-90 transition-opacity">
                    Tüm Bloglar
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </FadeIn>
      </article>
    </div>
  )
}

export default BlogDetail

