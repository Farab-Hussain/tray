import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuthStore } from '../../store/authStore';
import { useNavigation, useRoute } from '@react-navigation/native';

const Quizes = () => {
  const { logout } = useAuthStore();
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    // @ts-ignore
    if (route.params && route.params.fromSignup) {
      (navigation as any).navigate('StudentProfile');
    }
  }, [route, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={logout} accessibilityRole="button">
          <Ionicons name="log-out-outline" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Quizes</Text>
      </View>
    </View>
  )
}

export default Quizes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 16,
    },
})