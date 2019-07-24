Js involves predefined objects -> therefore
function: group of instructions to perform a specific TextTrackList.


/*creating object*/

let pen = {

    /*characteristics/properties:*/

    type: "ballpoint",
    color: "blue",
    brand: "Bic"
}

console.log(pen.type); /* says "ballpoint" in developer tools */ /* pen.type aka object.characteristic */

/* concutnation - making sentences with string + objects */

console.log("I use a" + pen.brand + ".") /* says "i use a Bic." in console */

to prevent repeating console.log, make a method/function.

function describe(pen) {
                var  description = "I use a" + pen.brand + ".";
                return description;
}

/*can be*/

let pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic",
    describe: function()  /*dont use "pen" inside (). target "pen" with "this." */
                var description = "The" + this.color + "pen is a" + this.type + this.brand + ".";

    return description;
}

console.log (pen.describe()); /* will say  The blue pen is a ballpoint Bic. */
