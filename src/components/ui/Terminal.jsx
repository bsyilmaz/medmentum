import {
  Children,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "../../lib/utils"

const SequenceContext = createContext(null)
const useSequence = () => useContext(SequenceContext)

const ItemIndexContext = createContext(null)
const useItemIndex = () => useContext(ItemIndexContext)

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  startOnView = false,
  ...props
}) => {
  const elementRef = useRef(null)
  const isInView = useInView(elementRef, {
    amount: 0.3,
    once: true,
  })

  const sequence = useSequence()
  const itemIndex = useItemIndex()
  const [hasStarted, setHasStarted] = useState(false)
  
  useEffect(() => {
    if (!sequence || itemIndex === null) return
    if (!sequence.sequenceStarted) return
    if (hasStarted) return
    if (sequence.activeIndex === itemIndex) {
      setHasStarted(true)
    }
  }, [sequence?.activeIndex, sequence?.sequenceStarted, hasStarted, itemIndex])

  const shouldAnimate = sequence ? hasStarted : startOnView ? isInView : true

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: -5 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
      transition={{ duration: 0.3, delay: sequence ? 0 : delay / 1000 }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
      onAnimationComplete={() => {
        if (!sequence) return
        if (itemIndex === null) return
        sequence.completeItem(itemIndex)
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  startOnView = true,
  ...props
}) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string.")
  }

  const MotionComponent = motion[Component] || motion.span

  const [displayedText, setDisplayedText] = useState("")
  const [started, setStarted] = useState(false)
  const elementRef = useRef(null)
  const isInView = useInView(elementRef, {
    amount: 0.3,
    once: true,
  })

  const sequence = useSequence()
  const itemIndex = useItemIndex()

  useEffect(() => {
    if (sequence && itemIndex !== null) {
      if (!sequence.sequenceStarted) return
      if (started) return
      if (sequence.activeIndex === itemIndex) {
        setStarted(true)
      }
      return
    }

    if (!startOnView) {
      const startTimeout = setTimeout(() => setStarted(true), delay)
      return () => clearTimeout(startTimeout)
    }

    if (!isInView) return

    const startTimeout = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimeout)
  }, [
    delay,
    startOnView,
    isInView,
    started,
    sequence?.activeIndex,
    sequence?.sequenceStarted,
    itemIndex,
  ])

  useEffect(() => {
    if (!started) return

    let i = 0
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
        if (sequence && itemIndex !== null) {
          sequence.completeItem(itemIndex)
        }
      }
    }, duration)

    return () => {
      clearInterval(typingEffect)
    }
  }, [children, duration, started])

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  )
}

export const Terminal = ({
  children,
  className,
  sequence = true,
  startOnView = true,
}) => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, {
    amount: 0.3,
    once: true,
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const sequenceHasStarted = sequence ? !startOnView || isInView : false

  const contextValue = useMemo(() => {
    if (!sequence) return null
    return {
      completeItem: (index) => {
        setActiveIndex((current) => (index === current ? current + 1 : current))
      },
      activeIndex,
      sequenceStarted: sequenceHasStarted,
    }
  }, [sequence, activeIndex, sequenceHasStarted])

  const wrappedChildren = useMemo(() => {
    if (!sequence) return children
    const array = Children.toArray(children)
    return array.map((child, index) => (
      <ItemIndexContext.Provider key={index} value={index}>
        {child}
      </ItemIndexContext.Provider>
    ))
  }, [children, sequence])

  const content = (
    <div
      ref={containerRef}
      className={cn(
        "z-0 h-full max-h-[500px] w-full max-w-2xl rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-900",
        className
      )}
    >
      <div className="flex flex-row gap-x-2 border-b border-gray-700 p-4">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="p-6 overflow-auto max-h-[440px]">
        <code className="grid gap-y-2 text-green-400 font-mono text-sm">{wrappedChildren}</code>
      </pre>
    </div>
  )

  if (!sequence) return content

  return (
    <SequenceContext.Provider value={contextValue}>
      {content}
    </SequenceContext.Provider>
  )
}
