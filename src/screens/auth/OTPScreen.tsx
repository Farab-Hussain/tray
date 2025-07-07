import React, { useState, useRef, useEffect } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';
import AuthFooter from '../common/AuthFooter';

const { width, height } = Dimensions.get('window');
const SPACING = Math.max(16, width * 0.04); // Responsive base spacing

const OTPScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputs: React.RefObject<RNTextInput | null>[] = [
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
  ];
  const navigation = useNavigation();

  useEffect(() => {
    let interval: any;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleResendCode = () => {
    setResendTimer(30);
    setCanResend(false);
    // Add your resend logic here
  };

  const handleGoBack = () => navigation.goBack();
  //    const handleSignup = () => navigation.navigate('Signup' as never);

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
            <Text style={styles.title}>Please check your email</Text>
            <Text style={styles.description}>
            We've sent a code to helloworld@gmail.com
            </Text>

            {/* OTP Input */}
            <View style={styles.otpContainer}>
              {otp.map((digit, idx) => (
                <RNTextInput
                  key={idx}
                  ref={inputs[idx]}
                  style={styles.otpInput}
                  value={digit}
                  onChangeText={text => {
                    if (/^\d?$/.test(text)) {
                      const newOtp = [...otp];
                      newOtp[idx] = text;
                      setOtp(newOtp);
                      if (text && idx < 3) {
                        inputs[idx + 1].current?.focus();
                      }
                    }
                  }}
                  keyboardType="number-pad"
                  maxLength={1}
                  returnKeyType="next"
                  textAlign="center"
                  accessibilityLabel={`Digit ${idx + 1}`}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === 'Backspace' && !otp[idx] && idx > 0) {
                      inputs[idx - 1].current?.focus();
                    }
                  }}
                />
              ))}
            </View>

            {/* Resend Code Section */}
            <View style={styles.resendContainer}>
              {canResend ? (
                <TouchableOpacity onPress={handleResendCode} style={styles.resendButton} accessibilityRole="button">
                  <Text style={styles.resendText}>Send code again</Text>
                </TouchableOpacity>
              ) : (
                <Text style={styles.timerText}>
                  Send code again in {resendTimer}s
                </Text>
              )}
            </View>
            <TouchableOpacity style={styles.button} accessibilityRole="button" onPress={() => navigation.navigate('ResetPassword' as never)}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <AuthFooter
          promptText="Already have an account?"
          buttonLabel="Log in"
          onPress={() => navigation.navigate('Login' as never)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  backButton: {    position: 'absolute',
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
    // marginBottom:20,
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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING / 1.5,
    marginBottom: SPACING / 1.5,
  },
  otpInput: {
    width: Math.max(77, width * 0.12),
    height: Math.max(77, height * 0.07),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    backgroundColor: 'white',
    fontSize: Math.max(20, width * 0.05),
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 4,
    fontFamily: 'Poppins',
  },
  resendContainer: {
    alignItems: 'center',
    marginTop: SPACING,
    marginBottom: SPACING / 2,
  },
  resendButton: {
    paddingVertical: SPACING / 4,
  },
  resendText: {
    fontSize: Math.max(16, width * 0.035),
    color: '#000000B2',
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  timerText: {
    fontSize: Math.max(14, width * 0.035),
    color: 'gray',
    fontWeight: '400',
    fontFamily: 'Inter',
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
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: height * 0.40, // replaces 360 with a responsive value
  },
  signupText: {
    fontSize: 14,
    color: 'gray',
  },
  signupButton: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'Inter',
  },
});
