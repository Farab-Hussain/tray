import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { ChevronLeft, Phone, Video, Smile, Camera, SendHorizontal } from 'lucide-react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StudentStackParamList = {
  VoiceCallScreen: { name: string; image: string };
  VideoCallScreen: { name: string; image: string };
  // ...other screens as needed
};

const ChatScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StudentStackParamList>>();
  const route = useRoute<RouteProp<{ params: { name: string; image: string; role: string } }, 'params'>>();
  const { name, image, role } = route.params;

  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi there!', sender: 'other' },
    { id: '2', text: 'Hello! How can I help you today?', sender: 'me' },
    { id: '3', text: 'I have a few questions about the course.', sender: 'other' },
    { id: '4', text: 'Sure, go ahead.', sender: 'me' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now().toString(), text: input, sender: 'me' }]);
    setInput('');
  };

  const renderMessage = ({ item }: any) => {
    const isMe = item.sender === 'me';
    return (
      <View style={[styles.messageBubble, isMe ? styles.myMessage : styles.otherMessage]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
          <ChevronLeft size={26} color="#000" />
        </TouchableOpacity>
        <Image source={{ uri: image }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userRole}>{role}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() =>
              navigation.navigate('VoiceCallScreen', {
                name,
                image,
              })
            }
          >
            <Phone size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() =>
              navigation.navigate('VideoCallScreen', {
                name,
                image,
              })
            }
          >
            <Video size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messageList}
        inverted
      />

      {/* Input Field */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.inputContainer}
      >
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            value={input}
            onChangeText={setInput}
            onSubmitEditing={handleSend}
          />
          <TouchableOpacity style={styles.emojiIcon} onPress={() => {/* TODO: Show emoji picker */}}>
            <Smile size={24} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cameraIcon} onPress={() => {/* TODO: Camera action */}}>
            <Camera size={24} color="#888" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <SendHorizontal size={22} color="#000" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 14,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    backIcon: {
      paddingRight: 8,
      borderWidth: 1,
      padding: 6,
      borderRadius: 10,
      marginRight:10,
    },
    profileImage: {
      width: 55,
      height: 55,
      borderRadius: 30,
    },
    userInfo: {
      marginLeft: 10,
      flex: 1,
    },
    userName: {
      fontWeight: '600',
      fontSize: 16,
      color: '#000',
    },
    userRole: {
      fontSize: 12,
      color: 'gray',
    },
    iconContainer: {
      flexDirection: 'row',
      gap: 12,
    },
    iconButton: {
      marginLeft: 10,
    },
    messageList: {
      padding: 10,
      flexDirection: 'column-reverse',
    },
    messageBubble: {
      padding: 10,
      borderRadius: 10,
      marginVertical: 4,
      maxWidth: '80%',
    },
    myMessage: {
      backgroundColor: '#ADEBB3',
      alignSelf: 'flex-end',
    },
    otherMessage: {
      backgroundColor: '#eee',
      alignSelf: 'flex-start',
    },
    messageText: {
      fontSize: 15,
    },
    inputContainer: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderTopColor: '#eee',
      padding: 10,
      alignItems: 'center',
    },
    inputWrapper: {
      flex: 1,
      position: 'relative',
      justifyContent: 'center',
    },
    emojiIcon: {
      position: 'absolute',
      left: 12,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      zIndex: 1,
    },
    cameraIcon: {
      position: 'absolute',
      right: 12,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      zIndex: 1,
    },
    input: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      borderRadius: 25,
      paddingLeft: 44,
      paddingRight: 44,
      height: 44,
    },
    sendButton: {
      marginLeft: 10,
      backgroundColor: '#ADEBB3',
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 16,
    },
    sendText: {
      fontWeight: '600',
      color: '#000',
    },
    inputIcon: {
      marginHorizontal: 6,
    },
  });
  