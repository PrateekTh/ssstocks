import { create } from 'zustand'

interface State {
  num: number
  companies: Record<string, string>
  companyDetails:[]
  setCompanies: (company : Record <string, string>) => void
  increase: (by: number) => void
  decrease: (by: number) => void
}

export const useStore = create<State>()(
    (set) => ({
        num: 0,
        companies: {},
        companyDetails:[],
        setCompanies: (company) => set((state) => ({ companies: company })),
        increase: (by) => set((state) => ({ num: state.num + by })),
        decrease: () => set({ num: 0 }),
    }),
)