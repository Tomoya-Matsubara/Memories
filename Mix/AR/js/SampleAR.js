'use strict';

import React from 'react';

import { StyleSheet } from 'react-native';

import {
    ViroARScene,
    ViroDirectionalLight,
    ViroBox,
    ViroConstants,
    ViroARTrackingTargets,
    ViroMaterials,
    ViroText,
    ViroImage,
    ViroFlexView,
    ViroARImageMarker,
    ViroARObjectMarker,
    ViroAmbientLight,
    ViroARPlane,
    ViroAnimatedImage,
    ViroAnimations,
    ViroNode,
    Viro3DObject,
    ViroQuad
} from 'react-viro';


var createReactClass = require('create-react-class');

var SampleAR = createReactClass({
    getInitialState: function () {
        return {
            text: "Initializing AR...",
        };
    },

    render: function () {
        return (
            <ViroARScene onTrackingUpdated={this._onTrackingUpdated}>
                <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
            </ViroARScene>
        );
    },

    _onTrackingUpdated: function (state, reason) {
        if (state == ViroConstants.TRACKING_NORMAL) {
            this.setState({text: "Hello world!"});
        } else if (state == ViroConstants.TRACKING_NONE) {
            this.setState({text: "None"});
        }
    },
});


const styles = StyleSheet.create({
    helloWorldTextStyle: {
      fontFamily: 'Arial',
      fontSize: 30,
      textAlignVertical: 'center',
      textAlign: 'center',
    },
});

module.exports = SampleAR;