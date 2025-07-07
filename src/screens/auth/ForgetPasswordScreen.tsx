import React, { useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';
import AuthFooter from '../common/AuthFooter';


const { width, height } = Dimensions.get('window');
const SPACING = Math.max(16, width * 0.04); // Responsive base spacing

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();


  const handleGoBack = () => navigation.goBack();
  const handleSignup = () => navigation.navigate('Signup' as never);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.contentContainer}>
            {/* Back Button */}
            <View style={styles.backButton}>
              <TouchableOpacity onPress={handleGoBack} accessibilityLabel="Go back" accessibilityRole="button">
                <ChevronLeft size={24} color="black" strokeWidth={2} />
              </TouchableOpacity>
            </View>

            {/* Title & Description */}
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.description}>
              Don't worry! It happens. Please enter the email associated with your
              account.
            </Text>

            {/* Email Input */}
            <Text style={styles.label}>Email </Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your email address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                accessibilityLabel="Email address"
              />
            </View>

            {/* Send OTP Button */}
            <TouchableOpacity style={styles.button} accessibilityRole="button" onPress={() => navigation.navigate('OTP' as never)}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <AuthFooter
          promptText="Don't have an account?"
          buttonLabel="Sign up"
          onPress={handleSignup}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 22,
    zIndex: 1,
    borderWidth:1,
    padding:5,
    borderRadius:10,

  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Math.max(20, width * 0.05),
    justifyContent: 'center',
    maxWidth: 400,
    width: '100%',
  },
  title: {
    paddingTop: height * 0.07, // replaces 59 with a responsive value
    fontSize: Math.max(30, width * 0.06),
    fontWeight: '700',
    color: 'black',
    fontFamily: 'Poppins',
  },
  description: {
    fontSize: Math.max(16, width * 0.04),
    fontWeight: '400',
    color: 'gray',
    fontFamily: 'Inter',
    paddingVertical: SPACING / 4,
  },
  label: {
    fontSize: Math.max(16, width * 0.04),
    fontWeight: '400',
    color: 'black',
    lineHeight: Math.max(16, width * 0.04),
    fontFamily: 'Poppins',
    marginTop: height * 0.02,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginTop: SPACING / 2,
    height: Math.max(56, height * 0.07), // replaces height * 0.05 with 0.07 for better scaling
  },
  inputField: {
    flex: 1,
    fontSize: Math.max(14, width * 0.035),
    color: 'black',
  },
  button: {
    width: '100%',
    height: Math.max(56, height * 0.07),
    backgroundColor: '#FFCB4B',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.04, // replaces height * 0.05 with 0.04 for more scalable spacing
  },
  buttonText: {
    fontSize: Math.max(16, width * 0.04),
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: Math.max(16, width * 0.04),
    color: 'black',
    textAlign: 'center',
  },
});
