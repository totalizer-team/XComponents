import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['/logo.png'],
  themeConfig: {
    title: 'XComponents',
    name: 'XComponents',
    logo: '/logo.png',
    socialLinks: {
      github: 'https://github.com/totalizer-team/XForm',
    },
    footer: 'Open-source MIT Licensed | Copyright © 2024-present',
  },
  locales: [{ id: 'en-US', name: 'English', suffix: '' }],
});
