import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <FancyCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
