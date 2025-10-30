import { useInView } from 'react-intersection-observer'
import { useSimulationStore } from '../../hooks/useSimulationStore'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

// Her bir simülasyon adımı için component
export function SimulationStep({ stepName, title, text, description, icon: Icon, color = 'text-teal-400' }) {
  const setStep = useSimulationStore((state) => state.setStep)

  const { ref, inView } = useInView({
    threshold: 0.1,
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      setStep(stepName) // Global state'i güncelle
    }
  }, [inView, stepName, setStep])

  return (
    <div ref={ref} className="h-screen flex items-center justify-start px-8 md:px-12 lg:px-16">
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 space-y-6"
      >
        {/* Icon */}
        {Icon && (
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${color} inline-block`}
          >
            <Icon className="w-16 h-16" strokeWidth={1.5} />
          </motion.div>
        )}

        {/* Başlık */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          {title}
        </motion.h3>

        {/* Ana metin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-2xl md:text-3xl font-mono ${color} bg-[#1a2332] px-6 py-4 rounded-lg border-l-4 border-current`}
        >
          {text}
        </motion.div>

        {/* Açıklama */}
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}

