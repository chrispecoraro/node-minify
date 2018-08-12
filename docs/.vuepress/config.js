module.exports = {
  title: 'Node-minify',
  description: 'Full documentation of node-minify',
  head: [['link', { rel: 'manifest', href: '/manifest.json' }], ['meta', { name: 'theme-color', content: '#3eaf7c' }]],
  serviceWorker: true,
  evergreen: true,
  ga: 'UA-65399-7',
  themeConfig: {
    serviceWorker: {
      updatePopup: true
    },
    nav: [
      {
        text: 'Releases',
        link: 'https://github.com/srod/node-minify/releases'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/srod/node-minify'
      },
      {
        text: 'NPM',
        link: 'https://www.npmjs.com/package/node-minify'
      }
    ],
    sidebar: [
      {
        title: '',
        collapsable: false,
        children: [['', 'Introduction'], 'getting-started', 'options', 'cli']
      },
      {
        title: 'Compressors',
        collapsable: false,
        children: [
          'compressors/babel-minify',
          'compressors/clean-css',
          'compressors/crass',
          'compressors/csso',
          'compressors/gcc',
          'compressors/sqwish',
          'compressors/uglify-es',
          'compressors/uglify-js',
          'compressors/yui'
        ]
      }
    ]
  }
};