//Pluralize
var pluralize = function (word, number) {
return (number === 1) ? word : (word + "s");
};

//Functional getInfo
var getInfo = function(name, phoneNum, street) {
	var infoObj = {}
	infoObj["name"] = name
	infoObj["phone"] = phoneNum
	infoObj["street"] = street
	return infoObj
}

//Removing Falsey Values
//currently not working
var removeFalsey = function(array) {
	for(var i=0; i<array.length; i++){
		(array[i] === 0 || null || "" || undefined || NaN || false) ? 
			array.splice(i, 1) :
			console.log("Real Value"); 
	}
	return array
};


//currently not working
var falseyArray = ['dog', 45, 0, undefined, NaN];
var falseyFunc = function() {
	for(var i=0; i<falseyArray.length; i++) {
		(falseyArray[i] === 0 || null || '' || undefined || NaN || false) ?
			falseyArray.splice(i, 1) :
			true;
	}
};
console.log(falseyArray)


