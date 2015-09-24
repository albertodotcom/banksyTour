'use strict';

let React = require('react-native');
let {
  StyleSheet,
  ListView,
  StatusBarIOS,
} = React;

let ArtworkRowView = require('./ArtworkRowView');

let ArtworkList = React.createClass({

  render() {
    StatusBarIOS.setStyle('light-content');

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <ListView
        dataSource={ds.cloneWithRows(this.props.artworks)}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
    );
  },

  renderMovie(artwork) {
    return (
      <ArtworkRowView
        artwork={artwork}
        navigator={this.props.navigator}
      />
    );
  },
});

let stylesConst = require('../common/constants/Style');
let styles = StyleSheet.create({
  listView: {
    backgroundColor: stylesConst.colors.bgColor,
  },
});

module.exports = ArtworkList;
