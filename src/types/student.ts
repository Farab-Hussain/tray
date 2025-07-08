export interface MyPackage {
  id: string;
  title: string;
  expiryDate: string;
  status: 'active' | 'expired';
}

export interface RecommendedCourse {
  id: string;
  title: string;
  description: string;
  onPress?: () => void;
}

export interface ClassItem {
  id: string;
  name: string;
  instructor: string;
  time: string;
} 