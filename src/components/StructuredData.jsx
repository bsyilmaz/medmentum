import { Helmet } from 'react-helmet-async'

// Organization Schema
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Medmentum",
    "description": "Sağlık ve teknoloji alanında yenilikçi çözümler sunan platform",
    "url": "https://medmentum.com",
    "logo": "https://medmentum.com/logo.png",
    "image": "https://medmentum.com/og-image.jpg",
    "sameAs": [
      "https://twitter.com/medmentum",
      "https://linkedin.com/company/medmentum",
      "https://github.com/medmentum"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-500-123-4567",
      "contactType": "Customer Service",
      "email": "info@medmentum.com",
      "areaServed": "TR",
      "availableLanguage": "Turkish"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Maslak",
      "addressLocality": "Istanbul",
      "addressRegion": "Istanbul",
      "postalCode": "34398",
      "addressCountry": "TR"
    },
    "founder": {
      "@type": "Person",
      "name": "Dr. Ayşe Yılmaz"
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

// Article Schema for Blog Posts
export const ArticleSchema = ({ article }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt || article.description,
    "image": article.image_url,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Medmentum",
      "logo": {
        "@type": "ImageObject",
        "url": "https://medmentum.com/logo.png"
      }
    },
    "datePublished": article.created_at,
    "dateModified": article.updated_at || article.created_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://medmentum.com/blog/${article.id}`
    },
    "keywords": article.keywords || "sağlık, teknoloji, AI, dijital sağlık",
    "articleSection": "Healthcare Technology"
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

// Product Schema
export const ProductSchema = ({ product, name, description, image, price, id }) => {
  // Support both object and individual props
  const productData = product || { name, description, image_url: image, price, id }
  
  if (!productData || !productData.name) {
    return null // Don't render if no valid product data
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productData.name,
    "description": productData.description,
    "image": productData.image_url || productData.image,
    "brand": {
      "@type": "Brand",
      "name": "Medmentum"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "TRY",
      "url": `https://medmentum.com/products/${productData.id || id || ''}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

// Breadcrumb Schema
export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://medmentum.com${item.url}`
    }))
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

// Website Schema
export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Medmentum",
    "url": "https://medmentum.com",
    "description": "Sağlık teknolojileri platformu",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://medmentum.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Medmentum",
      "logo": {
        "@type": "ImageObject",
        "url": "https://medmentum.com/logo.png"
      }
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default {
  OrganizationSchema,
  ArticleSchema,
  ProductSchema,
  BreadcrumbSchema,
  WebsiteSchema,
}

