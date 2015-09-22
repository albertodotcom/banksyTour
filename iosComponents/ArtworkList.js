'use strict';

let React = require('react-native');
let {
  StyleSheet,
  ListView,
} = React;

let ArtworksStore = require('../common/stores/ArtworksStore');
let ArtworkRowView = require('./ArtworkRowView');

function getArtworks() {
  return ArtworksStore.getArtworks();
}

let ArtworkList = React.createClass({
  getInitialState() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(getArtworks().data),
    };
  },

  componentDidMount() {
    ArtworksStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    ArtworksStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(getArtworks().data)
    });
  },

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
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
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = ArtworkList;
