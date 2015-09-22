'use strict';

let React = require('react-native');
let {
  StyleSheet,
  NavigatorIOS,
} = React;

let ArtworkList = require('./ArtworkList');

let ArtworkNavigator = React.createClass({
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          component: ArtworkList,
          title: 'Artworks',
          passProps: {
            artworks: this.props.artworks
          },
        }}
          />
    );
  }
});

let styles = StyleSheet.create({
});

module.exports = ArtworkNavigator;
