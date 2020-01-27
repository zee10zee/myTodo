

// remweber that module.export is an object 
///so the fuction and variable can be an object property 
// of it also !


// Note : module.exports = exports so : 


exports.getDate = function(){

   const today = new Date();
   const options = {
        day : "numeric",
        weekday: "long",
        month : "long"
    };
    
    return today.toLocaleDateString("en-US", options); 
};

exports.getDay = function(){

   const today = new Date();
   const options = {
        weekday : "long"
    };

   return today.toLocaleDateString("en-US", options);
}