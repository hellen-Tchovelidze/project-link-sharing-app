import { create } from 'zustand'
import { LinkStore, ProfileState } from '../Types/types'

export const UseProfileStore = create<ProfileState>((set) => ({
  firstName: '',
  lastName: '',
  email: '',
  photo: null,
  setField: (field, value) => set({ [field]: value }),
  setPhoto: (base64) => set({ photo: base64 }),
}))


export const UseLinkStore = create<LinkStore>((set) => ({
  linksArr: [
    { id: 1, platform: "GitHub", link: "", error: false },
  ],
  showLinks: [],
  addLink: (newLink) =>
    set((state) => ({ linksArr: [...state.linksArr, newLink] })),
  updateLink: (updatedLink) =>
    set((state) => ({
      linksArr: state.linksArr.map((link) =>
        link.id === updatedLink.id ? updatedLink : link
      ),
    })),
  deleteLink: (id) =>
    set((state) => ({
      linksArr: state.linksArr.filter((link) => link.id !== id),
    })),
  setShowLinks: (links) => set({ showLinks: links }),
  setLinksArr: (links) => set({ linksArr: links }),
}));