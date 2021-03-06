module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    svgSprite: {
      /*
			 * The directory containing your SVG files.
			 */
      dir: 'public/icons',
      /*
			 * The reqex that will be used for the Webpack rule.
			 */
      test: /icons\/(-?\w\/?){0,}\.svg(\?.*)?$/,
      /*
			 * @see https://github.com/kisenka/svg-sprite-loader#configuration
			 */
      // loaderOptions: {
      //   extract: true,
      //   spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
      // },
      // /*
			//  * @see https://github.com/kisenka/svg-sprite-loader#configuration
			//  */
      // pluginOptions: {
      //   plainSprite: true
      // }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
}
