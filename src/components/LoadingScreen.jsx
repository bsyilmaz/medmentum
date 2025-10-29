import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    // 0.8 saniye sonra loading tamamlansın
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 800)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999]"
      >
        {/* Full Screen Logo */}
        <motion.img
          src="/images/products/medmentumloginn.png"
          alt="Medmentum"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen

