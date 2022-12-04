/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'STOP: Spoken Task Oriented Parsing',
  tagline: 'A multi-domain compositional spoken language understanding dataset',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/meta_opensource_logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Spoken Task Oriented Parsing',
        items: [
          {
            type: 'doc',
            docId: 'call_for_participation',
            position: 'left',
            label: 'ICASSP 2023 Grand Challenge',
          },
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/facebookresearch/spoken_task_oriented_parsing',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'Privacy',
                href: 'https://opensource.fb.com/legal/privacy/',
              },
              {
                label: 'Terms',
                href: 'https://opensource.fb.com/legal/terms/',
              },
              {
                label: 'Data Policy',
                href: 'https://opensource.fb.com/legal/data-policy/',
              },
              {
                label: 'Cookie Policy',
                href: 'https://opensource.fb.com/legal/cookie-policy/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Meta Open Source Logo',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
          src: '/img/meta_opensource_logo_negative.svg',
          href: 'https://opensource.fb.com',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Meta Platforms, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
