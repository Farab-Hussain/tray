import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { useAuthStore } from './src/store/authStore';
import MainNavigator from './src/Navigation/MainNavigator';
import { SafeAreaView, StyleSheet } from 'react-native';
import { navigationRef } from './src/Navigation/RootNavigation';

enableScreens();


const App = () => {
  // Use Zustand selector pattern to ensure re-render on user change
  const user = useAuthStore(state => state.user);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer ref={navigationRef}>
          <MainNavigator user={user} />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;