var path= require('path');
var handlebars= require('handlebars');

module.exports = {
  process(src, path) {
    let doit=handlebars.compile(src)
    return ()=>{};
  }
};