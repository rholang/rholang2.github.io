const fetchUrl = require('node-fetch');
const stats = require('../dist/stats.json');

// These are the known splits in the repo that we can look for.
// Once the chunk splitting in the website is more sane, we can definitely look at adding more
const knownSplits = [
  '@atlaskit-internal_editor-core_picker-facade.js',
  '@atlaskit-internal_editor-core-async.js',
  '@atlaskit-internal_smart-media-editor.js',
  '@atlaskit-internal_media-editor-view.js',
  '@atlaskit-internal_media-viewer-pdf-viewer.js',
];

const knownSplitsAssets = stats.assets
  .filter(asset => knownSplits.includes(asset.name))
  .map(asset => ({ ...asset, sizeInKb: (asset.size / 1000).toFixed(2) }));

console.log(knownSplitsAssets);

console.log('Sending analytics events...');

const events = knownSplitsAssets.map(asset => ({
  name: 'atlaskit.build.website.bundle.chunkSizeKb',
  properties: {
    chunkName: asset.name,
    chunkSizeKb: parseFloat(asset.sizeInKb),
  },
}));

