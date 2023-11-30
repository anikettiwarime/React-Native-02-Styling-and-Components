import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = (): React.JSX.Element => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>One</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Two</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Three</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Four</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Five</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Six</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {flex: 1},
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#1287A5',
    elevation: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#FFFFFF',
  },
});

export default ElevatedCards;
