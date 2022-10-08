import create from 'zustand'


const useConsoleDisplay = create((set, get) => ({
    opened: true,
    setConsoleDisplay: (prams) => set({ opened: !get().opened })
}))

export default useConsoleDisplay