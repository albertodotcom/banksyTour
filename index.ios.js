'use strict';

let React = require('react-native');
let {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
} = React;

let ArtworkNavigator = require('./iosComponents/ArtworkNavigator');
let ArtworkMap = require('./iosComponents/ArtworksMap');

let BanskyTour = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'TabBarExample',

  getInitialState: function() {
    return {
      selectedTab: 'list',
      notifCount: 0,
      presses: 0,
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
          <ArtworkNavigator />
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
          <ArtworkMap />
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  },
});

let styles = StyleSheet.create({
});

AppRegistry.registerComponent('banksyTour', () => BanskyTour);
