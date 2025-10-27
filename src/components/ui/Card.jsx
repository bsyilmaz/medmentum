import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '',
  hover = true,
  glass = false,
  ...props 
}) => {
  const baseClasses = glass 
    ? 'glass-effect'
    : 'bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700'

  return (
    <motion.div
      className={`
        rounded-2xl p-6
        ${baseClasses}
        ${className}
      `}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card

