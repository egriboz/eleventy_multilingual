module.exports = function (collection) {
  return collection.getFilteredByGlob("./src/content/tr/posts/*.md");
}