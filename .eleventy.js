// To inspect
const inspect = require("util").inspect;

// To minify HTML
const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");


module.exports = function (eleventyConfig) {

  // Let some files pass through to public
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("./src/fonts");

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Allow for inspection
  eleventyConfig.addFilter("debug", (content) => `${inspect(content)}`);

  // Return a subset of an array based on attr
  eleventyConfig.addFilter("allButCurrent", function (arr, currPage) {
    // Filters out current page
    const pageArr = arr.filter((page) => page.url !== currPage);
    return pageArr;
  });

  // Helper to sort pages collection by frontmatter "order"
  eleventyConfig.addCollection("orderedPages", function (collection) {
    return collection.getFilteredByTag("pages").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  // Helper to sort products collection by frontmatter "order"
  eleventyConfig.addCollection("orderedProducts", function (collection) {
    return collection.getFilteredByTag("products").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  // Minify HTML Output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if( outputPath && outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
