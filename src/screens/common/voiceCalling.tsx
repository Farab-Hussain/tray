import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { PhoneOff, Video, Volume2 } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const VoiceCallScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{ params: { name: string; image: string } }, 'params'>>();
  const { name, image } = route.params;

  const handleEndCall = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image source={{ uri: image }} style={styles.profileImage} />

      {/* Name */}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.status}>Ringing...</Text>

      {/* Spacer */}
      <View style={{ height: 80 }} />

      {/* Control Icons Row */}
      <View style={styles.controlsRow}>
        <TouchableOpacity style={styles.whiteButton}>
          <Video size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.redButton} onPress={handleEndCall}>
          <PhoneOff size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.whiteButton}>
          <Volume2 size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VoiceCallScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0F172A', // navy background
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    profileImage: {
      width: width * 0.4,
      height: width * 0.4,
      borderRadius: (width * 0.4) / 2,
      marginBottom: 24,
    },
    name: {
      fontSize: 22,
      fontWeight: '700',
      color: 'white',
      marginBottom: 8,
    },
    status: {
      fontSize: 16,
      color: '#cbd5e1',
    },
    controlsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginTop: 20,
    },
    whiteButton: {
      backgroundColor: 'white',
      padding: 18,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    redButton: {
      backgroundColor: '#EF4444',
      padding: 22,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  