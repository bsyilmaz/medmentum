import { Brain, Code2, Activity, Heart, Zap, Users } from 'lucide-react'

export const jobListings = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    department: 'Yapay Zeka & Makine Öğrenmesi',
    location: 'İstanbul, Türkiye',
    type: 'Full-time',
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

