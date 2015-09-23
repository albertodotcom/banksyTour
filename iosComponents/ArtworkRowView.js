'use strict';

let React = require('react-native');
let {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
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
      <TouchableHighlight onPress={this._onPressButton.bind(this, this.props.artwork)}>
        <View style={styles.container}>
          <Image
            source={{uri: this.props.artwork.img}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{this.props.artwork.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  _onPressButton(artwork) {
    this.props.navigator.push({
      id: 'artwork-details',
      artwork: artwork,
    });
  }

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
