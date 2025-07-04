import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import MyPackageCard from '../../components/MyPackageCards';
import RecommendedCourseCard from '../../components/RecommendedCourseCard';

const myPackages = [
  { id: '1', title: 'Package 1', expiryDate: '2024-08-01', status: 'active' },
  { id: '2', title: 'Package 2', expiryDate: '2024-07-15', status: 'expired' },
];

const recommendedCourses = [
  { id: '1', title: 'Course 1', expiryDate: '2024-09-01', status: 'active' },
  { id: '2', title: 'Course 2', expiryDate: '2024-10-10', status: 'active' },
  { id: '3', title: 'Course 3', expiryDate: '2024-11-05', status: 'active' },
  { id: '4', title: 'Course 4', expiryDate: '2024-12-20', status: 'active' },
];

const StudentProfile = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 100 }} contentContainerStyle={{ paddingBottom: 20 }}>
      {/* My Packages Section - only if packages exist */}
      {myPackages.length > 0 && (
        <View style={{ padding: 16 }}>
          <Text style={styles.sectionTitle}>My Packages</Text>
          <FlatList
            data={myPackages}
            renderItem={({ item }) => <MyPackageCard data={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 12 }}
          />
        </View>
      )}

      {/* Recommended Courses Section - always shown */}
      <View style={{ padding: 16 }}>
        <Text style={styles.sectionTitle}>Recommended Courses</Text>
        <FlatList
          data={recommendedCourses}
          renderItem={({ item }) => <RecommendedCourseCard data={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 12 }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 8,
    paddingHorizontal:10,
  },
});

export default StudentProfile;
