import { create } from 'zustand';

interface ConsultantState {
  students: any[];
  setStudents: (students: any[]) => void;
}

export const useConsultantStore = create<ConsultantState>((set) => ({
  students: [],
  setStudents: (students: any[]) => set({ students }),
})); 