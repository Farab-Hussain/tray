import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { User, MessageCircle, Bell, MailOpen, Book } from 'lucide-react-native';

import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import ForgetPasswordScreen from '../screens/auth/ForgetPasswordScreen';
import OTPScreen from '../screens/auth/OTPScreen';
import ResetPasswordScreen from '../screens/auth/ResetPassword';
import Profile from '../screens/students/profile';
import CourseList from '../screens/students/CourseList';
import VoiceCallScreen from '../screens/common/voiceCalling';
import VideoCallScreen from '../screens/common/videoCalling';
import NotificationScreen from '../screens/common/NotificationScreen';
import CommonConversations from '../screens/common/CommonConversations';
import SplashScreen from '../screens/common/SplashScreen';
import ProfileHeader from '../screens/common/ProfileHeader';
import { useAuthStore } from '../store/authStore';
import CommonProfile from '../screens/common/CommonProfile';
import CommonSelectSlot from '../screens/common/CommonSelectSlot';
import Cart from '../screens/students/Cart'; // Make sure this import exists
import CommonChatScreen from '../screens/common/CommonChatScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 🧑 Student Tabs
const StudentTabNavigator = () => {
  const { user } = useAuthStore();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, focused }) => {
          const iconColor = focused ? '#fff' : '#B5BEC6';
          if (route.name === 'StudentProfile') return <MailOpen size={size} color={iconColor} />;
          if (route.name === 'CourseList') return <Book size={size} color={iconColor} />;
          if (route.name === 'Conversations') return <MessageCircle size={size} color={iconColor} />;
          if (route.name === 'Notifications') return <Bell size={size} color={iconColor} />;
          if (route.name === 'Profile') return <User size={size} color={iconColor} />;
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
        component={CommonProfile}
        options={{
          title: 'Menu',
          headerShown: true,
          header: () => <ProfileHeader name={user?.name || (user?.email ? user.email.split('@')[0] : 'User')} image={'https://randomuser.me/api/portraits/men/1.jpg'} onProfilePress={() => {}} />, // Adjust onProfilePress as needed
        }}
      />
      <Tab.Screen name="CourseList" component={CourseList} options={{ title: 'Courses', headerShown: false }} />
      <Tab.Screen name="Conversations" component={CommonConversations} options={{ title: 'Messages', headerShown: false }} />
      <Tab.Screen name="Notifications" component={NotificationScreen} options={{ title: 'Notifications', headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: 'Account', headerShown: false }} />
    </Tab.Navigator>
  );
};

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
        <Stack.Screen name="OTP" component={OTPScreen} options={{ headerShown: false }} />
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
        <Stack.Screen name="CommonSelectSlot" component={CommonSelectSlot} options={{ headerShown: false }} />
        <Stack.Screen name="CommonChatScreen" component={CommonChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VoiceCallScreen" component={VoiceCallScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
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

export default MainNavigator;