// const Projection = require('./projection');

module.exports = {
     /**
     * performs projections based on the provided conditions
     * @param {String} projectAs the alias you want to recieve from returned objects
     * @param {String} fieldName the field name to be manuplated
     * @returns database results
     */
    project: require('./projection')
}