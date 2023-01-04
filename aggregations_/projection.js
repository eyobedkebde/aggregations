
/**
 * Handles project related queries
 */

class Projection{
    constructor(model){
        this.model = model;
    }

    /**
     * performs projections based on the provided conditions
     * @param {String} fieldName the field name to be manuplated
     * @returns database results
     */
    async project(...conditions){
        try{
            const agreggation = {}
            //convert arrays of conditions to aggregation queries
            conditions.forEach((query, index)=>{
                agreggation[query] = 1;
            });
    
            //executes
            const result = await this.model.aggregate([
                {$project: agreggation}
            ]);
            return result;
        }catch(err){
            throw errß
        }

    }

}

module.exports = Projection;