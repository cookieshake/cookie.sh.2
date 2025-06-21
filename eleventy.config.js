export default function(eleventyConfig) {
    eleventyConfig.setInputDirectory("pages");
    eleventyConfig.addPassthroughCopy("css");
}