/*********************** 
 *  Global Variables
 * *********************/

// @desc - These are the global variables to be used or whatever.

let billAmount = document.getElementById("bill_amount");
let getTip = document.getElementById("tip_button");
let tipResults = document.getElementById("tip_results");
let clearResults = document.getElementById("reset_button");


/*************************
 * Calculating the Tip
 ************************/

// @desc - This is where the magic happens. Calculates the tips when "Get Tips" is pressed.

getTip.addEventListener("click", () => {
    let fifteenPercent = billAmount.value * .15;
    let twentyPercent = billAmount.value * .2;
    let twentyFivePercent = billAmount.value * .25;
    tipResults.innerHTML = `
        The tip should be at least: $${fifteenPercent.toFixed(2)} (15%). However, a decent
        tip amount would be: $${twentyPercent.toFixed(2)} (20%). Lastly, if you really wanna 'Ball out', you could tip: $${twentyFivePercent.toFixed(2)} (25%).
    `;
})


/************************* 
 *  Clear the Results
*************************/

// @desc - Destroys the evidence when the "Start Over" button is pressed.

clearResults.addEventListener("click", () => {
    tipResults.innerHTML = ``;
});


/**********END OF FILE!!!**********/