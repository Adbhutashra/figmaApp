// screens/HomePage.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Splash from '../assets/splash.svg';
import BlackDot from '../assets/roundeddot.svg';
import YoutubeIcon from '../assets/youtube.svg';
import InstagramIcon from '../assets/instagram.svg';
import StarIcon from '../assets/star.svg';
import SearchIcon from '../assets/search.svg';

const data = [
  {
    id: '1',
    image: require('../assets/dummy.png'),
    content: 'technology',
    description:
      'Step Into Tomorrow: Exploring\nSpatial Computing’s Impact On\nIndustries And The Metaverse!',
    date: '26 Feb 2024',
  },
  {
    id: '2',
    image: require('../assets/dummy.png'),
    content: 'technology',
    description:
      'Step Into Tomorrow: Exploring\nSpatial Computing’s Impact On\nIndustries And The Metaverse!',
    date: '26 Feb 2024',
  },
  {
    id: '3',
    image: require('../assets/dummy.png'),
    content: 'technology',
    description:
      'Step Into Tomorrow: Exploring\nSpatial Computing’s Impact On\nIndustries And The Metaverse!',
    date: '26 Feb 2024',
  },
];

const data2 = [
  {
    id: '1',
    image: require('../assets/dummy2.png'),
    content: 'technology',
    title: 'Step Into Tomorrow: ',
    description:
      'Exploring Spatial\nComputing’s Impact\nOn Industries And The\nMetaverse!',
    date: '26 Feb 2024',
  },
  {
    id: '2',
    image: require('../assets/dummy2.png'),
    content: 'technology',
    title: 'Step Into Tomorrow: ',
    description:
      'Exploring Spatial\nComputing’s Impact\nOn Industries And The\nMetaverse!',
    date: '26 Feb 2024',
  },
  {
    id: '3',
    image: require('../assets/dummy2.png'),
    content: 'technology',
    title: 'Step Into Tomorrow: ',
    description:
      'Exploring Spatial\nComputing’s Impact\nOn Industries And The\nMetaverse!',
    date: '26 Feb 2024',
  },
];

const data3 = [
  {
    id: '1',
    image: require('../assets/dummy3.png'),
    description:
      'The Ultimate Guide To\nSimplifying Your Routine\nWith Generative AI\nAutomation!',
  },
  {
    id: '2',
    image: require('../assets/dummy3.png'),
    description:
      'The Ultimate Guide To\nSimplifying Your Routine\nWith Generative AI\nAutomation!',
  },
  {
    id: '3',
    image: require('../assets/dummy3.png'),
    description:
      'The Ultimate Guide To\nSimplifying Your Routine\nWith Generative AI\nAutomation!',
  },
];

const {width, height} = Dimensions.get('window');

