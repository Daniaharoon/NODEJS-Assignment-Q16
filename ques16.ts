
// // //  16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// // // • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// // // • Add one new guest to the beginning of your array.

// // // • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

let Guest:string[] = ["Amna", "Saba", "sara"];
let beginGuest:string = "Maham";
Guest.unshift(beginGuest);
let middleGuest:string = "Aliza";
let middleIndex = Guest.length/2;
Guest.splice(middleIndex,0,middleGuest);

let endGuest:string = "Sidra";
Guest.push(endGuest);
 Guest.map((item) =>{
    console.log(`${item}, You are cordinnaly invited to dinner.`);
 })
