import { MyPackage, RecommendedCourse, ClassItem } from '../../types/student';

export const myPackages: MyPackage[] = [
  { id: '1', title: 'Package 1', expiryDate: '2024-08-01', status: 'active' },
  { id: '2', title: 'Package 2', expiryDate: '2024-07-15', status: 'expired' },
];

export const recommendedCourses: RecommendedCourse[] = [
  {
    id: '1',
    title: 'Course 1',
    description: 'Learn how to speak confidently in front of any audience.',
    onPress: () => console.log('Pressed Course 1'),
  },
  {
    id: '2',
    title: 'Course 2',
    description: 'Master negotiation and communication skills.',
    onPress: () => console.log('Pressed Course 2'),
  },
  {
    id: '3',
    title: 'Course 3',
    description: 'Understand the basics of resume writing.',
    onPress: () => console.log('Pressed Course 3'),
  },
  {
    id: '4',
    title: 'Course 4',
    description: 'Boost your interview performance and confidence.',
    onPress: () => console.log('Pressed Course 4'),
  },
];

export const classes: ClassItem[] = [
  { id: '1', name: 'Math 101', instructor: 'Mr. Smith', time: '9:00 AM' },
  { id: '2', name: 'English 201', instructor: 'Ms. Johnson', time: '11:00 AM' },
  { id: '3', name: 'Science 301', instructor: 'Dr. Brown', time: '2:00 PM' },
]; 