import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import ScreenHeader from '../common/ScreenHeader';
import SearchBar from '../../components/SearchBar';
import { useNavigation } from '@react-navigation/native';

const courses = [
  { id: '1', title: 'Adjudication Preparation' },
  { id: '2', title: 'Effective Communication' },
  { id: '3', title: 'Time Management Skills' },
  // Add more courses as needed
];

const CourseList = () => {
  const navigation = useNavigation();
  const renderCourse = ({ item }:any) => (
    <View style={styles.row}>
      <Image
        source={require('../../assets/images/recommended_img.png')}
        style={styles.demoImage}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletDot}>{'\u2022'}</Text>
            <Text style={styles.bulletText}>Be Transparent and Honest</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletDot}>{'\u2022'}</Text>
            <Text style={styles.bulletText}>Respond Promptly</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletDot}>{'\u2022'}</Text>
            <Text style={styles.bulletText}>Focus on Reframing Your Narrative</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CommonSelectSlot' as never)}>
          <Text style={styles.btnText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Courses" />
      <SearchBar value={''} onChangeText={() => {}} />
      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: 24,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  demoImage: {
    flex: 1,
    height: 280,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
    paddingVertical: 8,
    lineHeight: 24,
  },
  bulletList: {
    marginTop: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bulletDot: {
    fontSize: 18,
    lineHeight: 24,
    marginRight: 8,
    color: '#222',
  },
  bulletText: {
    fontSize: 14,
    color: '#222',
    flex: 1,
    lineHeight: 22,
  },
  btn: {
    height: 36,
    width: '100%',
    backgroundColor: '#FFCB4B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  btnText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default CourseList;
