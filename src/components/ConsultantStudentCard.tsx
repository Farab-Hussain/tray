import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface ConsultantStudentCardProps {
  profilePic: string;
  matchedLabel?: string;
  clientName: string;
  clientSubheading?: string;
  serviceSubheading?: string;
  onAccept: () => void;
  onDecline: () => void;
}

const ConsultantStudentCard: React.FC<ConsultantStudentCardProps> = ({
  profilePic,
  matchedLabel = 'Matched',
  clientName,
  clientSubheading = '',
  serviceSubheading = '',
  onAccept,
  onDecline,
}) => {
  return (
    <View style={styles.card}>
      {/* Row: Profile Pic + Matched Label */}
      <View style={styles.row}>
        <Image source={{ uri: profilePic }} style={styles.profilePic} />
        <Text style={styles.matchedLabel}>{matchedLabel}</Text>
      </View>
      {/* Client Name & Subheading */}
      <Text style={styles.clientName}>{clientName}</Text>
      {clientSubheading ? <Text style={styles.clientSubheading}>{clientSubheading}</Text> : null}
      {/* Service Needed Heading & Subheading */}
      <Text style={styles.serviceHeading}>Service Needed</Text>
      {serviceSubheading ? <Text style={styles.serviceSubheading}>{serviceSubheading}</Text> : null}
      {/* Accept/Decline Buttons */}
      <TouchableOpacity style={styles.acceptBtn} onPress={onAccept}>
        <Text style={styles.acceptBtnText}>Accept Request</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.declineBtn} onPress={onDecline}>
        <Text style={styles.declineBtnText}>Decline</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConsultantStudentCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  matchedLabel: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontStyle: 'normal', // SemiBold is not a valid fontStyle in React Native
    fontSize: 8,
    lineHeight: 32,
    letterSpacing: 0,
    color: '#222',
  },
  clientName: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 32,
    letterSpacing: 0,
    color: '#222',
  },
  clientSubheading: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 10,
    color: '#888',
    marginBottom: 4,
  },
  serviceHeading: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 32,
    letterSpacing: 0,
    color: '#222',
    marginTop: 8,
  },
  serviceSubheading: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 10,
    color: '#888',
    marginBottom: 8,
  },
  acceptBtn: {
    width: 129,
    height: 24,
    borderRadius: 6,
    backgroundColor: '#FFCB4B',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  acceptBtnText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 12,
    color: '#222',
  },
  declineBtn: {
    width: 129,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FFCB4B',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  declineBtnText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 12,
    color: '#222',
  },
}); 