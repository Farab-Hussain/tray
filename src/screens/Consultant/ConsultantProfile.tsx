import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConsultantProfile = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Consultant Profile Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
  text: { fontSize: 20, fontWeight: 'bold' },
});

export default ConsultantProfile; 