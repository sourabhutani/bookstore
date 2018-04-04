var mongoose = require('mongoose');

// Genre schema
var genreSchema = mongoose.Schema({
 
  name: {
      type:String,
      required:true
  },
  create_date:{
       type:Date,
       default:Date.now
  }
});

var Genere = module.exports = mongoose.model('Genre',genreSchema);


// Get generes
module.exports.getGenres = function(callback,limit){
  Genere.find(callback).limit(limit);
}

// Add genere
module.exports.addGenre = function(genre,callback){
  Genere.create(genre,callback);
}

// Update genere
module.exports.updateGenre = function(id,genre,options,callback){
  var query = {_id:id};
  var update = {
  	  name : genre.name
  }
  Genere.findOneAndUpdate(query,update,options,callback);
}

// Delete genere
module.exports.deleteGenre = function(id,callback){
  var query = {_id:id};
  Genere.remove(query,callback);
}