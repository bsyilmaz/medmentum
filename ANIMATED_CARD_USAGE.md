# AnimatedCard Kullanım Kılavuzu

## Temel Kullanım

```jsx
import { AnimatedCard } from '../components/animations/AnimatedCard'
import { Brain, Heart, Activity } from 'lucide-react'

// Örnek 1: Lucide ikonları ile
<AnimatedCard
  title="AI Destekli Teşhis"
  description="En gelişmiş AI teknolojileri"
  logos={[
    { icon: Brain, name: 'Brain', size: 'h-12 w-12', className: 'h-6 w-6 text-primary-500' },
    { icon: Heart, name: 'Heart', size: 'h-16 w-16', className: 'h-8 w-8 text-red-500' },
    { icon: Activity, name: 'Activity', size: 'h-12 w-12', className: 'h-6 w-6 text-green-500' },
  ]}
/>

// Örnek 2: Kendi logolarınızı URL ile
<AnimatedCard
  title="Teknoloji Ortaklarımız"
  description="Dünya lideri teknoloji şirketleri"
  logos={[
    { icon: '/logos/company1.png', name: 'Company 1', size: 'h-12 w-12', className: 'h-8 w-8' },
    { icon: '/logos/company2.svg', name: 'Company 2', size: 'h-16 w-16', className: 'h-10 w-10' },
    { icon: '/logos/company3.png', name: 'Company 3', size: 'h-12 w-12', className: 'h-8 w-8' },
  ]}
/>

// Örnek 3: React Icons ile
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiTensorflow } from 'react-icons/si'

<AnimatedCard
  title="Kullandığımız Teknolojiler"
  description="Modern ve güçlü teknoloji stack"
  logos={[
    { icon: FaReact, name: 'React', size: 'h-10 w-10', className: 'h-6 w-6 text-blue-500' },
    { icon: FaNodeJs, name: 'Node.js', size: 'h-14 w-14', className: 'h-8 w-8 text-green-600' },
    { icon: FaPython, name: 'Python', size: 'h-10 w-10', className: 'h-6 w-6 text-yellow-500' },
    { icon: SiTensorflow, name: 'TensorFlow', size: 'h-12 w-12', className: 'h-7 w-7 text-orange-500' },
  ]}
/>
```

## Logo Props

Her logo objesi şu özelliklere sahip olabilir:

- **icon**: React component (lucide icon, react-icons) veya image URL (string)
- **name**: Logo adı (alt text için)
- **size**: Container boyutu (örn: 'h-12 w-12', 'h-16 w-16')
- **className**: Icon/Image için className (boyut ve renk)

## Nereye Ekleyebilirsiniz?

### 1. Hero Section'da
```jsx
<FadeIn delay={0.6}>
  <AnimatedCard {...} />
</FadeIn>
```

### 2. Features Section'ın sonunda
```jsx
<div className="mt-20">
  <AnimatedCard {...} />
</div>
```

### 3. Ayrı bir bölümde
```jsx
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <AnimatedCard {...} />
  </div>
</section>
```

## Özelleştirme

- **Animasyon hızı**: AnimatedCard.jsx içinde `duration: 0.8` değerini değiştirin
- **Logo sayısı**: İstediğiniz kadar logo ekleyebilirsiniz
- **Renk teması**: Her logo için ayrı className ile renk verebilirsiniz

