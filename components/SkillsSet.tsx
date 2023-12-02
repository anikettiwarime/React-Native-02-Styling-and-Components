import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const SkillsSet = () => {
  const skills = [
    {
      id: 1,
      src: 'https://cv.anikettiwari.tech/static/media/html.2ba4fabc69a89a8f71e6.png',
      title: 'HTML',
      backgroundColor: '#FFA07A', // Light Salmon
    },
    {
      id: 2,
      src: 'https://cv.anikettiwari.tech/static/media/css.69a82c2d9e45c933a9cb.png',
      title: 'CSS',
      backgroundColor: '#ADD8E6', // Light Blue
    },
    {
      id: 3,
      src: 'https://cv.anikettiwari.tech/static/media/javascript.1ccd6ef9bb1f9c84ef00.png',
      title: 'Javascript',
      backgroundColor: '#FFD700', // Gold
    },
    {
      id: 4,
      src: 'https://cv.anikettiwari.tech/static/media/react.0cf951a69d8e58f83f9d.png',
      title: 'React',
      backgroundColor: '#4682B4', // Steel Blue
    },
    {
      id: 5,
      src: 'https://cv.anikettiwari.tech/static/media/nextjs.48ddc8121a0fcb543d64.png',
      title: 'Next JS',
      backgroundColor: '#FFFFFF', // White
    },
    {
      id: 6,
      src: 'https://cv.anikettiwari.tech/static/media/django.862376406b582ec5aadf.png',
      title: 'Django',
      backgroundColor: '#90EE90', // Light Green
    },
    {
      id: 7,
      src: 'https://cv.anikettiwari.tech/static/media/graphql.fc6b9451733c620ceb86.png',
      title: 'GraphQl',
      backgroundColor: '#FFC0CB', // Pink
    },
    {
      id: 8,
      src: 'https://cv.anikettiwari.tech/static/media/github.3b9e32903aa89111875d.png',
      title: 'Github',
      backgroundColor: '#808080', // Gray
    },
    {
      id: 9,
      src: 'https://cv.anikettiwari.tech/static/media/tailwind.e47ac876b8d4d0bba47a.png',
      title: 'Tailwind',
      backgroundColor: '#87CEEB', // Sky Blue
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>My Skills</Text>
      <View style={styles.container}>
        {skills.map(({id, src, title, backgroundColor}) => (
          <View
            key={id}
            style={[
              styles.skillCard,
              styles.cardElevated,
              {
                borderLeftColor: backgroundColor,
                borderBottomColor: backgroundColor,
                borderRightColor: backgroundColor,
              },
            ]}>
            <Image
              source={{
                uri: src,
              }}
              style={styles.skillImage}
            />
            <Text style={styles.skillText}>{title}</Text>
          </View>
        ))}
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
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 4,
    justifyContent: 'space-evenly',
  },
  skillCard: {
    height: 120,
    width: '30%',
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardElevated: {
    elevation: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    borderWidth: 1,
    borderRadius: 6,
    borderTopWidth: 0,
  },
  skillImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  skillText: {
    marginVertical: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SkillsSet;
