var getChildren = require("./childscript");

module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/getting-started" },
    ],
    sidebar: [
      {
        title: "Getting Started", // required
        path: "/getting-started/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
          {
            title: "Getting an Access Token",
            path: "/getting-started/getting-an-access-token",
          },
          {
            title: "Building a Request",
            path: "/getting-started/building-a-request",
          },
        ],
      },
      {
        title: "Public API Method Details", // required
        path: "/public-api-method-details/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: getChildren("./docs/public-api-method-details/"),
      },
    ],
  },
};
