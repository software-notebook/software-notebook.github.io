// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Software Note Book',
  tagline: 'Lets learn and share togather !!!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'software-notebook', // Usually your GitHub org/user name.
  projectName: 'software-notebook.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          id : 'articles',
          routeBasePath: 'articles',
          path: './articles',
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'tech-talks',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'tech-talks',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './tech-talks',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/software-notebook-logo.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/software-notebook-low-resolution-color-logo.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Software Architecture',
          // },
          {
            type: 'docSidebar',
            sidebarId: 'softwareArchitectureSidebar',
            position: 'left',
            label: 'Software Architecture',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'systemDesignSidebar',
            label: 'System Design',
          },
          {to: '/articles', label: 'Articles', position: 'left'},
          {to: '/tech-talks', label: 'Tech Talks', position: 'left'},
          {
            href: '/docs/blogs-to-follow',
            label: 'Top Learning Sources',
            position: 'left',
          },
          {
            href: 'https://github.com/software-notebook/software-notebook.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Contribute',
                to: '/docs/contribute',
              },
            ],
          },
          {
            title: 'Articles',
            items: [
              {
                label: 'Articles',
                to: '/articles',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/software-notebook/software-notebook.github.io',
              },
            ],
          },
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
   
};

module.exports = config;
