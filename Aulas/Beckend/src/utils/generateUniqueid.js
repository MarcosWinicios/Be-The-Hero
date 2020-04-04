const crypto = require('crypto');
module.exports = function GenerateUniqueid(){
    return crypto.randomBytes(4).toString('HEX');
}