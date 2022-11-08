
// =========== lev1_1: for loop Hello World ==============

for (let i = 1; i <= 10; i += 1) {
    console.log("hello World " + i);
}

// =============== lev1_2: for loop Array ================

let numArray = [];
for (let i = 0; i <= 10; i += 1) {
    numArray.push(i);
    console.log(numArray);
}

// =============== lev1_4: for loop Namen ===============

let names = ["Freddy", "Steffen", "Finn", "Julia", "Franzi", "Christian", "Sergio"];
console.log(names)
for (let i = 0; i < names.length; i += 1) {
    console.log(i, names[i])
}

// =============== lev1_6: for loop Array ===============

let retArray = [];
for (let i = 1; i <= 100; i += 1) {
    retArray.push("image_" + (i) + ".jpg");
}
console.log(retArray);


// =============== lev1_7: do while ===============
let number = 1;
do {
    console.log("The number is " + number);
    number += 1;
} while (number <= 5);

// =============== lev1_8: do while =================
let zahl = 0
do {
    if (zahl % 2 == 0) {
        console.log(zahl);
    }
    zahl += 1;
} while (zahl <= 20);

// =============== lev1_9: loops_mit_input_word =================
let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']


// =============== lev2_1: for loop Array =================

function imageArray() {
    let returnArray = [];

    for (i = 1; i <= 100; i++) {

        //${i} ist das gleiche wie + (i) +
        if (i < 10) {
            returnArray.push(`image_00${i}.jpg`);
        } else if (i < 100) {
            returnArray.push(`image_0${i}.jpg`);
        } else {
            returnArray.push(`image_${i}.jpg`);
        }
    }
    console.log(returnArray);
}
imageArray();