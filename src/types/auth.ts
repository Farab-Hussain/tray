export type Role = 'Student' | 'Consultant' | 'Admin';
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}
