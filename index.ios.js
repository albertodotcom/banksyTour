'use strict';

let React = require('react-native');
let {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Navigator,
  View,
  Text,
} = React;

let ArtworksStore = require('./common/stores/ArtworksStore');
let ArtworkList = require('./iosComponents/ArtworkList');
let ArtworkMap = require('./iosComponents/ArtworksMap');
let ArtworkDetails = require('./iosComponents/ArtworkDetails');

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
      selectedTab: 'map',
      artworks: getArtworks().data,
    };
  },

  renderScene(route, navigator) {
    switch (route.id) {
    case 'tab-view':
      return (
        <TabBarIOS navigator={navigator} >

          <TabBarIOS.Item
            title="Artworks"
            systemIcon="more"
            selected={this.state.selectedTab === 'list'}
            onPress={() => {
              this.setState({
                selectedTab: 'list',
              });
            }}>
            <ArtworkList artworks={this.state.artworks} navigator={navigator} />
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
            <ArtworkMap artworks={this.state.artworks} navigator={navigator} />
          </TabBarIOS.Item>

        </TabBarIOS>
      );

    case 'artwork-details':
      return (
        <ArtworkDetails artwork={route.artwork} />
      );

    }
  },

  render() {
    return (
      <Navigator
        ref="navigator"
        renderScene={this.renderScene}
        initialRoute={{id: 'tab-view'}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  },
});

let styles = StyleSheet.create({
});

AppRegistry.registerComponent('banksyTour', () => BanskyTour);
