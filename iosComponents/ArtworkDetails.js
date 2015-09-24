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

let ArtworkDetails = React.createClass({
  propTypes: {
    artwork: PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      img: React.PropTypes.string.isRequired,
    }).isRequired,
  },

  _onPressButton() {
    this.props.navigator.pop();
  },

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.details}>
          <Image
            source={{uri: this.props.artwork.img}}
            style={{
              flex: 1,
            }}
            resizeMode='cover'
          />
          <View style={styles.rightContainer}>
            <Text>{this.props.artwork.title}</Text>
          </View>
        </View>

        <TouchableHighlight
          underlayColor='transparent'
          onPress={this._onPressButton}
        >
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableHighlight>

      </View>
    );
  },

});

let stylesConst = require('../common/constants/Style');
let styles = StyleSheet.create({
  container: {
    backgroundColor: stylesConst.colors.bgColor,
    flex: 1,
  },
  backButton: {
    color: '#FFFFFF',
    fontSize: 30,
    padding: 15,
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  details: {
    flex: 1,
    alignItems: 'stretch',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

module.exports = ArtworkDetails;
