import { create } from 'zustand'

// Simülasyon adımlarını yöneten global state
export const useSimulationStore = create((set) => ({
  currentStep: 'idle', // 'idle', 'input', 'anamnesis', 'vitals', 'analysis', 'result'
  setStep: (step) => set({ currentStep: step }),
  
  // Simülasyonu baştan başlat
  resetSimulation: () => set({ currentStep: 'idle' }),
}))

