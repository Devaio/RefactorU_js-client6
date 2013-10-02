//Pluralize
var pluralize = function (word, number) {
return (number === 1) ? word : (word + "s");
};

//Functional getInfo
var getInfo = function(name, phoneNum, street) {
	var infoObj = {}
	name = prompt("")
	phoneNum = prompt("")
	street = prompt("")
	infoObj["name"] = name
	infoObj["phone"] = phoneNum
	infoObj["street"] = street
	return infoObj
}
var vicInfo = getIndo




//Removing Falsey Values
//Pure
var removeFalsey = function(array) {
	var keepTruth = []
	for(var i=0; i<array.length; i++){
		!!array[i] ? keepTruth.push(array[i]) : false
	};
	return keepTruth
};

//Non-Pure
var falseyArray = ['dog', "", 0, 45, NaN, undefined, 'yes', false];
var truthyArray = [];
var falseyFunc = function () {
	for(var i=0; i<falseyArray.length; i++){
		!!falseyArray[i] ? truthyArray.push(falseyArray[i]) : false
	};
};








