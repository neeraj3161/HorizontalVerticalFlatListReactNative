import React from 'react';
import { View, StyleSheet } from 'react-native';
import HorizontalFlatList from './src/HorizontalFlatList';

const App = () => {
  return (
    <View style={styles.container}>
      <HorizontalFlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;