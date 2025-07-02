import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuthStore } from '../../store/authStore';

const Quizes = () => {
  const { logout } = useAuthStore();
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