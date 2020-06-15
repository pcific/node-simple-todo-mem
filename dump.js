const util = require('util');
const dump = (o)=>{console.log(util.inspect(o, {showHidden: false, depth: null}));};
module.exports = dump 
