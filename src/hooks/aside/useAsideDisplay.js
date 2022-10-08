import create from 'zustand'


const useAsideDisplay = create((set, get) => ({
    asideLeft: {
        opened: true
    },
    asideRight: {
        opened: true
    },
    setAsideDisplay: (fn) => set(fn(get()))
}))

export default useAsideDisplay