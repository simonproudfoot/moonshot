//in vue.config.js file
module.exports = {

  

  filenameHashing: false,

  configureWebpack: {
      module: {
          rules: [
              {
                  test: /\.(glb)(\?.*)?$/,
                  use: [{
                      loader: 'file-loader',
                      options: {}
                  }]
              },

              {
                  test: /\.(gltf)(\?.*)?$/,
                  use: [{
                      loader: 'file-loader',
                      options: {}
                  }]
              },
          ]
      }
  }

}