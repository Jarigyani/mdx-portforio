import { create } from 'zustand'

type Store = {
  copy: boolean
  changeCopy: () => void

  darkMode: boolean
  changeDarkMode: () => void

  dnsName: string
  setDnsName: (text: string) => void

  change: number
  setChange: () => void
}

export const useStore = create<Store>((set) => ({
  copy: false,
  changeCopy: () => {
    set((state) => {
      return { copy: !state.copy }
    })
  },

  darkMode: true,
  changeDarkMode: () => {
    set((state) => {
      return { darkMode: !state.darkMode }
    })
  },

  dnsName: '',
  setDnsName: (text: string) => {
    set(() => ({
      dnsName: text,
    }))
  },

  change: 0,
  setChange: () => {
    set((state) => ({
      change: state.change + 1,
    }))
  },
}))
