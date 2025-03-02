// npm <i/rm> nodemon <-g/-D>

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));
console.log(uuid());

// in package.json
// "uuid": "^11.1.0"
// major-version.minor-version.patch
// ^X.X.X update allowed for: minor-version & patch
// ~X.X.X update allowed for: patch
// X.X.X no updates
// * update allowed for everything
