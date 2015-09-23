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

        <View style={styles.top}>
          <Text style={styles.title}>{this.props.artwork.title}</Text>
          <TouchableHighlight
            underlayColor='transparent'
            onPress={this._onPressButton}
          >
            <Text style={styles.backButton}>{'<'}</Text>
          </TouchableHighlight>
        </View>

        <ScrollView style={styles.details}>
          <Image
            source={{uri: this.props.artwork.img}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text>{this.props.artwork.title}</Text>
          </View>
        </ScrollView>
      </View>
    );
  },

});

let stylesConst = require('../common/constants/Style');
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesConst.colors.bgColor,
  },
  top: {
    height: 65,
    backgroundColor: stylesConst.colors.darkGrey,
  },
  title: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingTop: 25,
  },
  backButton: {
    color: '#FFFFFF',
    fontSize: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 15,
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
});

module.exports = ArtworkDetails;
