module.exports = {
  name: "nx-build-error",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/nx-build-error/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
