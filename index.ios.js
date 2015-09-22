'use strict';

let React = require('react-native');
let {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
} = React;

let ArtworksStore = require('./common/stores/ArtworksStore');
let ArtworkNavigator = require('./iosComponents/ArtworkNavigator');
let ArtworkMap = require('./iosComponents/ArtworksMap');

function getArtworks() {
  return ArtworksStore.getArtworks();
}

let BanskyTour = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'TabBarExample',

  getInitialState: function() {
    return {
      selectedTab: 'list',
      artworks: getArtworks().data,
    };
  },

  render() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue">

        <TabBarIOS.Item
          title="Artworks"
          systemIcon="more"
          selected={this.state.selectedTab === 'list'}
          onPress={() => {
            this.setState({
              selectedTab: 'list',
            });
          }}>
          <ArtworkNavigator artworks={this.state.artworks} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Map"
          systemIcon="more"
          selected={this.state.selectedTab === 'map'}
          onPress={() => {
            this.setState({
              selectedTab: 'map',
            });
          }}>
          <ArtworkMap artworks={this.state.artworks} />
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  },
});

let styles = StyleSheet.create({
});

AppRegistry.registerComponent('banksyTour', () => BanskyTour);
