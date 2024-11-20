import companyDetails from '@/types/companyDetails'
import { create } from 'zustand'

//need to add types
interface State {
    companyRef: Record<string, string>
    companyDetails:companyDetails[]
    companySeries:any[]
    setCompanies: (company : Record <string, string>) => void
    setDetails: (company : companyDetails[]) => void
    setSeries: (company : any[]) => void
}

export const useStore = create<State>()(
    (set) => ({
        companyRef: {},
        companyDetails:[],
        companySeries:[],
        setCompanies: (company) => set((state) => ({ companyRef: company })),
        setDetails: (details) => set((state) => ({ companyDetails: details })),
        setSeries: (series) => set((state) => ({ companySeries: series })),
    }),
)