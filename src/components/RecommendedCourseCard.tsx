import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

interface Props {
  data: {
    id: string;
    title: string;
    description: string;
    onPress?: () => void;
  };
}

const RecommendedCourseCard: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={style.card}>
      <Image source={require('../assets/images/recommended_img.png')} style={style.image} resizeMode="cover" />
      <Text style={style.title}>{data.title}</Text>
      <Text style={style.para}>{data.description}</Text>
      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.navigate('SelectSlot' as never)}
      >
        <Text style={style.btnText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecommendedCourseCard;

const style = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    padding: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: CARD_WIDTH - 16,
    height: 120,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F0F0F',
    paddingVertical: 8,
  },
  para: {
    fontSize: 10,
    fontWeight: '400',
    color: '#0F0F0F',
    lineHeight: 14,
  },
  btn: {
    width: 120,
    height: 24,
    borderRadius: 6,
    backgroundColor: '#FFCB4B',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 8,
  },
  btnText: {
    color: '#0B0B0B',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'center',
  },
});
