//Pluralize
var pluralize = function (word, number) {
return (number === 1) ? word : (word + "s");
};

//Functional getInfo
var getInfo = function() {
	var infoObj = {}
	var name = prompt("Please enter your name:")
	var phoneNum = prompt("Please enter your phone number:")
	var street = prompt("Please enter your street:")
	infoObj.name = name
	infoObj.phone = phoneNum
	infoObj.street = street
	return infoObj
}
var vicInfo = getInfo()




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








