import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'

const { width: SCREEN_WIDTH,  } = Dimensions.get('window')

const HEADER_HEIGHT = 100; // or whatever your header height is

interface ProfileHeaderProps {
  name: string;
  image: string;
}

const ProfileHeader = ({ name, image }: ProfileHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.text}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>start your productive day</Text>
        </View>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.content}>
        {/* Rest of the component content */}
      </View>
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
},
content: {
    flex: 1,
},
header: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ADEBB3',
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  text: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: SCREEN_WIDTH * 0.08,
    fontWeight: '700',
    color: 'black',
  },
  desc: {
    fontSize: SCREEN_WIDTH * 0.035,
    fontWeight: '400',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: 'cover',
    marginTop: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
})