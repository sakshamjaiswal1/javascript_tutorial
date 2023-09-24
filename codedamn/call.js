const name = {
  firstName: "Saksham",
  lastName: "Jaiswal",
};

const printFullName = function (homeTown, state) {
  console.log(
    this.firstName + this.lastName + " from " + homeTown + " " + state
  );
};

printFullName.call(name, "Shaktifarm", "Uttarakhand");

const nameFriend = {
  firstName: "Aviroop",
  lastName: "Poddar",
};

printFullName.call(nameFriend, "Shakti", "UK");
printFullName.apply(nameFriend, ["Shakti", "Bharat"]);

const printMyName = printFullName.bind(nameFriend, "sak", "up");


Function.prototype.callPolyfill = function (context, ...args) {

	context.tempMethod = this


	const result = context.tempMethod(...args)


	delete context.tempMethod

	// Return the result
	return result
}