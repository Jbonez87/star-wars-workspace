module.exports = {
  name: 'star-wars',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/star-wars',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
