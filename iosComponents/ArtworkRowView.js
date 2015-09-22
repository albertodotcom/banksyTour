'use strict';

let React = require('react-native');
let {
  StyleSheet,
  Text,
  View,
  Image,
} = React;

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
  title: {
    fontSize: 20,
    textAlign: 'center',
  }
});

module.exports = ArtworkRowView;
