import React from 'react';
import {
  View,
 
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { PhoneOff, Video, Volume2 } from 'lucide-react-native';

const VideoCallScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{ params: { name: string; image: string } }, 'params'>>();
  const { image } = route.params;

  const handleEndCall = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Fullscreen Video Placeholder */}
      <View style={styles.remoteVideo}>
        {/* Placeholder image for remote stream */}
        <Image source={{ uri: image }} style={styles.remoteImage} resizeMode="cover" />
      </View>

      {/* Local Video Preview (PIP) */}
      <View style={styles.localVideoContainer}>
        <Image
          source={{ uri: image }}
          style={styles.localVideo}
          resizeMode="cover"
        />
      </View>

   

      {/* Control Buttons */}
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

export default VideoCallScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    remoteVideo: {
      flex: 1,
      backgroundColor: '#1E293B',
      justifyContent: 'center',
      alignItems: 'center',
    },
    remoteImage: {
      width: '100%',
      height: '100%',
    },
    localVideoContainer: {
      position: 'absolute',
      bottom: 120,
      right: 20,
      width: 100,
      height: 150,
      borderRadius: 12,
      overflow: 'hidden',
      borderColor: 'white',
      borderWidth: 2,
    },
    localVideo: {
      width: '100%',
      height: '100%',
    },
    overlayText: {
      position: 'absolute',
      top: 40,
      left: 20,
    },
    name: {
      fontSize: 20,
      fontWeight: '700',
      color: 'white',
    },
    status: {
      fontSize: 14,
      color: '#cbd5e1',
    },
    controlsRow: {
      position: 'absolute',
      bottom: 30,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 30,
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
  