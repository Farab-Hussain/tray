import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
<<<<<<< HEAD
  style?: any;
}

const ScreenHeader: React.FC<Props> = ({ title, style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
=======
}

const ScreenHeader: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
>>>>>>> d9a5a3ca8fb3730480360ec4646e6e1ff519c0de
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
        accessibilityRole="button"
      >
        <ChevronLeft size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightSpace} />
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    marginBottom:20,
  },
  backButton: {
    marginLeft: 16,
    borderWidth: 1,
    padding: 5,
    borderColor: '#D8DADC',
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  rightSpace: {
    width: 40,
  },
});
