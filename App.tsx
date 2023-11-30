import {View, SafeAreaView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <FlatCards />
      </View>
    </SafeAreaView>
  );
};

export default App;
