import { create } from 'zustand';
import { Student } from '../../../shared/api';

interface AppState {
  currentUser: Student | null;
  isLoading: boolean;
  setCurrentUser: (user: Student | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  currentUser: null,
  isLoading: false,
  setCurrentUser: (user) => set({ currentUser: user }),
  setLoading: (loading) => set({ isLoading: loading }),
}));
