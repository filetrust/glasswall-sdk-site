module.exports = {
  title: "Glasswall Documentation",
  tagline: "",
  url: "https://filetrust.github.io",
  baseUrl: "/glasswall-sdk-site/",
  favicon: "img/favicon.ico",
  organizationName: "filetrust", // Usually your GitHub org/user name.
  projectName: "glasswall-sdk-site", // Usually your repo name.
  onBrokenLinks: 'log',
  themeConfig: {
    navbar: {
      title: "Glasswall Documentation",
      logo: {
        alt: "Glasswall Logo",
        src: "img/glasswall_logo_blue.png"
      },
      items: [
        {
          to: "docs/1-introduction",
          activeBasePath: "docs",
          label: "Documents",
          position: "left",
        },
/*         {
          href: "https://medium.com/glasswall-engineering",
          label: "Blog",
          position: "left",
        },
  */       {
          href: "https://github.com/filetrust",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/products/cloud-sdk/rebuild/rebuild-quickstart",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/glasswall",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/filetrust",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/glasswallglobal",
            },
			           {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/glasswall-solutions-limited/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Glasswall Solutions Ltd. Built with Docusaurus.`,
    },
    gtag: {
      trackingID: 'UA-165717322-1'
    }
  },
  scripts: [
    {
      src: `/glasswall-sdk-site/js/fix-location.js`,
      async: false,
      defer: false
    }
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
