import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import ScreenHeader from '../common/ScreenHeader';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StudentStackParamList = {
  StudentTabs: undefined;
  SelectSlot: undefined;
  Cart: undefined;
};

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
];

const SelectSlot = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<StudentStackParamList>>();

  const onDateSelect = (day: any) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <ScreenHeader title="Select Slot" />
      {/* Calendar */}
      <View style={styles.calendarWrapper}>
        <Calendar
          onDayPress={onDateSelect}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#ADEBB3' },
          }}
          theme={{
            arrowColor: '#B5BEC6',
            selectedDayTextColor: '#B5BEC6',
            todayTextColor: '#B5BEC6',
            textSectionTitleColor: '#B5BEC6',
            monthTextColor: '#222',
            indicatorColor: '#B5BEC6',
          }}
        />
      </View>

      {/* Time Slots */}
      <View style={styles.section}>
        <Text style={styles.heading}>Available Time Slots</Text>
        <FlatList
          data={timeSlots}
          keyExtractor={(item) => item}
          numColumns={3}
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.slot,
                item === selectedSlot && styles.selectedSlot,
              ]}
              onPress={() => setSelectedSlot(item)}
            >
              <Text
                style={[
                  styles.slotText,
                  item === selectedSlot && styles.selectedSlotText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Book Now Button */}
      <TouchableOpacity
        style={[
          styles.bookBtn,
          (!selectedDate || !selectedSlot) && { opacity: 0.5 },
        ]}
        disabled={!selectedDate || !selectedSlot}
        onPress={() => {
          // handle booking logic here
          console.log('Booked:', selectedDate, selectedSlot);
          navigation.navigate('Cart');
        }}
      >
        <Text style={styles.bookBtnText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectSlot;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  calendarWrapper: {
    marginHorizontal: 8,
    marginBottom: 16,
    borderRadius: 12,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    // Android shadow
    elevation: 4,
    backgroundColor: '#fff',
  },
  section: {
    marginTop: 24,
    alignItems:'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    fontStyle:'normal',
    lineHeight:32,
  },
  slot: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 12,
    borderRadius: 8,
    width: (width - 64) / 3, // 3 per row
    alignItems: 'center',
  },
  slotText: {
    color: '#333',
    fontSize: 14,
  },
  selectedSlot: {
    backgroundColor: '#ADEBB3',
  },
  selectedSlotText: {
    fontWeight: '700',
    color: '#000',
  },
  bookBtn: {
    backgroundColor: '#FFCB4B',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 32,
  },
  bookBtnText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
  helloText: {
    color: 'red',
    fontWeight: 'bold',
  },
  contentContainer: {
    gap: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10,
    columnGap: 12,
  },
});