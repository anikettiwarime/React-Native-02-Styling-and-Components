import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Node.js 20.6+: Inject .env using --env-file flag
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/D4D12AQG4ALKzlfEsKw/article-cover_image-shrink_600_2000/0/1700747166712?e=1706745600&v=beta&t=DglIY1UTpM2A7dnAYCxxC6J2sKk4hNbf0gYy0ZnETL8',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText} numberOfLines={3}>
            Exciting news for Node.js developers! With Node.js versions 20.6 and
            above, managing environment variables has become even more seamless,
            thanks to the introduction of the --env-file option.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.linkedin.com/pulse/nodejs-206-harnessing-environment-variables-env-file-aniket-tiwari-spstf%3FtrackingId=CPjokUInSGa6er%252BztU6ncQ%253D%253D/?trackingId=CPjokUInSGa6er%2BztU6ncQ%3D%3D',
              )
            }>
            <Text style={styles.buttonLinks}>Read more..</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/anikettiwarime/')
            }>
            <Text style={styles.buttonLinks}>Lets Connect</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  card: {
    height: 360,
    width: 362,
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 6,
  },
  cardElevated: {
    backgroundColor: '#FAD02E',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  cardImage: {
    height: 180,
  },
  bodyContainer: {
    padding: 10,
  },
  bodyText: {
    color: '#000000',
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonLinks: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});

export default ActionCard;
