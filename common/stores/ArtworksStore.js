'use strict';

let AppDispatcher = require('../dispatcher/AppDispatcher');
let BaseStore = require('./BaseStore.js');
let ArtworksConstants = require('../constants/ArtworksConstants');

let _artworks = [
  {
    title: 'Balloon Girl',
    img: 'http://www.stencilrevolution.com/photopost/2012/09/Girl-with-a-Balloon-by-Banksy.jpg',
  },
  {
    title: 'Shop Until You Drop',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Shop_Until_You_Drop_by_Banksy.JPG/1280px-Shop_Until_You_Drop_by_Banksy.JPG',
  },
];

class ArtworksStore extends BaseStore {
  getArtworks() {
    return {
      loading: true,
      error: null,
      data: _artworks
    };
  }
}

let artworksStore = new ArtworksStore();

// Register callback to handle all updates
artworksStore.dispatchToken = AppDispatcher.register(function(payload) {
  let action = payload.action;
});

module.exports = artworksStore;
