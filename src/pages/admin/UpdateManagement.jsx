import { useState, useEffect } from 'react'
import { Plus, Trash2, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Modal from '../../components/ui/Modal'
import Input from '../../components/ui/Input'
import Textarea from '../../components/ui/Textarea'
import { db } from '../../lib/supabase'

const UpdateManagement = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [updates, setUpdates] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
  })

  // Mock data
  const mockProducts = [
    { id: 1, name: 'AI Diagnostics Platform' },
    { id: 2, name: 'Telemedicine Suite' },
    { id: 3, name: 'Health Records System' },
  ]

  const mockUpdates = {
    1: [
      { id: 1, title: 'v2.5 Release', description: 'New AI models', date: '2024-10-15' },
      { id: 2, title: 'v2.4 Update', description: 'Performance improvements', date: '2024-09-01' },
    ],
    2: [
      { id: 3, title: 'v1.8 Release', description: 'HD video quality', date: '2024-10-20' },
    ],
  }

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    if (selectedProduct) {
      loadUpdates(selectedProduct.id)
    }
  }, [selectedProduct])

  const loadProducts = async () => {
    try {
      // const data = await db.products.getAll()
      // setProducts(data)
      setProducts(mockProducts)
      if (mockProducts.length > 0) {
        setSelectedProduct(mockProducts[0])
      }
    } catch (error) {
      console.error('Error loading products:', error)
    }
  }

  const loadUpdates = async (productId) => {
    try {
      // const data = await db.productUpdates.getByProductId(productId)
      // setUpdates(data)
      setUpdates(mockUpdates[productId] || [])
    } catch (error) {
      console.error('Error loading updates:', error)
      setUpdates([])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const updateData = {
        ...formData,
        product_id: selectedProduct.id,
      }
      // await db.productUpdates.create(updateData)
      console.log('Creating update:', updateData)
      setIsModalOpen(false)
      setFormData({
        title: '',
        description: '',
        date: new Date().toISOString().split('T')[0],
      })
      loadUpdates(selectedProduct.id)
    } catch (error) {
      console.error('Error creating update:', error)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Bu güncellemeyi silmek istediğinizden emin misiniz?')) {
      try {
        // await db.productUpdates.delete(id)
        console.log('Deleting update:', id)
        loadUpdates(selectedProduct.id)
      } catch (error) {
        console.error('Error deleting update:', error)
      }
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
            <h1 className="text-4xl font-bold">Ürün Güncellemeleri</h1>
          </div>
          <Button onClick={() => setIsModalOpen(true)} disabled={!selectedProduct}>
            <Plus className="mr-2" size={20} />
            Yeni Güncelleme
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Product List */}
          <Card className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Ürünler</h2>
            <div className="space-y-2">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`
                    w-full text-left px-4 py-3 rounded-lg transition-colors
                    ${selectedProduct?.id === product.id
                      ? 'bg-primary-500 text-white'
                      : 'hover:bg-gray-100'
                    }
                  `}
                >
                  {product.name}
                </button>
              ))}
            </div>
          </Card>

          {/* Updates List */}
          <div className="lg:col-span-3">
            {selectedProduct ? (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {selectedProduct.name} - Güncellemeler
                </h2>
                {updates.length > 0 ? (
                  <div className="space-y-4">
                    {updates.map((update) => (
                      <Card key={update.id} className="hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                              <h3 className="text-xl font-bold">{update.title}</h3>
                              <span className="text-sm text-gray-500">
                                {new Date(update.date).toLocaleDateString('tr-TR')}
                              </span>
                            </div>
                            <p className="text-gray-600">{update.description}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(update.id)}
                          >
                            <Trash2 size={18} className="text-red-500" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <p className="text-center text-gray-500 py-12">
                      Henüz güncelleme bulunmuyor. Yeni bir güncelleme ekleyin.
                    </p>
                  </Card>
                )}
              </div>
            ) : (
              <Card>
                <p className="text-center text-gray-500 py-12">
                  Lütfen bir ürün seçin
                </p>
              </Card>
            )}
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Yeni Güncelleme Ekle"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Ürün: <strong>{selectedProduct?.name}</strong>
              </p>
            </div>
            <Input
              label="Başlık"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="v1.0 Release"
              required
            />
            <Input
              label="Tarih"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <Textarea
              label="Açıklama"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Güncelleme detayları..."
              required
            />
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                Ekle
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

export default UpdateManagement