export default function HomePage() {
  const renderItem = ({item}) => {
    const [title, ...rest] = item.description.split(': ');
    const description = rest.join(': ');
    return (
      <View style={styles.card}>
        <View>
          <Image source={item.image} style={styles.image} />
          <View style={styles.youtubeIconContainer}>
            <YoutubeIcon />
          </View>
          <View style={styles.starIconContainer}>
            <StarIcon />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            <BlackDot />
            <Text style={styles.contentText}>{item.content}</Text>
          </View>
          <Text style={styles.description}>
            <Text style={styles.title}>{title}:</Text> {description}
          </Text>
        </View>
        <Text style={[styles.date, {left: 20}]}>{item.date}</Text>
      </View>
    );
  };

  const renderItem2 = ({item}) => (
    <View style={styles.card2}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.image2} source={item.image} />
        <View style={styles.youtubeIconContainer2}>
          <YoutubeIcon />
        </View>
        <View style={{marginTop: height * 0.1, right: width * 0.1}}>
          <View style={styles.row}>
            <BlackDot />
            <Text style={styles.contentText}>{item.content}</Text>
          </View>
          <Text style={styles.title2}>{item.title}</Text>
          <Text style={styles.description2}>{item.description}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    </View>
  );

  const renderItem3 = ({item}) => {
    return (
      <View style={styles.card3}>
        <Image source={item.image} style={styles.image3} />
        <View style={styles.youtubeIconContainer}>
          <InstagramIcon />
        </View>
        <Text style={styles.description3}>{item.description}</Text>
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{padding: 20}}>
        <View style={styles.header}>
          <Splash width={width * 0.1} height={height * 0.1} />
          <View style={styles.spacer} />
          <View style={styles.searchBar}>
            <TextInput
              placeholder="Search ...."
              placeholderTextColor="#929292"
              style={styles.searchInput}
            />
            <SearchIcon style={{position: 'absolute', right: 30, top: 10}} />
          </View>
        </View>
        <View>
          <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.flatList}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{marginTop: 30, flexDirection: 'row'}}>
          <View style={styles.divider}></View>
          <View style={styles.dots}></View>
          <View style={styles.dots}></View>
          <View style={styles.dots}></View>
        </View>

        <Text style={styles.category}>Recent Articles</Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FlatList
            data={data2}
            scrollEnabled={false}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
            contentContainerStyle={[styles.flatList, {paddingHorizontal: 5}]}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View all</Text>
          </View>
        </View>
      </View>
      <View style={styles.blackContainer}>
        <View style={{marginTop: 50, marginLeft: 30}}>
          <Text style={styles.socialConnect}>Social Connect</Text>
          <Text style={styles.stayUpdate}>
            Stay update with my latest post{'\n'}on your favorite platforms
          </Text>
        </View>
        <View>
          <View style={{padding: 20}}>
            <FlatList
              horizontal
              data={data3}
              renderItem={renderItem3}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.flatList}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  spacer: {
    flex: 8,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    flex: 9,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 10,
    paddingLeft: 20,
    flex: 4,
  },
  flatList: {
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
    width: width * 0.71,
    height: height * 0.53,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
    width: width * 0.71,
    height: height * 0.3,
  },
  contentContainer: {
    alignItems: 'flex-start',
    left: 20,
  },

  youtubeIconContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'black',
    height: 40,
    width: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    marginLeft: width * 0.45,
    backgroundColor: '#D9D9D9',
    width: width * 0.25,
    height: height * 0.01,
    borderRadius: 20,
  },
  dots: {
    marginLeft: 10,
    backgroundColor: '#D9D9D9',
    width: width * 0.02,
    height: height * 0.01,
    borderRadius: 20,
  },
  youtubeIconContainer2: {
    backgroundColor: 'black',
    height: 40,
    width: 40,
    marginLeft: 25,
    marginTop: 25,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  starIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'black',
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contentText: {
    bottom: 3,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Strawford-Medium',
    color: 'black',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Strawford-Bold',
    color: 'black',
    lineHeight: 24,
  },
  title2: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: '700',
    fontFamily: 'Strawford-Bold',
    color: 'black',
    lineHeight: 24,
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Strawford-Medium',
    color: 'black',
    lineHeight: 24,
  },
  description2: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Strawford-Medium',
    color: 'black',
    lineHeight: 24,
  },

  description3: {
    padding: 15,
    fontFamily: 'Strawford-Medium',
    fontWeight: '400',
    color: 'black',
    fontSize: 12,
    lineHeight: 20,
  },
  date: {
    position: 'absolute',
    bottom: 20,
    fontFamily: 'Strawford-Medium',
    fontWeight: '500',
    fontSize: 12,
    color: '#929292',
  },
  category: {
    marginTop: 40,
    fontSize: 22,
    fontFamily: 'Strawford-Bold',
    color: 'black',
  },
  card2: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginRight: 10,
    marginTop: height * 0.05,
    width: width * 0.9,
    height: height * 0.41,
  },
  image2: {
    width: width * 0.4,
    height: height * 0.41,
  },
  viewAllButton: {
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.55,
    height: height * 0.06,
    marginTop: 30,
  },
  viewAllText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Strawford-Medium',
    fontWeight: '500',
    lineHeight: 18,
  },
  blackContainer: {
    backgroundColor: 'black',
    height: height * 0.9,
    width: width,
    marginTop: 20,
  },
  socialConnect: {
    color: 'white',
    fontFamily: 'Strawfold-Bold',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 30,
  },
  stayUpdate: {
    color: 'white',
    fontFamily: 'Strawfold-Medium',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 25,
    marginTop: 5,
  },
  card3: {
    backgroundColor: '#fff',
    borderRadius: 26,
    marginRight: 20,
    width: width * 0.57,
    height: height * 0.54,
  },
  image3: {
    width: width * 0.57,
    height: height * 0.38,
  },
});
