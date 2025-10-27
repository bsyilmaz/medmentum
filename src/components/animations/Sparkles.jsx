import { motion } from 'framer-motion'

const Sparkles = ({ children, className = '' }) => {
  const sparkles = Array.from({ length: 3 })

  return (
    <div className={`relative inline-block ${className}`}>
      {children}
      {sparkles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          initial={{ 
            scale: 0, 
            opacity: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
          style={{
            left: '50%',
            top: '50%',
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0L11.5 8.5L20 10L11.5 11.5L10 20L8.5 11.5L0 10L8.5 8.5L10 0Z"
              fill="url(#sparkle-gradient)"
            />
            <defs>
              <linearGradient id="sparkle-gradient" x1="0" y1="0" x2="20" y2="20">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

export default Sparkles

