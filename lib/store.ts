import companyDetails from '@/types/companyDetails'
import companySeries from '@/types/companySeries'
import { create } from 'zustand'

//need to add types
interface State {
    companyRef: Record<string, string>
    companyDetails:companyDetails[]
    companySeries:companySeries[]
    setCompanies: (company : Record <string, string>) => void
    setDetails: (company : companyDetails[]) => void
    setSeries: (company : companySeries[]) => void
}

export const useStore = create<State>()(
    (set) => ({
        companyRef: {},
        companyDetails:[],
        companySeries:[],
        setCompanies: (company) => set(() => ({ companyRef: company })),
        setDetails: (details) => set(() => ({ companyDetails: details })),
        setSeries: (series) => set(() => ({ companySeries: series })),
    }),
)