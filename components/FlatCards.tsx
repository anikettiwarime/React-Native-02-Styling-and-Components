import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Yellow</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {flex: 1, flexDirection: 'row'},
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#FF3E4D',
  },
  cardTwo: {
    backgroundColor: '#74B9FF',
  },
  cardThree: {
    backgroundColor: '#FAD02E',
  },
  cardFour: {
    backgroundColor: '#1BCA9B',
  },
});
