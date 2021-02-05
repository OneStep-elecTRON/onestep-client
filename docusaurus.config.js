module.exports = {
  title: "One Step",
  tagline: "Python Programming - Data Science - Machine Learning",
  url: "https://onestep-electron.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "OneStep-elecTRON", // Usually your GitHub org/user name.
  projectName: "onestep-electron.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "One Step",
      logo: {
        alt: "onestep-logo",
        src: "img/logo-allblack-half.png",
      },
      items: [
        {
          to: "docs/machine-learning-tracks",
          label: "ML Tracks",
          position: "left",
        },
        {
          to: "docs/python-crash-course",
          label: "Python Crash Course",
          position: "left",
        },
        {
          href: "https://github.com/OneStep-elecTRON/onestep-electron.github.io",
          label: "GitHub",
          position: "right",
        },
        {
          to: "/me",
          label: "My Account",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Machine Learning",
          items: [
            {
              label: "Easy Track",
              to: "docs/EasyTrack/",
            },
            {
              label: "Intermediate Track",
              to: "docs/IntermediateTrack/",
            },
            {
              label: "Advanced Track",
              to: "docs/AdvancedTrack/",
            }
          ],
        },
        {
          title: "Python",
          items: [
            {
              label: "Crash Course",
              href: "docs/python-crash-course",
            },
          ],
        },
        {
          title: "Data Science",
          items: [
            {
              label: "Coming Soon",
              href: "https://github.com/OneStep-elecTRON/onestep-electron.github.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} One Step, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/OneStep-elecTRON/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/OneStep-elecTRON/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
