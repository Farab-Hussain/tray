import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const icons = [
  { name: 'menu', label: 'Menu' },
  { name: 'book', label: 'Courses' },
  { name: 'chatbubble-ellipses', label: 'Message' },
  { name: 'notifications', label: 'Notifications' },
  { name: 'person', label: 'Account' },
];

const ProfileFooter = () => {
  return (
    <View style={styles.footer}>
      {icons.map((icon) => (
        <View style={styles.iconContainer} key={icon.name}>
          <Ionicons name={icon.name} size={28} color="#333" />
          <Text style={styles.label}>{icon.label}</Text>
        </View>
      ))}
    </View>
  )
}

export default ProfileFooter

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#ADEBB3',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  iconContainer: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#333',
    marginTop: 2,
  },
});