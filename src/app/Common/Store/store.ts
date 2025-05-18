import { create } from 'zustand'

interface ProfileState {
  firstName: string
  lastName: string
  email: string
  photo: string | null
  setField: (field: string, value: string) => void
  setPhoto: (base64: string | null) => void
}

export const useProfileStore = create<ProfileState>((set) => ({
  firstName: '',
  lastName: '',
  email: '',
  photo: null,
  setField: (field, value) => set({ [field]: value }),
  setPhoto: (base64) => set({ photo: base64 }),
}))
