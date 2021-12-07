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

var HelloWorldSceneAR = createReactClass({
    getInitialState: function () {
        return {
            isTracking: false,
            runAnimation: false,
            scale: [1, 1, 1],
        };
    },

    getARScene: function () {
        return (
            <ViroNode>
                <ViroARImageMarker
                    target={"fredericChpoin"}
                    onAnchorFound={() => this.setState({ runAnimation: true })}
                >
                    <ViroNode
                        dragType="FixedDistance"
                        onDrag={() => { }}
                        onPinch={this._onPinch}
                        rotation={[-90, 0, 0]}
                        scale={this.state.scale}
                        key="card"
                    >

                        <ViroNode
                            position={[1, 0, 0]}
                            animation={{
                                name: 'animateImage',
                                run: this.state.runAnimation
                            }}
                        >


                            <ViroFlexView
                                position={[0.075, 0, -0.001]}
                                height={0.15}
                                width={0.15}
                                backgroundColor="rgba(0, 0, 0, 0.5)"
                                style={{ flexDirection: "column", alignItems: "center" }}
                            >

                                <ViroText
                                    text="Frederic Chopin"
                                    textClipMode="None"
                                    textLineBreakMode="None"
                                    style={styles.name}
                                    scale={[.04, .04, .04]}
                                />

                                <ViroImage
                                    width={0.07}
                                    style={styles.image}
                                    source={require('./res/avatar.jpg')}
                                />



                            </ViroFlexView>

                        </ViroNode>


                    </ViroNode>
                </ViroARImageMarker>
            </ViroNode>
        )
    },

    render: function () {
        return (
            <ViroARScene onTrackingUpdated={this._onTrackingUpdated}>
                { !this.state.isTracking && this.getARScene()}
            </ViroARScene>
        );
    },

    _onTrackingUpdated: function (state, reason) {
        if (state == ViroConstants.TRACKING_NORMAL) {
            isTracking: true
        } else if (state == ViroConstants.TRACKING_NONE) {
            isTracking: false
        }
    },

    _onPinch: function(pinchState, scaleFactor, source) {
        if (pinchState == 2) {
            if (this.state.scale[0] * scaleFactor > 1 && this.state.scale[0] * scaleFactor < 5) {
                this.setState({
                    scale: [this.state.scale[0] * scaleFactor, this.state.scale[1] * scaleFactor, 1],
                })
            }
        } else if (pinchState == 3) {
            // update scale of obj by multiplying by scaleFactor when pinch ends. 
            return;
        }
        //set scale using native props to reflect pinch. 
    },
});

var styles = StyleSheet.create({
    textStyle: {
        flex: .5,
        fontFamily: 'Roboto',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    card: {
        flexDirection: 'column'
    },
    cardWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 0.001,
        flex: .5
    },
    subText: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: .5
    },

    name: {
        fontFamily: 'Roboto',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: .3,
    },
    image: {
        flex: .5,
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#ffffff',
        alignSelf: "stretch",
        textAlign: 'left',
    }
});

ViroARTrackingTargets.createTargets({
    "fredericChpoin": {
        source: require('./res/chopin.jpg'),
        orientation: "Up",
        physicalWidth: 0.1 // real world width in meters
    }
});

ViroMaterials.createMaterials({
    imagePlaceholder: {
        diffuseColor: "rgba(255,255,255,1)"
    },
    quad: {
        diffuseColor: "rgba(0,0,0,0.5)"
    },
});

ViroAnimations.registerAnimations({
    animateImage: {
        properties: {
            positionX: 0.05,
            opacity: 1.0
        },
        easing: "Bounce",
        duration: 500
    },
    animateViro: {
        properties: {
            positionZ: 0.02,
            opacity: 1.0,
        },
        easing: "Bounce",
        duration: 500
    }
});

module.exports = HelloWorldSceneAR;
