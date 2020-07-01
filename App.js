/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lang: 0,
    }
  }

  componentDidMount() {
    this.getCoords()
  }

  getCoords = () => {
    const options = {
      enableHighAccuracy: true
    }

    Geolocation.getCurrentPosition(info => {
      this.setState({
        lat: parseFloat(info.coords.latitude),
        long: parseFloat(info.coords.longitude)
      })
    }, err => console.log(err), options)
  }

  render() {
    const { lat, long } = this.state

    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});