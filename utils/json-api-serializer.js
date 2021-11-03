const jsonapiserializer = require('jsonapi-serializer').Serializer;

exports.serialize = (type, json) => {
    let attributes = [];
    for (let key in json) attributes.push(key);
    return new jsonapiserializer(type, { attributes }).serialize(json);
};