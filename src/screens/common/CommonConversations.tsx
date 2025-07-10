import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import ScreenHeader from '../common/ScreenHeader';
import SearchBar from '../../components/SearchBar';
import { useNavigation } from '@react-navigation/native';

const activeUsers = [
  { id: '1', name: 'Sarah', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: '2', name: 'Mike', image: 'https://randomuser.me/api/portraits/men/34.jpg' },
  { id: '3', name: 'Emily', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
];

const chatList = [
  {
    id: '1',
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    lastMessage: 'Hey, how are you doing?',
    time: '2:15 PM',
    unread: 3,
  },
  {
    id: '2',
    name: 'Jane Smith',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    lastMessage: 'Meeting is postponed.',
    time: '11:45 AM',
    unread: 0,
  },
  {
    id: '3',
    name: 'Chris Evans',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    lastMessage: 'Let’s catch up tomorrow.',
    time: 'Yesterday',
    unread: 1,
  },
];

const CommonConversations = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <ScreenHeader title="Conversations" style={{ marginHorizontal: -16 }} />

      <SearchBar
        placeholder="Search chats..."
        value={''}
        onChangeText={function (): void {
          throw new Error('Function not implemented.');
        }}
        style={{ marginHorizontal: -6 }}
      />

      <Text style={styles.sectionTitle}>Active Now</Text>
      <View style={styles.activeContainer}>
        {activeUsers.map(user => (
          <Image key={user.id} source={{ uri: user.image }} style={styles.activeAvatar} />
        ))}
      </View>
      <Text style={styles.messagesLabel}>Messages</Text>

      <FlatList
        data={chatList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatRow}
            onPress={() =>
              navigation.navigate('CommonChatScreen', {
                name: item.name,
                image: item.image,
                role: 'Senior Consultant', // Or dynamic role
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.chatInfo}>
              <View style={styles.row}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.message}>{item.lastMessage}</Text>
                {item.unread > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.unread}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CommonConversations;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginVertical: 12,
      color: '#000',
    },
    activeContainer: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    activeAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
      borderWidth: 2,
      borderColor: '#4CAF50',
    },
    chatRow: {
      flexDirection: 'row',
      paddingVertical: 12,
    },
    avatar: {
      width: 54,
      height: 54,
      borderRadius: 27,
      marginRight: 12,
    },
    chatInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {
      fontSize: 16,
      fontWeight: '600',
      color: '#000',
    },
    time: {
      fontSize: 12,
      color: '#999',
    },
    message: {
      fontSize: 14,
      color: '#555',
      flex: 1,
      marginRight: 8,
    },
    badge: {
      backgroundColor: '#FF3B30',
      borderRadius: 10,
      paddingHorizontal: 6,
      paddingVertical: 2,
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 20,
    },
    badgeText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
    },
    messagesLabel: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 8,
      color: '#000',
    },
  });
  