'use strict';

let React = require('react-native');
let {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  Image,
} = React;

let ArtworksStore = require('./common/stores/ArtworksStore');

function getArtworks() {
  return ArtworksStore.getArtworks();
}

let BanskyTour = React.createClass({
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
      <ArtworkRowView artwork={artwork} />
    );
  },
});

let PropTypes = React.PropTypes;

let ArtworkRowView = React.createClass({
  propTypes: {
    artwork: PropTypes.shape({
      title: React.PropTypes.isRequired,
      img: React.PropTypes.isRequired,
    }).isRequired
  },

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: this.props.artwork.img}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{this.props.artwork.title}</Text>
        </View>
      </View>
    );
  },

});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  }
});

AppRegistry.registerComponent('banksyTour', () => BanskyTour);
