/**
 * Relationship is an abstract base class. It is defined simply
 * to have something to inherit from and to define relationship
 * between two instances of Person
 * @this {Relationship}
 * @param {Person} partner The other person in this relationship
 * @constructor
 */
function Relationship(partner1, partner2){
    /** @private */ this.partner1   = partner1;
    /** @private */ this.partner2   = partner2;
    /** @private */ this.love       = 0;
}

//TODO:Define Person (has to have requirements and effort)

/**
 * Returns true or false based on the fact if there is enough love in your relationship
 *
 * @this {Relationship}
 * @param effort {Object} Array like object with boolean properties describing
 *      your effort of lack thereof.
 * @return {boolean} Value describing if there is enough love in relationship
 */
Relationship.prototype.does_love_enough = function (effort){
    //TODO: def love
}

/**
 * Gets a  String representation of the Relationship
 *
 * @override
 * @this {Relationship}
 * @return {string} Human-readable representation of this Realtionship.
 */
Relationship.prototype.toString = function () {
    return "Relationship between " + this.partner1 + " and " + this.partner2;
};