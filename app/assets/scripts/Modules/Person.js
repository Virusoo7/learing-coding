function Person(fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function() {
		console.log("hello my name is "+ this.name + " and my fave colore is " + this.favoriteColor+ "");
	}
}
module.exports = Person;