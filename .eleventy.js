module.exports = function(eleventyConfig) {

	  eleventyConfig.addPassthroughCopy("img"); 
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("script.js");
    eleventyConfig.addPassthroughCopy("js"); 

  return {
    // možné formáty šablon
    templateFormats: ["njk","html", "liquid", "md"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};