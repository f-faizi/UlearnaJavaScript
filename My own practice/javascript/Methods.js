// From Methods 

// Number --------->>> 
// let num = 12.4;
// let num2 = 12.6;
// console.log(Math.floor(num));
// console.log(Math.floor(num2));
// console.log(Math.ceil(num));
// console.log(Math.ceil(num2));
// console.log(Math.round(num));
// console.log(Math.round(num2));
// console.log(Math.trunc(num));
// console.log(Math.trunc(num2));

// let num3 = 2.43422;
// console.log(num3)
// console.log(num3.toFixed(8))
// console.log(0.1 + 0.2 == 0.3);
// let num4 = 0.2 + 0.1;
// console.log(num4.toFixed(2))



// console.log(isNaN(NaN))
// console.log(isNaN(12))
// console.log(isFinite(12))
// console.log(isFinite("sldf"))



// console.log(+"100px")
// console.log(parseInt('100px'))
// console.log(parseFloat('10.25rem'))
// console.log(parseInt('a12'))



// let num5 = Math.random();
// console.log(num5.toFixed(3))


// Number ends ---------->>>>> 
// String starts ----------->>>>

// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;
// console.log(guestList);

// let guestList1 = "Guests:\n * John\n * Pete\n * Mary";
// console.log(guestList1);

// console.log("\nHello \nworld");
// console.log(`Hello
// world
// `);
// console.log("Is it \r work")
// console.log("Is it \' work")
// console.log("Is it \` work")
// console.log("Is it \" work")
// console.log("Is it \\ work")
// console.log("Is it\twork")
// console.log("Is it \v \b \fwork")




// let hello = "How are you";
// console.log(hello[0])
// console.log(hello.at(0))
// // console.log(hello.[hello.length-1])      // It gives me error
// console.log(hello.at(-4))
// for (let char of hello) {
//     console.log(char);
// }




// let str = "Howis";
// str[0] = 'h';
// console.log(str); // It is not working like this
// str = 'h' + str[0]
// console.log(str)

// changing case 
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str[3].toUpperCase())




// searching for substring 

// let searching = "Find this sentence in this";
// console.log(searching.indexOf('Find'))
// console.log(searching.indexOf('find'))
// console.log(searching.indexOf('this'))
// console.log(searching.indexOf('sentence'))
// console.log(searching.indexOf('e'))
// console.log(searching.indexOf('this', 6))


// let str2 = "this of this and about this";
// let hadaf = 'this';
// let place = 0;

// // while (true) {
// //     let res = str2.indexOf(hadaf, place);
// //     if (res == -1) break;
// //     console.log(`Could find at ${res}`);
// //     place = res + 1;
// // }
// // place = -1;
// // while ((place = str2.indexOf(hadaf, place + 1) != -1)) {
// //     console.log(place)
// // }
// if (str2.indexOf('this')) {
//     console.log(`We found this`)
// }
// if (str2.indexOf('this') != -1) {
//     console.log(`We found this`)
// }


// // include startwith endwith 

// console.log(str2.includes("is"));
// console.log(str2.includes("this"));
// console.log(str2.includes("de"));
// console.log(str2.startsWith('th'))
// console.log(str2.startsWith('is'))
// console.log(str2.endsWith('s'))



// // subString 
// let str = "Faizullah faizi Barakzai"
// // console.log(str.slice(0, 10))
// // console.log(str.slice(0, 1))
// // console.log(str.slice(-8, -1))
// // console.log(str.length)
// console.log(str.substring(2, 6));
// console.log(str.substring(6, 2));
// console.log(str.slice(6, 2))
// console.log(str.substr(2, 4))
// console.log(str.substr(0, 10))
// console.log(str.substr(-4, 10))




// // Comparing strings
// console.log('A'.codePointAt(0))
// console.log('a'.codePointAt(0))
// console.log('a'.codePointAt(0).toString(16))
// console.log('Z'.codePointAt(0).toString(16))


// let str = '';
// for (let i = 1; i <= 220; i++) {
//     str += String.fromCodePoint(i);
// }
// console.log(str);


// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//         str.slice(0, maxlength - 1) + '…' : str;
// }
// console.log(truncate("What I'd like to tell on this topic is:", 20))


function sliceee(str, len) {
    return (str.length > len) ? str.slice(0, len) + '...' : str;
}
console.log(sliceee("it is going to call up to 10 characters here and then it will add", 10))
console.log(sliceee("Faizullah", 15))