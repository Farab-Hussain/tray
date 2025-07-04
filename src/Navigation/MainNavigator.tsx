import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import ForgetPasswordScreen from '../screens/auth/ForgetPasswordScreen';
import OTPScreen from '../screens/auth/OTPScreen';
import ResetPasswordScreen from '../screens/auth/ResetPassword';
import Quizes from '../screens/students/Quizes';
import StudentProfile from '../screens/students/StudentProfile';
import CourseList from '../screens/students/CourseList';
import Attendance from '../screens/students/Attendance';
import Results from '../screens/students/Results';
import ConsultantProfile from '../screens/Consultant/ConsultantProfile';
import ManageStudents from '../screens/Consultant/ManageStudents';
import Schedule from '../screens/Consultant/Schedule';
import Reports from '../screens/Consultant/Reports';
import SplashScreen from '../screens/common/SplashScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileHeader from '../screens/common/ProfileHeader';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StudentTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName = 'ellipse';
        if (route.name === 'StudentProfile') iconName = 'person';
        else if (route.name === 'Quizes') iconName = 'book';
        else if (route.name === 'CourseList') iconName = 'list';
        else if (route.name === 'Attendance') iconName = 'calendar';
        else if (route.name === 'Results') iconName = 'stats-chart';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: '#888',
      tabBarStyle: { backgroundColor: '#ADEBB3', height: 60, paddingBottom: 5 },
      tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
    })}
  >
    <Tab.Screen
      name="StudentProfile"
      component={StudentProfile}
      options={{
        title: 'Profile',
        headerShown: true,
        header: () => <ProfileHeader name="John Doe" image="https://randomuser.me/api/portraits/men/1.jpg" />,
      }}
    />
    <Tab.Screen name="Quizes" component={Quizes} options={{ title: 'Quizzes', headerShown: false }} />
    <Tab.Screen name="CourseList" component={CourseList} options={{ title: 'Courses', headerShown: false }} />
    <Tab.Screen name="Attendance" component={Attendance} options={{ title: 'Attendance', headerShown: false }} />
    <Tab.Screen name="Results" component={Results} options={{ title: 'Results', headerShown: false }} />
  </Tab.Navigator>
);

const ConsultantTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName = 'ellipse';
        if (route.name === 'ConsultantProfile') iconName = 'person';
        else if (route.name === 'ManageStudents') iconName = 'people';
        else if (route.name === 'Schedule') iconName = 'calendar';
        else if (route.name === 'Reports') iconName = 'stats-chart';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: '#888',
      tabBarStyle: { backgroundColor: '#ADEBB3', height: 60, paddingBottom: 5 },
      tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
    })}
  >
    <Tab.Screen
      name="ConsultantProfile"
      component={ConsultantProfile}
      options={{
        title: 'Profile',
        headerShown: true,
        header: () => <ProfileHeader name="Jane Smith" image="https://randomuser.me/api/portraits/women/1.jpg" />,
      }}
    />
    <Tab.Screen name="ManageStudents" component={ManageStudents} options={{ title: 'Students', headerShown: false }} />
    <Tab.Screen name="Schedule" component={Schedule} options={{ title: 'Schedule', headerShown: false }} />
    <Tab.Screen name="Reports" component={Reports} options={{ title: 'Reports', headerShown: false }} />
  </Tab.Navigator>
);

const MainNavigator = ({ user }: { user: any }) => {
  const [showSplash, setShowSplash] = useState(true);
  // const { logout } = useAuthStore();
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Debug logs
  console.log('MainNavigator render:', { user, showSplash });

  if (showSplash) {
    return <SplashScreen />;
  }

  // If no user, show auth flow
  if (!user) {
    console.log('Rendering Auth Flow');
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTP" component={OTPScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  // If student, show student screens
  if (user.role && user.role.toLowerCase() === 'student') {
    console.log('Rendering Student Flow');
    return <StudentTabNavigator />;
  }

  // If consultant, show consultant screens
  if (user.role && user.role.toLowerCase() === 'consultant') {
    console.log('Rendering Consultant Flow');
    return <ConsultantTabNavigator />;
  }

  // Default fallback
  console.log('Rendering Default Fallback');
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainNavigator; 