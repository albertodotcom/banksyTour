'use strict';

let React = require('react-native');
let {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} = React;

let PropTypes = React.PropTypes;

let ArtworkDetails = React.createClass({
  propTypes: {
    artwork: PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      img: React.PropTypes.string.isRequired,
    }).isRequired
  },

  _onPressButton() {
    this.props.navigator.pop();
  },

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.details}>
          <Image
            source={{uri: this.props.artwork.img}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{this.props.artwork.title}</Text>
          </View>
        </ScrollView>
        <View style={styles.top}>
          <TouchableHighlight onPress={this._onPressButton}>
            <Text>Back</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  },

});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    // backgroundColor: 'rgba(255,255,255,0.5)',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 80,
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

module.exports = ArtworkDetails;
