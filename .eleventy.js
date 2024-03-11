// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("blog",function(date){
    return `<div class = "blog">
    <div class="date">Log Date:${date}</div>
    </div>`;
  });
};