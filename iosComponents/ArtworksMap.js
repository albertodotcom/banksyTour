'use strict';

var React = require('react-native');
var {
  MapView,
  StyleSheet,
  View,
} = React;

var MapViewExample = React.createClass({

  getInitialState() {
    return {
      mapRegion: {
        latitude: 51.516398,
        longitude: -0.129516,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      },
      annotations: null
    };
  },

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          annotations={this.props.annotations}
          showsUserLocation={true}
        />
      </View>
    );
  },

});

var styles = StyleSheet.create({
  map: {
    flex: 1,
  }
});

module.exports = MapViewExample;
