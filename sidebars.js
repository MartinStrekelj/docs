/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  mySidebar: [
    {
      type: "doc",
      id: "home",
      label: "Welcome",
    },
    {
      type: "category",
      collapsible: false,
      label: "Overview",
      items: [
        {
          type: "autogenerated",
          dirName: "overview",
        },
      ],
    },
    {
      type: "category",
      collapsible: false,
      label: "Get Started",
      items: [
        {
          type: "autogenerated",
          dirName: "tutorials",
        },
      ],
    },
    {
      type: "category",
      collapsible: false,
      label: "Features",
      items: [
        {
          type: "autogenerated",
          dirName: "features",
        },
      ],
    },
    {
      type: "category",
      collapsible: false,
      label: "Concepts",
      items: [
        {
          type: "autogenerated",
          dirName: "concepts",
        },
      ],
    },
    {
      type: "category",
      collapsible: false,
      label: "Reference",
      items: [
        {
          type: "category",
          collapsible: true,
          label: "SDKs",
          items: [
            {
              type: "autogenerated",
              dirName: "reference/SDKs",
            },
          ],
        },
        // {
        //   type: "doc",
        //   id: "reference/pdp_api_reference",
        //   label: "PDP Reference",
        // },
        {
          type: "doc",
          id: "reference/api_reference",
          label: "API Reference",
        },
        {
          type: "doc",
          id: "reference/api_with_cli",
          label: "Call API with CLI",
        },
      ],
    },
    // {
    //   type: "doc",
    //   id: "tutorial-extras/translate-your-site", // document id
    //   label: "Get translating!", // sidebar label
    // },
    // "tutorial-extras/manage-docs-versions",
    // {
    //   type: "link",
    //   label: "Facebook", // The link label
    //   href: "https://facebook.com", // The external URL
    // },
  ],
};

module.exports = sidebars;
