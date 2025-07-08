import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Menu, Book, MessageCircle, Bell, User } from 'lucide-react-native';

const icons = [
  { name: 'menu', label: 'Menu', Icon: Menu },
  { name: 'book', label: 'Courses', Icon: Book },
  { name: 'chatbubble-ellipses', label: 'Message', Icon: MessageCircle },
  { name: 'notifications', label: 'Notifications', Icon: Bell },
  { name: 'person', label: 'Account', Icon: User },
];

const ProfileFooter = () => {
  return (
    <View style={styles.footer}>
      {icons.map(({ name, label, Icon }) => (
        <View style={styles.iconContainer} key={name}>
          <Icon size={24} color="#333" />
          <Text style={styles.label}>{label}</Text>
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