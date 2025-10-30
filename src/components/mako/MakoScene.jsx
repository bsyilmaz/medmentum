import { motion, AnimatePresence } from 'framer-motion'
import { useSimulationStore } from '../../hooks/useSimulationStore'
import { Activity, MessageSquare, Heart, Brain, AlertTriangle, CheckCircle2 } from 'lucide-react'

// 3D yerine animasyonlu 2D görselleştirme
export function MakoScene() {
  const currentStep = useSimulationStore((state) => state.currentStep)

  // Her adım için görsel konfigürasyonu
  const stepConfig = {
    idle: {
      icon: CheckCircle2,
      color: 'text-gray-400',
      bgColor: 'bg-gray-800',
      label: 'Hazır',
      pulse: false
    },
    input: {
      icon: MessageSquare,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900',
      label: 'Girdi Alınıyor...',
      pulse: true
    },
    anamnesis: {
      icon: Activity,
      color: 'text-purple-400',
      bgColor: 'bg-purple-900',
      label: 'Anamnez Yapılıyor...',
      pulse: true
    },
    vitals: {
      icon: Heart,
      color: 'text-pink-400',
      bgColor: 'bg-pink-900',
      label: 'Vital Veriler Alınıyor...',
      pulse: true
    },
    analysis: {
      icon: Brain,
      color: 'text-teal-400',
      bgColor: 'bg-teal-900',
      label: 'AI Analiz Ediyor...',
      pulse: true
    },
    result: {
      icon: AlertTriangle,
      color: 'text-red-400',
      bgColor: 'bg-red-900',
      label: 'SONUÇ: KRİTİK',
      pulse: true
    }
  }

  const config = stepConfig[currentStep] || stepConfig.idle
  const Icon = config.icon

  return (
    <div className="h-full w-full flex items-center justify-center p-4 sm:p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="relative"
        >
          {/* Ana Kiosk Görseli */}
          <div className="relative w-[200px] h-[320px] sm:w-[280px] sm:h-[460px] md:w-[400px] md:h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl border-2 md:border-4 border-gray-700 overflow-hidden">
            
            {/* Ekran Alanı */}
            <motion.div
              animate={config.pulse ? {
                boxShadow: [
                  `0 0 20px ${config.color.replace('text-', 'rgba(').replace('-400', ', 0.5)')}`,
                  `0 0 40px ${config.color.replace('text-', 'rgba(').replace('-400', ', 0.8)')}`,
                  `0 0 20px ${config.color.replace('text-', 'rgba(').replace('-400', ', 0.5)')}`
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              className={`absolute top-4 sm:top-8 left-3 sm:left-6 right-3 sm:right-6 bottom-16 sm:bottom-24 ${config.bgColor} rounded-2xl border-2 border-gray-600 flex flex-col items-center justify-center p-3 sm:p-6 transition-all duration-500`}
            >
              {/* İkon */}
              <motion.div
                animate={config.pulse ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon className={`w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 ${config.color} mb-2 sm:mb-4`} strokeWidth={1.5} />
              </motion.div>

              {/* Durum Metni */}
              <motion.p
                animate={config.pulse ? {
                  opacity: [0.7, 1, 0.7]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className={`text-sm sm:text-lg md:text-xl font-bold ${config.color} text-center`}
              >
                {config.label}
              </motion.p>

              {/* Veri Akış Animasyonu */}
              {config.pulse && (
                <div className="mt-3 sm:mt-6 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                      className={`w-2 h-2 rounded-full ${config.color.replace('text-', 'bg-')}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Alt Panel (Sensör Alanı) */}
            <motion.div
              animate={currentStep === 'vitals' ? {
                backgroundColor: ['rgba(239, 68, 68, 0.2)', 'rgba(239, 68, 68, 0.5)', 'rgba(239, 68, 68, 0.2)']
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 h-10 sm:h-16 bg-gray-700 rounded-xl border-2 border-gray-600 flex items-center justify-center"
            >
              <div className="flex gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={currentStep === 'vitals' ? {
                      scale: [1, 1.3, 1],
                    } : {}}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15
                    }}
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"
                  />
                ))}
              </div>
            </motion.div>

            {/* Ambient Işık Efektleri */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b ${config.color.replace('text-', 'from-')} to-transparent opacity-20`}
            />
          </div>

          {/* Glow Effect */}
          <motion.div
            animate={config.pulse ? {
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 ${config.bgColor} rounded-3xl blur-3xl -z-10`}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

