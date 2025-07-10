import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ConsultantStudentCard from '../../components/ConsultantStudentCard';

const mockStudents = [
  {
    id: '1',
    profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
    clientName: 'John Doe',
    clientSubheading: 'Student at University',
    serviceSubheading: 'Needs help with Math assignments',
  },
  {
    id: '2',
    profilePic: 'https://randomuser.me/api/portraits/women/44.jpg',
    clientName: 'Jane Smith',
    clientSubheading: 'High School Student',
    serviceSubheading: 'Looking for SAT prep',
  },
];

const ConsultantProfile = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Consultant Profile</Text>
    <FlatList
      data={mockStudents}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ConsultantStudentCard
          profilePic={item.profilePic}
          clientName={item.clientName}
          clientSubheading={item.clientSubheading}
          serviceSubheading={item.serviceSubheading}
          onAccept={() => {}}
          onDecline={() => {}}
        />
      )}
      contentContainerStyle={{ paddingBottom: 24 }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingTop: 24 },
  heading: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
});

export default ConsultantProfile; 