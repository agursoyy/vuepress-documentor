const fs = require("fs");
const path = require("path");

function getSideBar(folder, title) {
  const extension = [".md"];

  const files = fs.readdirSync(path.join(`${__dirname}/../${folder}`));
  var list = [];
  for (var i in files) {
    var filename = files[i].split(".").slice(0, -1).join(".");
    if (filename.toLowerCase() !== "readme") {
      let fileTitle = filename.split("-").join(" ");
      list.push({
        title: fileTitle[0].toUpperCase() + fileTitle.slice(1),
        path: `${folder}/${filename}`,
      });
    }
  }

  return {
    title: title,
    path: folder,
    collapsable: false, // optional, defaults to true
    sidebarDepth: 1, // optional, defaults to 1
    children: [...list],
  };
}

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
        ...getSideBar("/getting-started", "Getting Started"),
      },
      {
        ...getSideBar(
          "/public-api-method-details",
          "Public Api Method Details"
        ),
      },
    ],
  },
};
