// Object Literal
// Create objecta on demand. The folloing code uses a single line
// var die = {};
var die = {
    size: 4,
    count: 1,
    roll: function(dieSize) {
        var result = Math.cell(dieSize * Math.random());
        return result;
    }
}


// Object exports 
exports.game = die;