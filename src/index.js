var keys = require("keys");


module.exports = function values(object) {
    var objectKeys = keys(object),
        length = objectKeys.length,
        i = -1,
        il = length - 1,
        result = new Array(length);

    while (i++ < il) {
        result[i] = object[objectKeys[i]];
    }

    return result;
};
