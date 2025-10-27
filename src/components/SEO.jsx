import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = 'Medmentum - Sağlıkta Teknolojinin Geleceği',
  description = 'Medmentum, sağlık ve teknoloji alanında yenilikçi çözümler sunan bir platformdur. AI destekli teşhis, telemedicine ve hasta odaklı bakım hizmetleri ile sağlık sektörünü dönüştürüyoruz.',
  keywords = 'sağlık teknolojisi, AI, yapay zeka, telemedicine, dijital sağlık, tıbbi yazılım, hasta takip, sağlık platformu, medmentum, elektronik sağlık kayıtları',
  image = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200',
  url = '',
  type = 'website',
  author = 'Medmentum',
  publishedTime,
  modifiedTime,
  article = false,
  noindex = false,
}) => {
  const siteUrl = 'https://medmentum.com'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const fullTitle = title.includes('Medmentum') ? title : `${title} | Medmentum`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Medmentum" />
      <meta property="og:locale" content="tr_TR" />
      {article && <meta property="og:type" content="article" />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {article && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@medmentum" />
      <meta name="twitter:creator" content="@medmentum" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="tr" />
      <meta name="language" content="Turkish" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="TR-34" />
      <meta name="geo.placename" content="Istanbul" />
      <meta name="geo.position" content="41.084545;29.010652" />
    </Helmet>
  )
}

export default SEO

