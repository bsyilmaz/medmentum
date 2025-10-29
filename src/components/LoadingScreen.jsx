import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    // 1.5 saniye sonra loading tamamlansın
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 1500)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gray-900"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/products/medmentumlogin.jpeg"
            alt="Medmentum"
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen

