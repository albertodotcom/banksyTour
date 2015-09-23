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
            style={styles.image}
          />
        <View style={styles.description}>
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

let stylesConst = require('../common/constants/Style');
let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: stylesConst.colors.darkGrey,
    marginBottom: 20,
  },
  description: {
    flex: 1,
  },
  image: {
    height: 210,
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    color: '#FFFFFF',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  }
});

module.exports = ArtworkRowView;
