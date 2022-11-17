const metagen = require("eleventy-plugin-metagen");

module.exports = function (eleventyConfig) {
  // COLLECTIONS EN
  eleventyConfig.addCollection("events_en", require("./src/_11ty/collections/events_en.js"));
  eleventyConfig.addCollection("posts_en", require("./src/_11ty/collections/posts_en.js"));
  // COLLECTIONS TR
  eleventyConfig.addCollection("events_tr", require("./src/_11ty/collections/events_tr.js"));
  eleventyConfig.addCollection("posts_tr", require("./src/_11ty/collections/posts_tr.js"));
  // FILTERS
  eleventyConfig.addFilter("dateFeed", require("./src/_11ty/filters/date.js").dateFeed);
  eleventyConfig.addFilter("dateFormat", require("./src/_11ty/filters/date.js").dateFormat);
  eleventyConfig.addFilter("dateFull", require("./src/_11ty/filters/date.js").dateFull);
  eleventyConfig.addFilter("dateIso", require("./src/_11ty/filters/date.js").dateIso);
  eleventyConfig.addFilter("dateYear", require("./src/_11ty/filters/date.js").dateYear);
  // COPY
  eleventyConfig.addPassthroughCopy("./src/assets");
  // META
  eleventyConfig.addPlugin(metagen);
  // MULTIPLE FILTER ARGUMENTS
  eleventyConfig.addNunjucksFilter("topla", function (arg1, arg2, arg3) {
    return arg1 + arg2 + arg3;
  });
  // CONFIG
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
