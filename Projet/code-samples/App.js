/**
 * Copyright (c) 2015-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

import React, { useState, useEffect }  from 'react';

import { ViroARSceneNavigator } from 'react-viro';

import { SafeAreaView, View, Text, Dimensions, StyleSheet } from 'react-native';

var arScenes = {
  'Projet' : require('./js/Projet/Projet.js'),
}

const ViroCodeSamplesSceneNavigator = () => {
  return (
    <AR flag="AR" />
  );
};

const AR = (props) => {
  if (props.flag == "AR") {
    return (
      <ViroARSceneNavigator initialScene={{ scene: arScenes['Projet'], }} />
    )
  } else {
    return (
      //<GPS />
      <ViroARSceneNavigator initialScene={{ scene: arScenes['Projet'], }} />
    )
  }
};
/*
const GPS = () => {
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
    const watchId = navigator.geolocation.watchPosition(
      position => setPosition(position.coords),
      err => alert(err.message),
      { enableHighAccuracy: true, timeout: 10000, distanceFilter: 1 },
    );
    return () => navigator.geolocation.clearWatch(watchId);
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
*/
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

// Uncomment the below line to use the ARDrivingCar Demo. Don't forget to set the apiKey variable in ARDrivingCar.js
// ViroCodeSamplesSceneNavigator = require('./js/ARDrivingCarDemo/ARDrivingCar');

module.exports = ViroCodeSamplesSceneNavigator;
