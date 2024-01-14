let value = 500

// console.log("i have " + value + " rupees!"); // not recommanded to write like this instead you write

console.log(`i have ${value} rupees!`); // this method is used more 


// Methods for string
// 1. variable.length => returns length of string
let string = `i have ${value} rupees!`
console.log(string.length);

// 2. variable.charAt(indexNo) => returns index character
let name = "kaif"
// console.log(name.charAt(-3)); // this is not allow to negative index
console.log(name.charAt(3)); 


// 3. variable.at(indexNo) => returns index character
let address = "vasundhara"
console.log(address.at(-1));
// it can take negative value (in this it char from back of string)
console.log(address.at(1));
console.log(address[3]); // both are same

// 4. variable.charCodeAt(index) => returns UTF char int value (ASCII)
let channel = "Apna college"
console.log(channel.charCodeAt(0));

// 5. variable.slice(startingIndex, endingIndex) => returns part of string from startingIndex to endingIndex - 1
let email = "mohdsaifi@1729mohd.com"
console.log(email.slice(4, 9));
console.log(email.slice(4)); // returns rest string after index 4
console.log(email.slice(-4)); // it returns from back of the string 
console.log(email.slice(-12, -4)); // it returns from back of the string 

// 6. variable.substring(startingIndex, endingIndex) => same as slice but the only difference is negative number is treated as 0 index only
let computer = "apple device is much better"
console.log(computer.substring(6, 13));
console.log(computer.substring(6));
console.log(computer.substring(-6)); // here it will treate -6 as 0
console.log(computer.substring(-12, -6)); // here it will nothing extracted

// 7. variable.substr(startingIndex, no.OfCharacters) => same as slice but the only
// difference is that the second parameter is the no. of character you want to extra from string
// this is depricate
let pc = "i have windows laptop"
console.log(pc.substr(0, 6));
console.log(pc.substr(3));
console.log(pc.substr(-3)); // from the end of string 

// 8. variable.toLowerCase() => returns all char is lowerCase
let processor = "Macbook"
console.log(processor.toLocaleLowerCase());

// 9. variable.toLowerCase() => returns all char is upperCase
let ram = "samsung"
console.log(ram.toLocaleUpperCase());


// 10. variable.concat(more than one strign in it) => returns to add two strings
// instead using (+) for cancatination use cancat() buildin function of js 
let mouse = "logitech"
console.log(mouse.concat(" ", "mouse", " at 500 rupees ", "from amazon!"));

// 11. variable.trim() => return after exclude all white spaces from string
// it removes all white spaces in string from starting and ending but not form middle 
let keyboard = "          dell      kaif     "
console.log(keyboard); // with white space
console.log(keyboard.trim()); // whitout white space

// 12. variable.trimStart() => return after exclude staring white spaces from string
// it removes all white spaces in string from starting only but not form middle 
let keyboardofdell = "          dell      "
console.log(keyboardofdell); // with white space
console.log(keyboardofdell.trimStart()); // whitout white space

// 13. variable.trimEnd() => return after exclude ending white spaces from string
// it removes all white spaces in string from ending only but not form middle 
let keyboardofsamsung = "        samsung     "
console.log(keyboardofsamsung); // with white space
console.log(keyboardofsamsung.trimEnd()); // whitout white space

// 14. variable.padStart(total no.'s in string, "string") => pad string at start of variable
let textstart = "5";
let paddedstart = textstart.padStart(4,"xyzsd");
console.log(paddedstart);
paddedstart = textstart.padStart(4,"x");
console.log(paddedstart);

// 15. variable.padEnd(total no.'s in string, "string") => pad string at end of variable
let textend = "5";
let paddedend = textend.padEnd(4,"xyzsd");
console.log(paddedend);
paddedend = textend.padEnd(4,"x");
console.log(paddedend);

// 16. variable.repeat(no.'s of time you want to be repeat the string) => returns no.'s of stirng 
let textrepeat = "Hello world!";
let resultrepeat = textrepeat.repeat(2);
console.log(resultrepeat);

// 17. variable.replce("word available in string", "replacing first matching word in string") => return after replcing the word from the string
// this method is case sensitive 
let textreplace = "Please visit Microsoft!";
let newTextreplace = textreplace.replace("Microsoft", "W3Schools");
console.log(newTextreplace);

// for insensitive use /i
textreplace = "Please visit Microsoft!";
newTextreplace = textreplace.replace(/MICROSOFT/i, "W3Schools");
console.log(newTextreplace);

// 18. variable.replceAll("word available in string", "replacing all words with matching string") => return after replcing the word from the string 
let textreplaceAll = "Please visit Microsoft! Microsoft! is good";
let newTextreplaceAll = textreplaceAll.replaceAll("Microsoft", "W3Schools");
console.log(newTextreplaceAll);

// for all matches use also /g
textreplaceAll = "Please visit Microsoft! Microsoft! is good";
newTextreplaceAll = textreplaceAll.replaceAll(/Microsoft/g, "W3Schools");
console.log(newTextreplaceAll);

// 19. variable.indexOf('char') => returns index value
name = "kaif"
console.log(name.indexOf(`k`));

// 20. variable.includes() => returns true or false
let gameName = "maryo ka game hai ye"
console.log(gameName.includes());

// 21. variable.split(seperator, limit) => return array after seperating
let user = "mohan-sohan-rohan-sonu-munu"
console.log(user.split('-')); // it return all the elements 
console.log(user.split('-', 4)); // it return only four elements
