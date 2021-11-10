//@ts-check

import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import GeoTIFF from 'ol/source/GeoTIFF';
import WebGLTileLayer from 'ol/layer/WebGLTile';
import OSM from 'ol/source/OSM';

const fakeTiff = new GeoTIFF({
  sources:[
    {
      url : "/faketifftwo.tiff"
    }
  ]
});

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    new WebGLTileLayer({
      style: {
        saturation: -0.3,
      },
      source: fakeTiff
    })
  ],
  target: 'map',
  view: fakeTiff.getView()
});
