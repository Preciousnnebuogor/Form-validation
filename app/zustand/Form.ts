import { create } from 'zustand'
type ISteps =  "step1"| "step2"| "step3"

type Store = {
  step: ISteps,
  updateStep: (value: ISteps) => void
}

export const useFormStore = create<Store>()((set) => ({
  step: "step1",
  updateStep: (value) => set((state) => ({ step: value  })),
}))


