const path = require('path')

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.nomnoml$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/img/[name].[hash:8].svg'
              }
            },
            {
              loader: path.resolve('src/.vuepress/loaders/nomnoml')
            }
          ]
        }
      ]
    }
  },
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json', crossorigin: 'use-credentials' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#00b0ff' }],
    ['meta', { name: 'msapplication-TileColor', content: '#2d89ef' }],
    ['meta', { name: 'theme-color', content: '#00b0ff' }]
  ],
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: false,
      updatePopup: false
    }
  },
  themeConfig: {
    displayAllHeaders: true,
    docsRepo: 'CudoVentures/cudos-network-docs',
    editLinks: true,
    nav: [

    ],
    logo: '/CudosIconTransparent.png',
    repo: 'CudoVentures/cudos-network-docs',
    sidebar: {
      '/': [
        '/docs/learn-cudos/',
        '/docs/build-and-earn/',
        '/docs/become-a-validator/',
        '/foundation-and-grants/',
      ]
    }
  },
  title: 'CUDOS Docs'
}
