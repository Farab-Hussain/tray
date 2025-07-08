import { create } from 'zustand';

interface StudentState {
  courses: any[];
  setCourses: (courses: any[]) => void;
}

export const useStudentStore = create<StudentState>((set) => ({
  courses: [],
  setCourses: (courses: any[]) => set({ courses }),
})); 