import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useAuthStore } from '../../store/authStore';
import { useNavigation } from '@react-navigation/native';
import { createNavigationContainerRef } from '@react-navigation/native';

const SplashScreen = () => {
  const { hydrateAuth, user } = useAuthStore();
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuth = async () => {
      await hydrateAuth();
      // Navigate based on hydrated role
      if (user?.role === 'student') {
        navigation.reset({ index: 0, routes: [{ name: 'StudentTabs' as never }] });
      } else if (user?.role === 'consultant') {
        navigation.reset({ index: 0, routes: [{ name: 'ConsultantTabs' as never }] });
      } else {
        navigation.reset({ index: 0, routes: [{ name: 'Login' as never }] });
      }
    };

    checkAuth();
  }, [hydrateAuth, user?.role, navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FFCB4B" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: '#333',
  },
});

export const navigationRef = createNavigationContainerRef();

export function resetTo(name: string) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{ name }],
    });
  }
}
