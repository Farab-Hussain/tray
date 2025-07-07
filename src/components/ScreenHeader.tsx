import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  title: string;
  style?: any;
  children?: React.ReactNode;
}

const ScreenHeader: React.FC<Props> = ({ title, style, children }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = {
  container: {
    // Add your styles here
  },
  title: {
    // Add your styles here
  },
};

export default ScreenHeader; 