import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { resetTo } from '../Navigation/RootNavigation';

type User = {
  id: string;
  email: string;
  role: 'student' | 'consultant';
  name: string;
};

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (user: User, token: string) => Promise<void>;
  logout: () => Promise<void>;
  setLoading: (state: boolean) => void;
  hydrateAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: false,

  setLoading: (state) => set({ isLoading: state }),

  login: async (user, token) => {
    const username = user.email.split('@')[0];
    const userWithUsername = { ...user, username };
    await AsyncStorage.setItem('user', JSON.stringify(userWithUsername));
    await AsyncStorage.setItem('token', token);
    set({ user: userWithUsername, token });

    // Redirect based on role
    if (user.role === 'student') {
      resetTo('StudentTabs');
    } else if (user.role === 'consultant') {
      resetTo('ConsultantTabs');
    }
  },

  logout: async () => {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('token');
    set({ user: null, token: null });
    resetTo('Login');
  },

  hydrateAuth: async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      const token = await AsyncStorage.getItem('token');

      if (userData && token) {
        const user = JSON.parse(userData);
        if (!user.username && user.email) {
          user.username = user.email.split('@')[0];
        }
        set({ user, token });

        // Navigate based on role
        if (user.role === 'student') {
          resetTo('StudentTabs');
        } else if (user.role === 'consultant') {
          resetTo('ConsultantTabs');
        }
      } else {
        set({ user: null, token: null });
        resetTo('Login');
      }
    } catch (error) {
      set({ user: null, token: null });
      resetTo('Login');
    }
  },
}));

export const hydrateAuth = async (set: any) => {
  const token = await AsyncStorage.getItem('token');
  const user = await AsyncStorage.getItem('user');
  if (token && user) {
    set({ token, user: JSON.parse(user) });
  }
};
