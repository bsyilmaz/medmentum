import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Modal from '../../components/ui/Modal'
import Input from '../../components/ui/Input'
import Textarea from '../../components/ui/Textarea'
import { db } from '../../lib/supabase'

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingBlog, setEditingBlog] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image_url: '',
    author: '',
    excerpt: '',
    published: true,
  })

  // Mock data
  const mockBlogs = [
    {
      id: 1,
      title: 'AI in Healthcare',
      excerpt: 'Yapay zeka sağlık sektöründe...',
      author: 'Dr. Ayşe Yılmaz',
      created_at: '2024-10-20',
      published: true,
    },
    {
      id: 2,
      title: 'Telemedicine Best Practices',
      excerpt: 'Telemedicine uygulamalarında...',
      author: 'Dr. Mehmet Demir',
      created_at: '2024-10-18',
      published: true,
    },
  ]

  useEffect(() => {
    loadBlogs()
  }, [])

  const loadBlogs = async () => {
    try {
      // const data = await db.blogs.getAll()
      // setBlogs(data)
      setBlogs(mockBlogs)
    } catch (error) {
      console.error('Error loading blogs:', error)
      setBlogs(mockBlogs)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingBlog) {
        // await db.blogs.update(editingBlog.id, formData)
        console.log('Updating blog:', formData)
      } else {
        // await db.blogs.create(formData)
        console.log('Creating blog:', formData)
      }
      setIsModalOpen(false)
      setEditingBlog(null)
      setFormData({
        title: '',
        content: '',
        image_url: '',
        author: '',
        excerpt: '',
        published: true,
      })
      loadBlogs()
    } catch (error) {
      console.error('Error saving blog:', error)
    }
  }

  const handleEdit = (blog) => {
    setEditingBlog(blog)
    setFormData({
      title: blog.title,
      content: blog.content || '',
      image_url: blog.image_url || '',
      author: blog.author,
      excerpt: blog.excerpt || '',
      published: blog.published,
    })
    setIsModalOpen(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      try {
        // await db.blogs.delete(id)
        console.log('Deleting blog:', id)
        loadBlogs()
      } catch (error) {
        console.error('Error deleting blog:', error)
      }
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/admin/dashboard">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft size={20} className="mr-2" />
                Dashboard'a Dön
              </Button>
            </Link>
            <h1 className="text-4xl font-bold">Blog Yönetimi</h1>
          </div>
          <Button onClick={() => {
            setEditingBlog(null)
            setFormData({
              title: '',
              content: '',
              image_url: '',
              author: '',
              excerpt: '',
              published: true,
            })
            setIsModalOpen(true)
          }}>
            <Plus className="mr-2" size={20} />
            Yeni Blog
          </Button>
        </div>

        <div className="space-y-4">
          {blogs.map((blog) => (
            <Card key={blog.id} className="hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{new Date(blog.created_at).toLocaleDateString('tr-TR')}</span>
                    <span>•</span>
                    <span className={blog.published ? 'text-green-600' : 'text-red-600'}>
                      {blog.published ? 'Yayında' : 'Taslak'}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(blog)}
                  >
                    <Edit size={18} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(blog.id)}
                  >
                    <Trash2 size={18} className="text-red-500" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingBlog ? 'Blog Düzenle' : 'Yeni Blog'}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Başlık"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <Input
              label="Yazar"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
            <Input
              label="Görsel URL"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="https://..."
            />
            <Textarea
              label="Özet"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows={3}
            />
            <Textarea
              label="İçerik (HTML)"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={10}
              required
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="published"
                id="published"
                checked={formData.published}
                onChange={handleChange}
                className="w-4 h-4 text-primary-600 rounded"
              />
              <label htmlFor="published" className="text-sm font-medium">
                Yayınla
              </label>
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                {editingBlog ? 'Güncelle' : 'Oluştur'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                İptal
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  )
}

export default BlogManagement

