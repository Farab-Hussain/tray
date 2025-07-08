import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { User, Book, MessageCircle, Calendar, BarChart, Users, Bell, CircleUserRound, MailOpen } from 'lucide-react-native';

import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import ForgetPasswordScreen from '../screens/auth/ForgetPasswordScreen';
import OTPScreen from '../screens/auth/OTPScreen';
import ResetPasswordScreen from '../screens/auth/ResetPassword';

<<<<<<< HEAD
=======
import Quizes from '../screens/students/Quizes';
>>>>>>> d9a5a3ca8fb3730480360ec4646e6e1ff519c0de
import StudentProfile from '../screens/students/StudentProfile';
import Profile from '../screens/students/profile';
import CourseList from '../screens/students/CourseList';
<<<<<<< HEAD
import SelectSlot from '../screens/students/SelectSlot';
import Cart from '../screens/students/Cart';
import ChatScreen from '../screens/students/ChatScreen';
import VoiceCallScreen from '../screens/common/voiceCalling';
import VideoCallScreen from '../screens/common/videoCalling';
import NotificationScreen from '../screens/common/NotificationScreen';
import Conversations from '../screens/students/Conversations';
=======
import Attendance from '../screens/students/Attendance';
import Results from '../screens/students/Results';
import SelectSlot from '../screens/students/SelectSlot';
>>>>>>> d9a5a3ca8fb3730480360ec4646e6e1ff519c0de

import ConsultantProfile from '../screens/Consultant/ConsultantProfile';
import ManageStudents from '../screens/Consultant/ManageStudents';
import Schedule from '../screens/Consultant/Schedule';
import Reports from '../screens/Consultant/Reports';

import SplashScreen from '../screens/common/SplashScreen';
import ProfileHeader from '../screens/common/ProfileHeader';
import { useAuthStore } from '../store/authStore';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StudentStackParamList = {
  StudentTabs: undefined;
  SelectSlot: undefined;
  Cart: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

<<<<<<< HEAD
// Move this outside the component
const StudentProfileHeader = ({ user }: { user: any }) => {
  const navigation = useNavigation<NativeStackNavigationProp<StudentStackParamList>>();
  return (
    <ProfileHeader
      name={user?.username || (user?.email ? user.email.split('@')[0] : 'User')}
      image={user?.image || 'https://randomuser.me/api/portraits/men/1.jpg'}
      onProfilePress={() => navigation.navigate('Profile')}
    />
  );
};

// 🧑 Student Tabs
const StudentTabNavigator = () => {
  const { user } = useAuthStore();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, focused }) => {
          const iconColor = focused ? '#fff' : '#B5BEC6';
          if (route.name === 'StudentProfile') return <MailOpen size={size} color={iconColor} />;
          if (route.name === 'Quizes') return <Book size={size} color={iconColor} />;
          if (route.name === 'CourseList') return <MessageCircle size={size} color={iconColor} />;
          if (route.name === 'Attendance') return <Bell size={size} color={iconColor} />;
          if (route.name === 'Results') return <CircleUserRound size={size} color={iconColor} />;
          return <User size={size} color={iconColor} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#B5BEC6',
        tabBarStyle: { backgroundColor: '#ADEBB3', height: 60, paddingBottom: 5 },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '400' },
      })}
    >
      <Tab.Screen
        name="StudentProfile"
        component={StudentProfile}
        options={{
          title: 'Menu',
          headerShown: true,
          header: () => <StudentProfileHeader user={user} />,
        }}
      />
      <Tab.Screen name="CourseList" component={CourseList} options={{ title: 'Courses', headerShown: false }} />
      <Tab.Screen name="Conversations" component={Conversations} options={{ title: 'Messages', headerShown: false }} />
      <Tab.Screen name="Attendance" component={NotificationScreen} options={{ title: 'Notifications', headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: 'Account', headerShown: false }} />
    </Tab.Navigator>
  );
};

// Move this outside the component
const ConsultantProfileHeader = ({ user }: { user: any }) => (
  <ProfileHeader
    name={user?.username || (user?.email ? user.email.split('@')[0] : 'User')}
    image={user?.image || 'https://randomuser.me/api/portraits/women/1.jpg'}
  />
);

