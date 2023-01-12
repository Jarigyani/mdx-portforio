import { create } from 'zustand'

type Store = {
  copy: boolean
  changeCopy: () => void

  darkMode: boolean
  changeDarkMode: () => void
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
}))
