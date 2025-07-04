import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MessageCircle, Phone, Video } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2; // 16px padding on both sides + 16px spacing between

interface MyPackageCardProps {
  data: {
    id: string;
    title: string;
    expiryDate: string;
    status: 'active' | 'expired';
  };
}

const MyPackageCard: React.FC<{ data: MyPackageCardProps['data'] }> = ({
  data,
}) => {
  const isExpired = data.status === 'expired';

  return (
    <View style={styles.card}>
      {/* Demo image at the top */}
      {isExpired ? (
        <Text style={styles.badge}>Expired</Text>
      ) : (
        <Text style={styles.badge}>❤️</Text>
      )}
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
        style={styles.image}
      />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.subtitle}>{data.title}</Text>
      <TouchableOpacity style={styles.button}>
        {isExpired ? (
          <Text style={styles.buttonText}>Book again</Text>
        ) : (
          <Text style={[styles.buttonText, styles.notExpiredButtonText]}>
            Expire on 23-5-2025
          </Text>
        )}
      </TouchableOpacity>
      {/* 3 icons in a row */}
      {isExpired ? null : (
        <View style={styles.iconRow}>
          <MessageCircle size={24} />
          <Phone size={24} />
          <Video size={24} />
        </View>
      )}
    </View>
  );
};

export default MyPackageCard;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    paddingVertical: 12,
    elevation: 3,
    alignItems: 'center',
    margin: 8,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android shadow (elevation already set to 3)
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
    marginTop: 15,
  },
  heartIcon: {
    width: 14,
    height: 14,
    marginTop: 8,
    // marginEnd:8,÷
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  expiryLabel: {
    fontSize: 12,
    color: '#555',
  },
  expiry: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2E7D32',
  },

  badge: {
    marginVertical: 8,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#B71C1C',
    position: 'absolute',
    top: 2,
    right: 20,
    paddingHorizontal: 4,
    minWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#FFCB4B',
    borderRadius: 6,
    // paddingVertical: 5,
    paddingHorizontal: 8,
    alignItems: 'center',
    alignSelf: 'center',
    width: 120,
    height: 26,
    display: 'flex',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notExpiredButtonText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 32,
    letterSpacing: 0,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 12,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#00000080',
    fontFamily: 'Inter-Medium',
    marginVertical: 5,
    textAlign: 'center',
    letterSpacing: 0.5,
    textTransform: 'capitalize',
    fontStyle: 'normal',
    // fontFamily:'Int
  },
});
