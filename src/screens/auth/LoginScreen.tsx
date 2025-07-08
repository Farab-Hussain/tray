import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import AuthFooter from '../common/AuthFooter';
import { useAuthStore } from '../../store/authStore';
import { loginRequest } from '../../services/authService';
// import GoogleIcon from '../../assets/images/svg/google.svg';
// import FacebookIcon from '../../assets/images/svg/facebook.svg';
// import AppleIcon from '../../assets/images/svg/apple.svg';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('@example.com');
  const [password, setPassword] = useState('secure123');
  const { login, setLoading, isLoading } = useAuthStore();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { token, user } = await loginRequest(email, password);
      login(user, token);

      switch (user.role.toLowerCase()) {
        case 'student':
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'StudentProfile' }],
            })
          );
          break;
        case 'consultant':
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'ConsultantScreen' }],
            })
          );
          break;
        default:
          Alert.alert('Access Denied', 'Only students and consultants can use this app.');
          break;
      }
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Log in</Text>

            <View style={styles.formContainer}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.inputField}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.link} accessibilityRole="button">
                <Text
                  style={styles.linkText}
                  onPress={() => navigation.navigate('ForgotPassword' as never)}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, isLoading && { opacity: 0.5 }]}
                accessibilityRole="button"
                onPress={handleLogin}
                disabled={isLoading}
              >
                <Text style={styles.buttonText}>
                  {isLoading ? 'Logging in...' : 'Log in'}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <TouchableOpacity style={styles.dividerTextContainer} accessibilityRole="button">
                <Text style={styles.dividerText}>or login with</Text>
              </TouchableOpacity>
              <View style={styles.line} />
            </View>

            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton}>
                {/* <GoogleIcon width={24} height={24} /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                {/* <FacebookIcon width={24} height={24} /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                {/* <AppleIcon width={24} height={24} /> */}
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <AuthFooter
          promptText="Don't have an account?"
          buttonLabel="Sign up"
          onPress={() => navigation.navigate('Signup' as never)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Math.max(20, width * 0.05),
    justifyContent: 'center',
    maxWidth: 400,
    width: '100%',
  },
  formContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: Math.min(30, width * 0.08),
    fontWeight: '700',
    color: 'black',
    lineHeight: Math.min(30, width * 0.08),
    fontFamily: 'Poppins',
    marginBottom: height * 0.03,
    textAlign: 'left',
    // paddingTop: 100,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginTop: 10,
    height: Math.max(56, height * 0.05),
  },
  inputField: {
    flex: 1,
    fontSize: Math.max(14, width * 0.035),
    color: 'black',
    fontFamily: 'Poppins',
    paddingVertical: 0,
  },
  icon: {
    marginLeft: 8,
  },
  label: {
    fontSize: Math.max(16, width * 0.04),
    fontWeight: '400',
    color: 'black',
    lineHeight: Math.max(16, width * 0.04),
    fontFamily: 'Poppins',
    marginTop: height * 0.02,
  },
  dropdownButton: {
    width: '100%',
    height: Math.max(40, height * 0.05),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  dropdownButtonText: {
    flex: 1,
    fontSize: Math.max(16, width * 0.04),
    color: 'black',
    fontFamily: 'Poppins',
  },
  dropdownPlaceholder: {
    flex: 1,
    fontSize: Math.max(16, width * 0.04),
    color: 'gray',
    fontFamily: 'Poppins',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    maxHeight: height * 0.3,
    width: Math.min(width * 0.8, 300),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    paddingVertical: 8,
    paddingHorizontal: 0,
  },
  dropdownItem: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dropdownItemText: {
    fontSize: Math.max(16, width * 0.04),
    color: 'black',
    fontFamily: 'Poppins',
  },
  link: {
    marginTop: height * 0.02,
    alignSelf: 'flex-end',
  },
  linkText: {
    fontSize: Math.max(14, width * 0.035),
    color: 'black',
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: Math.max(14, width * 0.035),
    textAlign: 'right',
    marginBottom: height * 0.02,
  },
  button: {
    width: '100%',
    height: Math.max(56, height * 0.07),
    backgroundColor: '#FFCB4B',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  buttonText: {
    fontSize: Math.max(16, width * 0.04),
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: Math.max(16, width * 0.04),
    color: 'black',
    textAlign: 'center',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    marginTop: height * 0.04,
    marginBottom: height * 0.02,
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    opacity: 0.5,
  },
  dividerText: {
    fontSize: Math.max(14, width * 0.035),
    color: 'black',
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  dividerTextContainer: {
    marginHorizontal: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
  },
  socialButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 108,
    height: 56,
    borderWidth: 1,
    borderColor: 'gray',
    opacity: 0.5,
  },
});
