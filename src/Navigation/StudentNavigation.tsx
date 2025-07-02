import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Quizes from '../screens/students/Quizes';
import DemoPage from '../screens/students/demo';

export type StudentStackParamList = {
  Quiz: undefined;
  DemoPage: undefined;
};
const Stack = createNativeStackNavigator<StudentStackParamList>();

const StudentNavigation = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Navigator>
        <Stack.Screen
          name="DemoPage"
          component={DemoPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quizes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default StudentNavigation;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});