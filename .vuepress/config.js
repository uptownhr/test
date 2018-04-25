module.exports = {
  title: 'About James',
  description: 'From Glendora',
  "pages": [
    {
      "path": "/z",
      "title": "VuePress",
      "frontmatter": {}
    }
  ],
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Guide', link: '/guide/'},
      {text: 'External', link: 'https://google.com'},
      {text: 'Z', link: '/z/'}
    ],
    sidebar: {
      '/z/': genSidebarConfig('Z'),
      //'/z': genSidebarConfig('x')
    }
  }
}

function genSidebarConfig(title) {
  console.log('wtf')
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'z'
      ]
    }

  ]
}