'use strict';

let React = require('react-native');
let {
  AppRegistry,
  TabBarIOS,
  Navigator,
  StatusBarIOS,
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
      selectedTab: 'list',
      artworks: getArtworks().data,
    };
  },

  renderScene(route, navigator) {
    switch (route.id) {
    case 'tab-view':
      return (
        <TabBarIOS
          translucent={true}
          navigator={navigator}>

          <TabBarIOS.Item
            title="Artworks"
            systemIcon="bookmarks"
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
        <ArtworkDetails artwork={route.artwork} navigator={navigator} />
      );

    }
  },

  render() {
    StatusBarIOS.setStyle('light-content');

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

AppRegistry.registerComponent('banksyTour', () => BanskyTour);
