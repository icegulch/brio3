const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");
require('dotenv').config();
const isProduction = process.env.ELEVENTY_ENV === `production`;

module.exports = function (eleventyConfig) {

  eleventyConfig.addGlobalData('env', process.env);

  // Let some files pass through to public
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("./src/fonts");

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Return a subset of an array based on attr
  eleventyConfig.addFilter("allButCurrent", function (arr, currPage) {
    // Filters out current page
    const pageArr = arr.filter((page) => page.url !== currPage);
    return pageArr;
  });

  eleventyConfig.addFilter("pluckFromSelection", function (arr, selections, attr) {
    return arr.filter((item) => selections.includes(item[attr]));
  });

  eleventyConfig.addFilter("pluckByValue", function (arr, value, attr) {
    return arr.filter((item) => item[attr] === value);
  });

  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });

  eleventyConfig.addFilter("slice", function (arr, start) {
    return arr.slice(start, arr.length);
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
    if( isProduction && outputPath && outputPath.endsWith(".html") ) {
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
