const fillGasTank = (gallons) => {
	if (gallons > 15) {
  	console.log("You cannot add this much gas to the tank");
  } else {
  	console.log(`I filled the gas tank with ${gallons} gal of gas`);
  }
}
// test output
fillGasTank(13);
fillGasTank(20);