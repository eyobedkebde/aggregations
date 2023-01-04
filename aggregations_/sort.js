
/**
 * Handles sort related queries
 */

class Sort{
    constructor(model){
        this.model = model;
    }

    /**
     * performs sort based on the provided conditions
     * @param {String} fieldName the field name to be manuplated
     * @param {String} condition asecnding or decending
     * @returns database results
     */
    async sort(fieldName, condition){
        try{
            const agreggation = {}
            agreggation[fieldName] = condition;
    
            const result = await this.model.find().sort(agreggation)
            return result;
        }catch(err){
            throw err
        }
    }

}

module.exports = Sort;