'use strict';

let React = require('react-native');
let {
  StyleSheet,
  ListView,
} = React;

let ArtworkRowView = require('./ArtworkRowView');

let ArtworkList = React.createClass({

  render() {
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

let styles = StyleSheet.create({
  listView: {
    backgroundColor: '#1B1E22',
  },
});

module.exports = ArtworkList;
