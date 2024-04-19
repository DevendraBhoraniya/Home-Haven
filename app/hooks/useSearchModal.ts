import { create } from "zustand";

interface SearchModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onclose: () => void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onclose: () => set({ isOpen: false }),
}));

export default useSearchModal;