// 👩 Consultant Tabs
const ConsultantTabNavigator = () => {
  const { user } = useAuthStore();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, focused }) => {
          const iconColor = focused ? '#fff' : '#B5BEC6';
          if (route.name === 'ConsultantProfile') return <User size={size} color={iconColor} />;
          if (route.name === 'ManageStudents') return <Users size={size} color={iconColor} />;
          if (route.name === 'Schedule') return <Calendar size={size} color={iconColor} />;
          if (route.name === 'Reports') return <BarChart size={size} color={iconColor} />;
          return <User size={size} color={iconColor} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#B5BEC6',
        tabBarStyle: { backgroundColor: '#ADEBB3', height: 60, paddingBottom: 5 },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '400' },
      })}
    >
      <Tab.Screen
        name="ConsultantProfile"
        component={ConsultantProfile}
        options={{
          title: 'Profile',
          headerShown: true,
          header: () => <ConsultantProfileHeader user={user} />,
        }}
      />
      <Tab.Screen name="ManageStudents" component={ManageStudents} options={{ title: 'Students', headerShown: false }} />
      <Tab.Screen name="Schedule" component={Schedule} options={{ title: 'Schedule', headerShown: false }} />
      <Tab.Screen name="Reports" component={Reports} options={{ title: 'Reports', headerShown: false }} />
    </Tab.Navigator>
  );
};
=======
// 🧑 Student Tabs
const StudentTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ size, focused }) => {
        const iconColor = focused ? '#fff' : '#B5BEC6';
        if (route.name === 'StudentProfile') return <MailOpen size={size} color={iconColor} />;
        if (route.name === 'Quizes') return <Book size={size} color={iconColor} />;
        if (route.name === 'CourseList') return <MessageCircle size={size} color={iconColor} />;
        if (route.name === 'Attendance') return <Bell size={size} color={iconColor} />;
        if (route.name === 'Results') return <CircleUserRound size={size} color={iconColor} />;
        return <User size={size} color={iconColor} />;
      },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#B5BEC6',
      tabBarStyle: { backgroundColor: '#ADEBB3', height: 60, paddingBottom: 5 },
      tabBarLabelStyle: { fontSize: 12, fontWeight: '400' },
    })}
  >
    <Tab.Screen
      name="StudentProfile"
      component={StudentProfile}
      options={{
        title: 'Menu',
        headerShown: true,
        header: () => (
          <ProfileHeader
            name="John Doe"
            image="https://randomuser.me/api/portraits/men/1.jpg"
          />
        ),
      }}
    />
    <Tab.Screen name="Quizes" component={Quizes} options={{ title: 'Courses', headerShown: false }} />
    <Tab.Screen name="CourseList" component={CourseList} options={{ title: 'Messages', headerShown: false }} />
    <Tab.Screen name="Attendance" component={Attendance} options={{ title: 'Notifications', headerShown: false }} />
    <Tab.Screen name="Results" component={Results} options={{ title: 'Account', headerShown: false }} />
  </Tab.Navigator>
);

// 👩 Consultant Tabs
const ConsultantTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ size, focused }) => {
        const iconColor = focused ? '#fff' : '#B5BEC6';
        if (route.name === 'ConsultantProfile') return <User size={size} color={iconColor} />;
        if (route.name === 'ManageStudents') return <Users size={size} color={iconColor} />;
        if (route.name === 'Schedule') return <Calendar size={size} color={iconColor} />;
        if (route.name === 'Reports') return <BarChart size={size} color={iconColor} />;
        return <User size={size} color={iconColor} />;
      },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#B5BEC6',
      tabBarStyle: { backgroundColor: '#ADEBB3', height: 60, paddingBottom: 5 },
      tabBarLabelStyle: { fontSize: 12, fontWeight: '400' },
    })}
  >
    <Tab.Screen
      name="ConsultantProfile"
      component={ConsultantProfile}
      options={{
        title: 'Profile',
        headerShown: true,
        header: () => (
          <ProfileHeader
            name="Jane Smith"
            image="https://randomuser.me/api/portraits/women/1.jpg"
          />
        ),
      }}
    />
    <Tab.Screen name="ManageStudents" component={ManageStudents} options={{ title: 'Students', headerShown: false }} />
    <Tab.Screen name="Schedule" component={Schedule} options={{ title: 'Schedule', headerShown: false }} />
    <Tab.Screen name="Reports" component={Reports} options={{ title: 'Reports', headerShown: false }} />
  </Tab.Navigator>
);
>>>>>>> d9a5a3ca8fb3730480360ec4646e6e1ff519c0de

// 🌐 Main Navigator
const MainNavigator = ({ user }: { user: any }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  // Auth Flow
  if (!user) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#000',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPassword" component={ForgetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTP" component={OTPScreen}options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );
  }

  // Student Flow
  if (user.role?.toLowerCase() === 'student') {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#000',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name="StudentTabs" component={StudentTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen
          name="SelectSlot"
          component={SelectSlot}
          options={{
            headerShown: false,
          }}
        />
<<<<<<< HEAD
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile} // <-- Use the detailed profile UI here
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VoiceCallScreen"
          component={VoiceCallScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VideoCallScreen"
          component={VideoCallScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
=======
>>>>>>> d9a5a3ca8fb3730480360ec4646e6e1ff519c0de
      </Stack.Navigator>
    );
  }

  // Consultant Flow
  if (user.role?.toLowerCase() === 'consultant') {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#000',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name="ConsultantTabs" component={ConsultantTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  // Fallback
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
<<<<<<< HEAD
export default MainNavigator;
=======

export default MainNavigator;
>>>>>>> d9a5a3ca8fb3730480360ec4646e6e1ff519c0de
