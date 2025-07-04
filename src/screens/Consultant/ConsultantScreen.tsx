import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuthStore } from '../../store/authStore';

const ConsultantScreen = () => {
  const { logout } = useAuthStore();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logout} style={styles.logoutButton} accessibilityRole="button">
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text>Consultant Dashboard</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoutButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: '#e74c3c',
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConsultantScreen; 