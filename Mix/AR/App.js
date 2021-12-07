import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const BEST_MATCH_THRESHOLD = 0.5;

import CoreMLImage from "react-native-core-ml-image";

const App = () => {
  const [bestMatch, setBestMatch] = useState(null);

  const onClassification = (classifications) => {
    setBestMatch(null);

    if (classifications && classifications.length > 0) {
      // Loop through all of the classifications and find the best match
      classifications.forEach((classification) => {
        if (!bestMatch || classification.confidence > bestMatch.confidence) {
          setBestMatch(classification);
        }
      });

      // Is best match confidence better than our threshold?
      if (bestMatch.confidence >= BEST_MATCH_THRESHOLD) {
        setBestMatch(bestMatch);
      } else {
        setBestMatch(null);
      }

    } else {
      setBestMatch(null);
    }
  }

  return (
    <View style={styles.container}>
        <CoreMLImage modelFile="AR" onClassification={(evt) => onClassification(evt)}>
            <View style={styles.container}>
              {(() => {
                var classification = null;
                
                if (bestMatch && bestMatch.identifier && bestMatch.identifier == "cemetery") {
                  classification = "🌭 Cemetery 🌭";
                } else {
                  classification = "Not Cemetery";
                }

                return <Text style={styles.info}>{classification}</Text>
              })()}
            </View>
        </CoreMLImage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  info: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: 'center',
    fontWeight: "900",
    margin: 10,
  }
});

export default App;