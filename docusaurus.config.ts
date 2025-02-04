import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Singleton Matrix',
  tagline: 'Explore, Learn, Innovate',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  // Set the production URL of your site (your custom domain)
  url: 'https://singletonmatrix.com', // Custom domain
  // Set the base URL where your site is served
  // '/' for custom domain, '/singletonmatrix/' for GitHub Pages default URL
  baseUrl: '/',

  // GitHub Pages deployment config
  organizationName: 'rahulkumar-aws', // Your GitHub username
  projectName: 'singletonmatrix', // Your GitHub repository name

  onBrokenLinks: 'throw', // Stop the build for broken links
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'), // Sidebar configuration
          editUrl: 'https://github.com/rahulkumar-aws/singletonmatrix/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'], // Enable RSS and Atom feeds
            xslt: true,
          },
          editUrl: 'https://github.com/rahulkumar-aws/singletonmatrix/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Path to custom CSS
        },
      } satisfies Preset.Options),
    ],
  ],

  themeConfig: {
    // Replace with your project's social image
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Singleton Matrix',
      logo: {
        alt: 'Singleton Matrix Logo',
        src: 'img/logo.svg', // Path to your logo
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // Reference the tutorial sidebar
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/rahulkumar-aws/singletonmatrix',
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
              label: 'Tutorial',
              to: '/docs/azure/index', // Path to the intro doc
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rahulkumar-aws/singletonmatrix',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Singleton Matrix, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;