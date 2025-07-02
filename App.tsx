import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/Navigation/AuthNavigator';
import StudentNavigation from './src/Navigation/StudentNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { useAuthStore } from './src/store/authStore';
import ConsultantScreen from './src/screens/Consultant/demo';
import AdminDashboard from './src/screens/admin/demo';

enableScreens();

const App = () => {
  // Use Zustand selector pattern to ensure re-render on user change
  const user = useAuthStore(state => state.user);

  let content;
  if (!user) {
    content = <AuthNavigator />;
  } else if (user.role === 'student') {
    content = <StudentNavigation />;
  } else if (user.role === 'consultant') {
    content = <ConsultantScreen />;
  } else if (user.role === 'admin') {
    content = <AdminDashboard />;
  } else {
    content = <AuthNavigator />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {content}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
