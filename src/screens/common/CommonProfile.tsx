import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import MyPackageCard from '../../components/MyPackageCards';
import RecommendedCourseCard from '../../components/RecommendedCourseCard';
import { myPackages, recommendedCourses } from '../../screens/students/data';
import { useNavigation } from '@react-navigation/native';
import { MyPackage, RecommendedCourse } from '../../types/student';

const CommonProfile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      {/* My Packages Section - only if packages exist */}
      {myPackages.length > 0 && (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>My Packages</Text>
          <FlatList<MyPackage>
            data={myPackages}
            renderItem={({ item }) => <MyPackageCard data={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={styles.columnWrapper}
          />
        </View>
      )}

      {/* Recommended Courses Section - always shown */}
      <View style={styles.sectionContainer}>
        <View style={styles.recommendedCoursesHeader}>
          <Text style={styles.sectionTitle}>Recommended Courses</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('CourseList' as never);
          }}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList<RecommendedCourse>
          data={recommendedCourses.slice(0, 2)}
          renderItem={({ item }) => <RecommendedCourseCard data={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>

      {/* Classes Section */}
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  sectionContainer: {
    padding: 16,
  },
  recommendedCoursesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  seeAll: {
    fontSize: 10,
    fontWeight: 600,
    lineHeight: 32,
    textDecorationLine: 'underline',
    textDecorationColor: '#E64646',
    color: '#E64646',
  },
  classCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  classTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  classInfo: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
  classListContent: {
    gap: 8,
  },
  btn: {
    height: 36,
    width: 133,
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

export default CommonProfile;