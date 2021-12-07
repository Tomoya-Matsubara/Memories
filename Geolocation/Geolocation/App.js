/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const App: () => React$Node = () => {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    speed: 0,
  });

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => setPosition(position.coords),
      err => alert(err.message),
      { enableHighAccuracy: true, timeout: 10000, distanceFilter: 1 },
    );
    return () => Geolocation.clearWatch(watchId);
  }, []);

  return (
    <SafeAreaView style={styles.debugContainer}>
      <Text>{`coords: {`}</Text>
      {Object.keys(position).map(key => {
        return <Text key={key}>{`  ${key} : ${position[key]}`}</Text>;
      })}
      <Text>{`}`}</Text>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
  debugContainer: {
    backgroundColor: '#fff',
    opacity: 0.8,
  },
});


export default App;
