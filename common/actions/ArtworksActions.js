'use strict';

let AppDispatcher = require('../dispatcher/AppDispatcher');
let ArtworksConstants = require('../constants/ArtworksConstants');

let ArtworksActions = {
  getArtworks() {
    AppDispatcher.handleViewAction({
      actionType: ArtworksConstants.GET_ARTWORKS,
    });
  },
};

module.exports = ArtworksActions;
